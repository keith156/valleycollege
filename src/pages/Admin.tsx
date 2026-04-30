import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SchoolEvent, getEvents, saveEvent, deleteEvent } from '../lib/events';
import { WallOfFameYear, getWallOfFame, saveWofYear, deleteWofYear, StudentRecord } from '../lib/wallOfFame';
import { SpotlightAlumnus, getSpotlight, saveAlumnus, deleteAlumnus } from '../lib/spotlight';
import { Review, getReviews, deleteReview } from '../lib/reviews';
import { Trash2, Edit2, Plus, LogOut, Calendar, Award, X, Users, Loader2, Upload, Image as ImageIcon, Star, MessageSquare } from 'lucide-react';

const BASE_REVIEWS = 326;

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [tab, setTab] = useState<'events' | 'wof' | 'spotlight' | 'reviews'>('events');
  const [isLoading, setIsLoading] = useState(false);
  
  // Events State
  const [events, setEvents] = useState<SchoolEvent[]>([]);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [eventForm, setEventForm] = useState({ title: '', date: '' });


  // Wall of Fame State
  const [wof, setWof] = useState<WallOfFameYear[]>([]);

  // Spotlight State
  const [spotlight, setSpotlight] = useState<SpotlightAlumnus[]>([]);
  const [editingAlumniId, setEditingAlumniId] = useState<string | null>(null);
  const [alumniForm, setAlumniForm] = useState({ name: '', period: '', profession: '', workStation: '', imageUrl: '' });
  const [editingWofId, setEditingWofId] = useState<string | null>(null);
  const [wofForm, setWofForm] = useState<{ year: string; students: StudentRecord[] }>({ year: '', students: [] });
  const [uploadProgress, setUploadProgress] = useState<{ progress: number; status: string } | null>(null);

  // Reviews State
  const [reviews, setReviews] = useState<Review[]>([]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isLoggedIn) {
        setIsLoading(true);
        try {
          const [evs, wofData, spotData, revData] = await Promise.all([
            getEvents(),
            getWallOfFame(),
            getSpotlight(),
            getReviews()
          ]);
          setEvents(evs);
          setWof(wofData);
          setSpotlight(spotData);
          setReviews(revData);
        } catch (err) {
          console.error("Error fetching data:", err);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword('');
  };

  // --- EVENTS CRUD ---
  const handleSaveEvent = async (e: FormEvent) => {
    e.preventDefault();
    if (!eventForm.title || !eventForm.date) return;
    
    setIsLoading(true);
    const id = editingEventId || Date.now().toString();
    const event = { id, ...eventForm };
    
    try {
      await saveEvent(event);
      const updated = await getEvents();
      setEvents(updated);
      setEventForm({ title: '', date: '' });
      setEditingEventId(null);
      alert(editingEventId ? "Program updated successfully!" : "Program added successfully!");
    } catch (err) {
      alert("Failed to save event");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteEvent = async (id: string) => {
    if (window.confirm('Delete this event?')) {
      setIsLoading(true);
      try {
        await deleteEvent(id);
        const updated = await getEvents();
        setEvents(updated);
      } catch (err) {
        alert("Failed to delete event");
      } finally {
        setIsLoading(false);
      }
    }
  };


  // --- SPOTLIGHT CRUD ---
  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadProgress({ progress: 0, status: 'Processing image...' });
    try {
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new window.Image();
          img.src = event.target?.result as string;
          img.onload = () => {
            setUploadProgress({ progress: 30, status: 'Compressing...' });
            const canvas = document.createElement('canvas');
            const MAX_SIZE = 600;
            let width = img.width;
            let height = img.height;

            if (width > height) {
              if (width > MAX_SIZE) { height = Math.round(height * (MAX_SIZE / width)); width = MAX_SIZE; }
            } else {
              if (height > MAX_SIZE) { width = Math.round(width * (MAX_SIZE / height)); height = MAX_SIZE; }
            }

            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            if (!ctx) { reject(new Error('Canvas failed')); return; }
            ctx.drawImage(img, 0, 0, width, height);
            setUploadProgress({ progress: 70, status: 'Encoding...' });
            // Convert directly to a data URL — no Firebase Storage needed
            const result = canvas.toDataURL('image/jpeg', 0.7);
            resolve(result);
          };
          img.onerror = () => reject(new Error('Failed to load image'));
        };
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(file);
      });

      setUploadProgress({ progress: 100, status: 'Done!' });
      setAlumniForm(prev => ({ ...prev, imageUrl: dataUrl }));

      // Brief delay so user sees "Done!" before it disappears
      setTimeout(() => setUploadProgress(null), 500);
    } catch (err: any) {
      console.error('Image processing error:', err);
      alert(`Failed to process image: ${err.message || 'Unknown error'}`);
      setUploadProgress(null);
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleSaveAlumni = async (e: FormEvent) => {
    e.preventDefault();
    if (!alumniForm.name || !alumniForm.period || !alumniForm.profession || !alumniForm.workStation || !alumniForm.imageUrl) {
      alert("Please fill all fields, including the image.");
      return;
    }
    
    setIsLoading(true);
    const id = editingAlumniId || Date.now().toString();
    const alumnus = { id, ...alumniForm };
    
    try {
      await saveAlumnus(alumnus);
      const updated = await getSpotlight();
      setSpotlight(updated);
      setAlumniForm({ name: '', period: '', profession: '', workStation: '', imageUrl: '' });
      setEditingAlumniId(null);
      alert(editingAlumniId ? "Alumni spotlight updated successfully!" : "Alumni spotlight added successfully!");
    } catch (err) {
      alert("Failed to save alumni record");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAlumni = async (id: string) => {
    if (window.confirm('Delete this alumni spotlight record?')) {
      setIsLoading(true);
      try {
        await deleteAlumnus(id);
        const updated = await getSpotlight();
        setSpotlight(updated);
      } catch (err) {
        alert("Failed to delete alumni record");
      } finally {
        setIsLoading(false);
      }
    }
  };

  // --- WOF CRUD ---
  const handleSaveWof = async (e: FormEvent) => {
    e.preventDefault();
    if (!wofForm.year) return;
    
    setIsLoading(true);
    const id = editingWofId || Date.now().toString();
    const yearData = { id, ...wofForm };
    
    try {
      await saveWofYear(yearData);
      const updated = await getWallOfFame();
      setWof(updated);
      setWofForm({ year: '', students: [] });
      setEditingWofId(null);
      alert(editingWofId ? "Wall of Fame record updated successfully!" : "Wall of Fame record added successfully!");
    } catch (err) {
      alert("Failed to save Wall of Fame data");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteWof = async (id: string) => {
    if (window.confirm('Delete this Wall of Fame year?')) {
      setIsLoading(true);
      try {
        await deleteWofYear(id);
        const updated = await getWallOfFame();
        setWof(updated);
      } catch (err) {
        alert("Failed to delete Wall of Fame data");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const addWofStudent = () => {
    setWofForm({ ...wofForm, students: [...wofForm.students, { name: '', combo: '', pts: '' }] });
  };

  const updateWofStudent = (index: number, field: keyof StudentRecord, value: string) => {
    const newStudents = [...wofForm.students];
    newStudents[index] = { ...newStudents[index], [field]: value };
    setWofForm({ ...wofForm, students: newStudents });
  };

  const removeWofStudent = (index: number) => {
    const newStudents = wofForm.students.filter((_, i) => i !== index);
    setWofForm({ ...wofForm, students: newStudents });
  };

  const handleDeleteReview = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setIsLoading(true);
      try {
        await deleteReview(id);
        const updated = await getReviews();
        setReviews(updated);
      } catch (err) {
        alert("Failed to delete review");
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Access</h1>
            <p className="text-gray-500">Please enter the password to continue.</p>
            <p className="text-xs text-gray-400 mt-2">(Hint: admin123)</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-md">Login</button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <button onClick={handleLogout} className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors">
            <LogOut size={18} /> Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
          <button onClick={() => setTab('events')} className={`flex items-center gap-2 pb-4 px-2 font-bold whitespace-nowrap transition-colors ${tab === 'events' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}>
            <Calendar size={20} /> School Programs
          </button>
          <button onClick={() => setTab('wof')} className={`flex items-center gap-2 pb-4 px-2 font-bold whitespace-nowrap transition-colors ${tab === 'wof' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}>
            <Award size={20} /> Wall of Fame
          </button>
          <button onClick={() => setTab('spotlight')} className={`flex items-center gap-2 pb-4 px-2 font-bold whitespace-nowrap transition-colors ${tab === 'spotlight' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}>
            <Users size={20} /> Alumni Spotlight
          </button>
          <button onClick={() => setTab('reviews')} className={`flex items-center gap-2 pb-4 px-2 font-bold whitespace-nowrap transition-colors ${tab === 'reviews' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}>
            <Star size={20} /> Reviews ({reviews.length})
          </button>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'events' && (
            <motion.div key="events" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div ref={formRef} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">{editingEventId ? 'Edit Event' : 'Add New Event'}</h2>
                <form onSubmit={handleSaveEvent} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input type="text" value={eventForm.date} onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })} placeholder="e.g., Oct 20, 2026" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required disabled={isLoading} />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                    <input type="text" value={eventForm.title} onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })} placeholder="e.g., Mid-Term Exams" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required disabled={isLoading} />
                  </div>
                  <div className="md:col-span-1 flex gap-2">
                    <button type="submit" disabled={isLoading} className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-4 rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-50">
                      {isLoading ? <Loader2 className="animate-spin" size={18} /> : (editingEventId ? <Edit2 size={18} /> : <Plus size={18} />)} {editingEventId ? 'Update' : 'Add'}
                    </button>
                    {editingEventId && <button type="button" onClick={() => { setEditingEventId(null); setEventForm({ title: '', date: '' }); }} className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors" disabled={isLoading}>Cancel</button>}
                  </div>
                </form>
              </div>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
                {isLoading && (
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center">
                    <Loader2 className="animate-spin text-primary" size={32} />
                  </div>
                )}
                <div className="p-6 border-b border-gray-100 bg-gray-50"><h2 className="text-lg font-bold text-gray-900">Current Programs</h2></div>
                <div className="divide-y divide-gray-100">
                  {events.map(event => (
                    <div key={event.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                      <div><span className="inline-block px-3 py-1 bg-blue-50 text-primary text-sm font-bold rounded-full mb-2">{event.date}</span><h3 className="text-lg font-bold text-gray-900">{event.title}</h3></div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => { setEditingEventId(event.id); setEventForm({ title: event.title, date: event.date }); scrollToForm(); }} className="p-2 text-gray-500 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors"><Edit2 size={18} /></button>
                        <button onClick={() => handleDeleteEvent(event.id)} className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}


          {tab === 'spotlight' && (
            <motion.div key="spotlight" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
               <div ref={formRef} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
                 <h2 className="text-xl font-bold text-gray-900 mb-6">{editingAlumniId ? 'Edit Alumni Spotlight' : 'Add Alumni Spotlight'}</h2>
                 <form onSubmit={handleSaveAlumni} className="space-y-4">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                       <input type="text" value={alumniForm.name} onChange={(e) => setAlumniForm({ ...alumniForm, name: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required disabled={isLoading} />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Period (e.g., 2004-2005)</label>
                       <input type="text" value={alumniForm.period} onChange={(e) => setAlumniForm({ ...alumniForm, period: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required disabled={isLoading} />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
                       <input type="text" value={alumniForm.profession} onChange={(e) => setAlumniForm({ ...alumniForm, profession: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required disabled={isLoading} />
                     </div>
                     <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Work Station</label>
                       <input type="text" value={alumniForm.workStation} onChange={(e) => setAlumniForm({ ...alumniForm, workStation: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required disabled={isLoading} />
                     </div>
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                     <div className="flex gap-2">
                       <div className="flex-1 relative">
                         <ImageIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                         <input type="text" value={alumniForm.imageUrl} onChange={(e) => setAlumniForm({ ...alumniForm, imageUrl: e.target.value })} placeholder="Image URL or upload..." className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required disabled={isLoading || !!uploadProgress} />
                       </div>
                       <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" className="hidden" />
                       <button type="button" onClick={() => fileInputRef.current?.click()} disabled={isLoading || !!uploadProgress} className="flex items-center gap-2 px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors disabled:opacity-50">
                         {uploadProgress ? <Loader2 className="animate-spin" size={18} /> : <Upload size={18} />}
                         {uploadProgress ? `${uploadProgress.progress}%` : "Upload"}
                       </button>
                     </div>
                   </div>
                   <div className="flex gap-2 pt-2">
                     <button type="submit" disabled={isLoading} className="flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-6 rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-50">
                       {isLoading ? <Loader2 className="animate-spin" size={18} /> : (editingAlumniId ? <Edit2 size={18} /> : <Plus size={18} />)} {editingAlumniId ? 'Update' : 'Add'}
                     </button>
                     {editingAlumniId && (
                       <button type="button" onClick={() => { setEditingAlumniId(null); setAlumniForm({ name: '', period: '', profession: '', workStation: '', imageUrl: '' }); }} className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors" disabled={isLoading}>
                         Cancel
                       </button>
                     )}
                   </div>
                 </form>
               </div>
 
               <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
                 {isLoading && (
                   <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center">
                     <Loader2 className="animate-spin text-primary" size={32} />
                   </div>
                 )}
                 <div className="p-6 border-b border-gray-100 bg-gray-50">
                   <h2 className="text-lg font-bold text-gray-900">Current Spotlight Alumni</h2>
                 </div>
                <div className="divide-y divide-gray-100">
                  {spotlight.map(person => (
                    <div key={person.id} className="p-6 flex flex-col sm:flex-row gap-4 hover:bg-gray-50 transition-colors">
                      <img src={person.imageUrl} alt="" className="w-20 h-20 object-cover rounded-xl shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-0.5">{person.name}</h3>
                        <p className="text-primary text-sm font-bold mb-1">{person.period} • {person.profession}</p>
                        <p className="text-gray-500 text-xs">{person.workStation}</p>
                      </div>
                      <div className="flex items-start gap-2 shrink-0">
                        <button onClick={() => { setEditingAlumniId(person.id); setAlumniForm({ name: person.name, period: person.period, profession: person.profession, workStation: person.workStation, imageUrl: person.imageUrl }); scrollToForm(); }} className="p-2 text-gray-500 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors"><Edit2 size={18} /></button>
                        <button onClick={() => handleDeleteAlumni(person.id)} className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {tab === 'wof' && (
            <motion.div key="wof" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div ref={formRef} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">{editingWofId ? 'Edit Wall of Fame Year' : 'Add Wall of Fame Year'}</h2>
                <form onSubmit={handleSaveWof} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                    <input type="text" value={wofForm.year} onChange={(e) => setWofForm({ ...wofForm, year: e.target.value })} placeholder="e.g., 2025" className="w-full md:w-1/3 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required disabled={isLoading} />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="block text-sm font-medium text-gray-700">Students</label>
                      <button type="button" onClick={addWofStudent} className="text-sm font-bold text-primary flex items-center gap-1 hover:text-blue-700" disabled={isLoading}><Plus size={16} /> Add Student</button>
                    </div>
                    <div className="space-y-3">
                      {wofForm.students.map((student, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
                          <input type="text" value={student.name} onChange={(e) => updateWofStudent(idx, 'name', e.target.value)} placeholder="Student Name" className="flex-1 w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required disabled={isLoading} />
                          <input type="text" value={student.combo} onChange={(e) => updateWofStudent(idx, 'combo', e.target.value)} placeholder="Combination (e.g., PCM/ICT)" className="w-full sm:w-48 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required disabled={isLoading} />
                          <input type="text" value={student.pts} onChange={(e) => updateWofStudent(idx, 'pts', e.target.value)} placeholder="Points (e.g., 20 pts)" className="w-full sm:w-32 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required disabled={isLoading} />
                          <button type="button" onClick={() => removeWofStudent(idx)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0" disabled={isLoading}><X size={20} /></button>
                        </div>
                      ))}
                      {wofForm.students.length === 0 && <p className="text-sm text-gray-500 italic">No students added yet.</p>}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <button type="submit" disabled={isLoading} className="flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-6 rounded-xl font-bold hover:bg-primary/90 transition-colors disabled:opacity-50">
                      {isLoading ? <Loader2 className="animate-spin" size={18} /> : (editingWofId ? <Edit2 size={18} /> : <Plus size={18} />)} {editingWofId ? 'Update Year' : 'Save Year'}
                    </button>
                    {editingWofId && <button type="button" onClick={() => { setEditingWofId(null); setWofForm({ year: '', students: [] }); }} className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors" disabled={isLoading}>Cancel</button>}
                  </div>
                </form>
              </div>

              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
                {isLoading && (
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center">
                    <Loader2 className="animate-spin text-primary" size={32} />
                  </div>
                )}
                <div className="p-6 border-b border-gray-100 bg-gray-50"><h2 className="text-lg font-bold text-gray-900">Wall of Fame Records</h2></div>
                <div className="divide-y divide-gray-100">
                  {wof.map(yearData => (
                    <div key={yearData.id} className="p-6 flex flex-col sm:flex-row justify-between gap-4 hover:bg-gray-50 transition-colors">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Class of {yearData.year}</h3>
                        <p className="text-sm text-gray-600">{yearData.students.length} students recorded</p>
                      </div>
                      <div className="flex items-start gap-2 shrink-0">
                        <button onClick={() => { setEditingWofId(yearData.id); setWofForm({ year: yearData.year, students: yearData.students }); scrollToForm(); }} className="p-2 text-gray-500 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors"><Edit2 size={18} /></button>
                        <button onClick={() => handleDeleteWof(yearData.id)} className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {tab === 'reviews' && (
            <motion.div key="reviews" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden relative">
                {isLoading && (
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center">
                    <Loader2 className="animate-spin text-primary" size={32} />
                  </div>
                )}
                <div className="p-6 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                  <h2 className="text-lg font-bold text-gray-900">User Reviews</h2>
                  <span className="text-sm font-bold text-primary bg-blue-50 px-3 py-1 rounded-full">
                    Total: {BASE_REVIEWS + reviews.length}
                  </span>
                </div>
                <div className="divide-y divide-gray-100">
                  {reviews.length > 0 ? reviews.map(review => (
                    <div key={review.id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-gray-900">{review.name}</h3>
                            <div className="flex items-center gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={12} className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
                              ))}
                            </div>
                          </div>
                          <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                            {review.relationship} • {review.location} • {review.createdAt}
                          </p>
                          <p className="text-gray-600 italic">"{review.comment}"</p>
                        </div>
                        <div className="flex items-start shrink-0">
                          <button onClick={() => review.id && handleDeleteReview(review.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="p-12 text-center text-gray-500 italic">
                      No new reviews yet.
                    </div>
                  )}
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-400 px-2 italic">
                * Note: The base count of {BASE_REVIEWS} reviews is static. Only new reviews from the website will appear here for moderation.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
