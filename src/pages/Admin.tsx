import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SchoolEvent, getEvents, saveEvents } from '../lib/events';
import { NewsItem, getNews, saveNews } from '../lib/news';
import { WallOfFameYear, getWallOfFame, saveWallOfFame, StudentRecord } from '../lib/wallOfFame';
import { Trash2, Edit2, Plus, LogOut, Calendar, Newspaper, Award, X } from 'lucide-react';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [tab, setTab] = useState<'events' | 'news' | 'wof'>('events');
  
  // Events State
  const [events, setEvents] = useState<SchoolEvent[]>([]);
  const [editingEventId, setEditingEventId] = useState<string | null>(null);
  const [eventForm, setEventForm] = useState({ title: '', date: '' });

  // News State
  const [news, setNews] = useState<NewsItem[]>([]);
  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [newsForm, setNewsForm] = useState({ title: '', date: '', excerpt: '', img: '' });

  // Wall of Fame State
  const [wof, setWof] = useState<WallOfFameYear[]>([]);
  const [editingWofId, setEditingWofId] = useState<string | null>(null);
  const [wofForm, setWofForm] = useState<{ year: string; students: StudentRecord[] }>({ year: '', students: [] });

  useEffect(() => {
    if (isLoggedIn) {
      setEvents(getEvents());
      setNews(getNews());
      setWof(getWallOfFame());
    }
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
  const handleSaveEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventForm.title || !eventForm.date) return;
    let updated;
    if (editingEventId) {
      updated = events.map(ev => ev.id === editingEventId ? { ...ev, ...eventForm } : ev);
    } else {
      updated = [...events, { id: Date.now().toString(), ...eventForm }];
    }
    setEvents(updated);
    saveEvents(updated);
    setEventForm({ title: '', date: '' });
    setEditingEventId(null);
  };

  const handleDeleteEvent = (id: string) => {
    if (window.confirm('Delete this event?')) {
      const updated = events.filter(ev => ev.id !== id);
      setEvents(updated);
      saveEvents(updated);
    }
  };

  // --- NEWS CRUD ---
  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsForm.title || !newsForm.date || !newsForm.excerpt || !newsForm.img) return;
    let updated;
    if (editingNewsId) {
      updated = news.map(n => n.id === editingNewsId ? { ...n, ...newsForm } : n);
    } else {
      updated = [{ id: Date.now().toString(), ...newsForm }, ...news];
    }
    setNews(updated);
    saveNews(updated);
    setNewsForm({ title: '', date: '', excerpt: '', img: '' });
    setEditingNewsId(null);
  };

  const handleDeleteNews = (id: string) => {
    if (window.confirm('Delete this news item?')) {
      const updated = news.filter(n => n.id !== id);
      setNews(updated);
      saveNews(updated);
    }
  };

  // --- WOF CRUD ---
  const handleSaveWof = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wofForm.year) return;
    let updated;
    if (editingWofId) {
      updated = wof.map(w => w.id === editingWofId ? { ...w, ...wofForm } : w);
    } else {
      updated = [{ id: Date.now().toString(), ...wofForm }, ...wof];
    }
    // Sort by year descending
    updated.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    setWof(updated);
    saveWallOfFame(updated);
    setWofForm({ year: '', students: [] });
    setEditingWofId(null);
  };

  const handleDeleteWof = (id: string) => {
    if (window.confirm('Delete this Wall of Fame year?')) {
      const updated = wof.filter(w => w.id !== id);
      setWof(updated);
      saveWallOfFame(updated);
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
          <button onClick={() => setTab('news')} className={`flex items-center gap-2 pb-4 px-2 font-bold whitespace-nowrap transition-colors ${tab === 'news' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}>
            <Newspaper size={20} /> News & Updates
          </button>
          <button onClick={() => setTab('wof')} className={`flex items-center gap-2 pb-4 px-2 font-bold whitespace-nowrap transition-colors ${tab === 'wof' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-700'}`}>
            <Award size={20} /> Wall of Fame
          </button>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'events' && (
            <motion.div key="events" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">{editingEventId ? 'Edit Event' : 'Add New Event'}</h2>
                <form onSubmit={handleSaveEvent} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                    <input type="text" value={eventForm.date} onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })} placeholder="e.g., Oct 20, 2026" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                    <input type="text" value={eventForm.title} onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })} placeholder="e.g., Mid-Term Exams" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                  </div>
                  <div className="md:col-span-1 flex gap-2">
                    <button type="submit" className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-4 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                      {editingEventId ? <Edit2 size={18} /> : <Plus size={18} />} {editingEventId ? 'Update' : 'Add'}
                    </button>
                    {editingEventId && <button type="button" onClick={() => { setEditingEventId(null); setEventForm({ title: '', date: '' }); }} className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">Cancel</button>}
                  </div>
                </form>
              </div>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50"><h2 className="text-lg font-bold text-gray-900">Current Programs</h2></div>
                <div className="divide-y divide-gray-100">
                  {events.map(event => (
                    <div key={event.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                      <div><span className="inline-block px-3 py-1 bg-blue-50 text-primary text-sm font-bold rounded-full mb-2">{event.date}</span><h3 className="text-lg font-bold text-gray-900">{event.title}</h3></div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => { setEditingEventId(event.id); setEventForm({ title: event.title, date: event.date }); }} className="p-2 text-gray-500 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors"><Edit2 size={18} /></button>
                        <button onClick={() => handleDeleteEvent(event.id)} className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {tab === 'news' && (
            <motion.div key="news" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">{editingNewsId ? 'Edit News' : 'Add News Item'}</h2>
                <form onSubmit={handleSaveNews} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input type="text" value={newsForm.date} onChange={(e) => setNewsForm({ ...newsForm, date: e.target.value })} placeholder="e.g., Oct 15, 2026" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                      <input type="text" value={newsForm.img} onChange={(e) => setNewsForm({ ...newsForm, img: e.target.value })} placeholder="https://..." className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input type="text" value={newsForm.title} onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
                    <textarea value={newsForm.excerpt} onChange={(e) => setNewsForm({ ...newsForm, excerpt: e.target.value })} rows={3} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                  </div>
                  <div className="flex gap-2 pt-2">
                    <button type="submit" className="flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-6 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                      {editingNewsId ? <Edit2 size={18} /> : <Plus size={18} />} {editingNewsId ? 'Update' : 'Add'}
                    </button>
                    {editingNewsId && <button type="button" onClick={() => { setEditingNewsId(null); setNewsForm({ title: '', date: '', excerpt: '', img: '' }); }} className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">Cancel</button>}
                  </div>
                </form>
              </div>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50"><h2 className="text-lg font-bold text-gray-900">Current News</h2></div>
                <div className="divide-y divide-gray-100">
                  {news.map(item => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-4 hover:bg-gray-50 transition-colors">
                      <img src={item.img} alt="" className="w-24 h-24 object-cover rounded-xl shrink-0" />
                      <div className="flex-1">
                        <span className="text-sm font-bold text-primary mb-1 block">{item.date}</span>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm line-clamp-2">{item.excerpt}</p>
                      </div>
                      <div className="flex items-start gap-2 shrink-0">
                        <button onClick={() => { setEditingNewsId(item.id); setNewsForm({ title: item.title, date: item.date, excerpt: item.excerpt, img: item.img }); }} className="p-2 text-gray-500 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors"><Edit2 size={18} /></button>
                        <button onClick={() => handleDeleteNews(item.id)} className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {tab === 'wof' && (
            <motion.div key="wof" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">{editingWofId ? 'Edit Wall of Fame Year' : 'Add Wall of Fame Year'}</h2>
                <form onSubmit={handleSaveWof} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                    <input type="text" value={wofForm.year} onChange={(e) => setWofForm({ ...wofForm, year: e.target.value })} placeholder="e.g., 2025" className="w-full md:w-1/3 px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="block text-sm font-medium text-gray-700">Students</label>
                      <button type="button" onClick={addWofStudent} className="text-sm font-bold text-primary flex items-center gap-1 hover:text-blue-700"><Plus size={16} /> Add Student</button>
                    </div>
                    <div className="space-y-3">
                      {wofForm.students.map((student, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center bg-gray-50 p-4 rounded-xl border border-gray-200">
                          <input type="text" value={student.name} onChange={(e) => updateWofStudent(idx, 'name', e.target.value)} placeholder="Student Name" className="flex-1 w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                          <input type="text" value={student.combo} onChange={(e) => updateWofStudent(idx, 'combo', e.target.value)} placeholder="Combination (e.g., PCM/ICT)" className="w-full sm:w-48 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                          <input type="text" value={student.pts} onChange={(e) => updateWofStudent(idx, 'pts', e.target.value)} placeholder="Points (e.g., 20 pts)" className="w-full sm:w-32 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50" required />
                          <button type="button" onClick={() => removeWofStudent(idx)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0"><X size={20} /></button>
                        </div>
                      ))}
                      {wofForm.students.length === 0 && <p className="text-sm text-gray-500 italic">No students added yet.</p>}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <button type="submit" className="flex items-center justify-center gap-2 bg-primary text-white py-2.5 px-6 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                      {editingWofId ? <Edit2 size={18} /> : <Plus size={18} />} {editingWofId ? 'Update Year' : 'Save Year'}
                    </button>
                    {editingWofId && <button type="button" onClick={() => { setEditingWofId(null); setWofForm({ year: '', students: [] }); }} className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">Cancel</button>}
                  </div>
                </form>
              </div>

              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50"><h2 className="text-lg font-bold text-gray-900">Wall of Fame Records</h2></div>
                <div className="divide-y divide-gray-100">
                  {wof.map(yearData => (
                    <div key={yearData.id} className="p-6 flex flex-col sm:flex-row justify-between gap-4 hover:bg-gray-50 transition-colors">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Class of {yearData.year}</h3>
                        <p className="text-sm text-gray-600">{yearData.students.length} students recorded</p>
                      </div>
                      <div className="flex items-start gap-2 shrink-0">
                        <button onClick={() => { setEditingWofId(yearData.id); setWofForm({ year: yearData.year, students: yearData.students }); }} className="p-2 text-gray-500 hover:text-primary hover:bg-blue-50 rounded-lg transition-colors"><Edit2 size={18} /></button>
                        <button onClick={() => handleDeleteWof(yearData.id)} className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18} /></button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
