import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Users, Calendar, ArrowRight, CheckCircle, Zap, ShieldCheck, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PostRide = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        start: '',
        end: '',
        date: '',
        time: '',
        seats: '3',
        price: '45',
        type: 'standard'
    });

    const popularRoutes = [
        { from: 'Guindy', to: 'Taramani Tech Park' },
        { from: 'Anna University', to: 'Adyar' },
        { from: 'Velachery', to: 'Siruseri IT Park' },
        { from: 'Tambaram', to: 'Sholinganallur' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setStep(3); // Show success
        setTimeout(() => {
            navigate('/dashboard');
        }, 3000);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">Share Your Journey</h1>
                <p className="text-slate-500 font-medium">Reduce traffic, save the planet, and earn while you commute.</p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-slate-100 relative overflow-hidden">
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>

                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                        <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm">1</div>
                                        Route Details
                                    </h3>

                                    <div className="space-y-6">
                                        <div className="relative">
                                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Starting Point</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                <input
                                                    type="text"
                                                    placeholder="e.g. Guindy"
                                                    value={formData.start}
                                                    onChange={e => setFormData({ ...formData, start: e.target.value })}
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Destination</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500" size={18} />
                                                <input
                                                    type="text"
                                                    placeholder="e.g. Taramani Tech Park"
                                                    value={formData.end}
                                                    onChange={e => setFormData({ ...formData, end: e.target.value })}
                                                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 block">Popular Suggestions in Chennai</span>
                                            <div className="flex flex-wrap gap-2">
                                                {popularRoutes.map((route, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setFormData({ ...formData, start: route.from, end: route.to })}
                                                        className="px-3 py-1.5 bg-white border border-slate-100 rounded-xl text-xs font-semibold text-slate-600 hover:border-primary-200 hover:bg-primary-50 transition"
                                                    >
                                                        {route.from} → {route.to}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100">
                                    <div className="flex items-center gap-3 mb-6 p-4 bg-blue-50 text-blue-700 rounded-2xl border border-blue-100">
                                        <Info size={20} />
                                        <p className="text-xs font-medium leading-relaxed">
                                            Our AI will match you with passengers from your verified community (Organization: Anna Univ).
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Date</label>
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        type="date"
                                                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition font-medium"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Time</label>
                                                <div className="relative">
                                                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                                    <input
                                                        type="time"
                                                        className="w-full pl-12 pr-4 py-4 bg-white border border-slate-100 rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition font-medium"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setStep(2)}
                                            className="w-full py-4 bg-primary-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary-500/30 hover:bg-primary-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                        >
                                            Next Step <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
                                <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-sm">2</div>
                                Ride Preferences
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-1">Available Seats</label>
                                    <div className="flex gap-4">
                                        {['1', '2', '3', '4'].map(num => (
                                            <button
                                                key={num}
                                                onClick={() => setFormData({ ...formData, seats: num })}
                                                className={`flex-1 h-14 rounded-2xl font-bold transition-all border ${formData.seats === num
                                                        ? 'bg-primary-600 text-white border-primary-600 shadow-lg shadow-primary-500/20 scale-105'
                                                        : 'bg-white text-slate-600 border-slate-100 hover:bg-slate-50'
                                                    }`}
                                            >
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-1">Fare (Per Seat)</label>
                                    <div className="relative">
                                        <div className="absolute left-6 top-1/2 -translate-y-1/2 font-bold text-slate-400">₹</div>
                                        <input
                                            type="number"
                                            value={formData.price}
                                            onChange={e => setFormData({ ...formData, price: e.target.value })}
                                            className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-black text-2xl focus:ring-2 focus:ring-primary-500 outline-none transition"
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase">AI Recommended</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-3xl p-8 mb-10 text-white flex flex-col md:flex-row items-center gap-8 border border-white/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary-400 shadow-inner">
                                    <Zap size={32} />
                                </div>
                                <div className="flex-grow">
                                    <h4 className="font-bold text-lg mb-1">EV Multiplier Active</h4>
                                    <p className="text-slate-400 text-sm">Since you drive an Electric Vehicle, you save 240g of CO2 per km. Your Trust Score will increase by +2 points today.</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Impact</span>
                                    <span className="text-2xl font-black text-emerald-400">+1.2kg 🌿</span>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => setStep(1)}
                                    className="px-8 py-4 bg-slate-50 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="flex-grow py-4 bg-primary-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary-500/30 hover:bg-primary-700 hover:-translate-y-1 transition-all"
                                >
                                    Publish Ride
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                <CheckCircle size={48} />
                            </div>
                            <h2 className="text-3xl font-black text-slate-900 mb-4">Ride Published Successfully!</h2>
                            <p className="text-slate-500 mb-8 max-w-md mx-auto">We're now searching within Anna University for suitable commuters. You'll be notified of incoming requests.</p>

                            <div className="flex items-center justify-center gap-2 text-primary-600 font-bold text-sm bg-primary-50 px-4 py-2 rounded-full w-fit mx-auto animate-pulse">
                                <ShieldCheck size={18} /> Connecting to AI Engine...
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default PostRide;
