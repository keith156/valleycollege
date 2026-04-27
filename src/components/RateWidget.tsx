import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, Send, X, CheckCircle, User, MapPin, Users } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function RateWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [relationship, setRelationship] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-rate-widget', handleOpen);
    return () => window.removeEventListener('open-rate-widget', handleOpen);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b86bb0fd-7c22-4e14-8941-c17778d858ec",
          subject: `New Website Rating: ${rating} Stars`,
          rating: rating,
          name: name || "Not provided",
          location: location || "Not provided",
          relationship: relationship || "Not provided",
          comment: comment,
          from_name: name || "Valley College Website Visitor",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset and close after a delay
        setTimeout(() => {
          setIsOpen(false);
          setIsSubmitted(false);
          setRating(0);
          setName('');
          setLocation('');
          setRelationship('');
          setComment('');
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-white/20 p-2 pl-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] group hover:shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <div className="flex flex-col items-start leading-tight">
              <div className="flex items-center gap-1">
                <span className="text-lg font-black text-gray-900">4.8</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={10} className={s <= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
                  ))}
                </div>
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">326 Reviews</span>
            </div>
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500">
              <Star className="w-5 h-5 fill-white" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            className="mb-4 w-80 max-h-[85vh] overflow-y-auto scrollbar-none bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100"
          >
            {/* Header */}
            <div className="bg-primary p-5 flex justify-between items-center text-white relative overflow-hidden shrink-0">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 blur-2xl" />
              <h3 className="font-bold flex items-center gap-2 relative z-10">
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                Rate Your Experience
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/20 rounded-full transition-colors relative z-10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Thank you!</p>
                    <p className="text-sm text-gray-500">We appreciate your feedback.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center mb-2">
                    <p className="text-sm text-gray-500 mb-3 font-semibold uppercase tracking-wider">Tap to rate</p>
                    <div className="flex justify-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHover(star)}
                          onMouseLeave={() => setHover(0)}
                          onClick={() => setRating(star)}
                          className="p-1 transition-all hover:scale-110 active:scale-90"
                        >
                          <Star
                            className={cn(
                              "w-9 h-9 transition-all duration-300",
                              (hover || rating) >= star
                                ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]"
                                : "text-gray-200"
                            )}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:bg-white transition-all shadow-inner"
                      />
                    </div>
                    
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location (e.g. Kampala)"
                        className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:bg-white transition-all shadow-inner"
                      />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-4 w-4 text-gray-400" />
                      </div>
                      <select
                        value={relationship}
                        onChange={(e) => setRelationship(e.target.value)}
                        className={cn("w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 focus:bg-white transition-all shadow-inner appearance-none", relationship === '' ? "text-gray-400" : "text-gray-900")}
                      >
                        <option value="" disabled>Relationship with school</option>
                        <option value="Current Student">Current Student</option>
                        <option value="Alumnus">Alumnus / Old Student</option>
                        <option value="Parent">Parent / Guardian</option>
                        <option value="Staff">Staff Member</option>
                        <option value="Well Wisher">Well Wisher / Visitor</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <label className="text-xs font-bold text-gray-400 flex items-center gap-1.5 px-1 uppercase tracking-wider">
                      <MessageSquare className="w-3.5 h-3.5" /> Any comments?
                    </label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Help us improve..."
                      className="w-full p-4 text-sm bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 focus:bg-white resize-none min-h-[80px] transition-all shadow-inner"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={rating === 0 || isSubmitting}
                    className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 transition-all active:scale-[0.98] mt-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Feedback
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
