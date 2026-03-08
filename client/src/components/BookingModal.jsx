import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, User, ArrowRight, Calendar, Zap, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookingModal = (props) => {
    const isOpen = props.isOpen;
    const onClose = props.onClose;
    const [step, setStep] = useState('form');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [time, setTime] = useState('08:30');
    const [seats, setSeats] = useState(1);
    const navigate = useNavigate();

    const quickRoutes = [
        { from: 'Guindy', to: 'Taramani Tech Park' },
        { from: 'Adyar', to: 'Siruseri IT Park' },
        { from: 'Velachery', to: 'Anna University' },
    ];

    const handleBook = () => setStep('confirm');

    const handleConfirm = () => {
        setStep('booked');
        setTimeout(() => {
            onClose();
            navigate('/track/r1');
        }, 2000);
    };

    const resetAndClose = () => {
        setStep('form');
        setFrom('');
        setTo('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                key="booking-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm"
                onClick={(e) => { if (e.target === e.currentTarget) resetAndClose(); }}
            >
                <motion.div
                    key="booking-modal"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-lg"
                >
                    <div className="bg-gradient-to-r from-primary-600 to-emerald-500 p-6 text-white relative">
                        <button onClick={resetAndClose} className="absolute top-4 right-4 text-white/80 hover:text-white">
                            <X size={22} />
                        </button>
                        <h2 className="text-2xl font-bold mb-1">
                            {step === 'booked' ? 'Ride Booked!' : 'Book a Ride'}
                        </h2>
                        <p className="text-white/80 text-sm">
                            {step === 'form' ? 'AI will match you with the best community ride' :
                                step === 'confirm' ? 'Review your booking details' : 'Your driver is on the way!'}
                        </p>
                    </div>

                    <div className="p-6">
                        {step === 'form' && (
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Quick Routes</p>
                                    <div className="flex gap-2 flex-wrap">
                                        {quickRoutes.map((r, i) => (
                                            <button key={i} onClick={() => { setFrom(r.from); setTo(r.to); }}
                                                className="text-xs px-3 py-1.5 bg-slate-100 hover:bg-primary-50 hover:text-primary-700 rounded-full transition font-medium text-slate-600 border border-slate-200">
                                                {r.from} to {r.to}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-px bg-slate-100"></div>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                    <input value={from} onChange={e => setFrom(e.target.value)}
                                        placeholder="Pickup location (e.g. Guindy)"
                                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                                </div>
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500" size={16} />
                                    <input value={to} onChange={e => setTo(e.target.value)}
                                        placeholder="Drop location (e.g. Taramani Tech Park)"
                                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                        <input type="date" value={date} onChange={e => setDate(e.target.value)}
                                            className="w-full pl-8 pr-2 py-3 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-primary-500 outline-none" />
                                    </div>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                        <input type="time" value={time} onChange={e => setTime(e.target.value)}
                                            className="w-full pl-8 pr-2 py-3 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-primary-500 outline-none" />
                                    </div>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                                        <select value={seats} onChange={e => setSeats(e.target.value)}
                                            className="w-full pl-8 pr-2 py-3 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-primary-500 outline-none appearance-none">
                                            {[1, 2, 3].map(n => <option key={n} value={n}>{n} seat{n > 1 ? 's' : ''}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <button onClick={handleBook} disabled={!from || !to}
                                    className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl font-bold text-base shadow-lg shadow-primary-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                                    Find AI Match <ArrowRight size={20} />
                                </button>
                            </div>
                        )}

                        {step === 'confirm' && (
                            <div className="space-y-4">
                                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
                                    <div className="text-emerald-700 font-bold text-lg flex items-center justify-center gap-2">
                                        <Zap size={20} className="fill-emerald-500 text-emerald-500" /> 98% AI Match Found
                                    </div>
                                    <p className="text-emerald-600 text-sm mt-1">Priya S. from Anna University — same route!</p>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                        <span className="text-slate-500">Pickup</span>
                                        <span className="font-semibold text-slate-800">{from || 'Guindy'}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                        <span className="text-slate-500">Drop</span>
                                        <span className="font-semibold text-slate-800">{to || 'Taramani'}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                                        <span className="text-slate-500">Time</span>
                                        <span className="font-semibold text-slate-800">{time} — {date}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border-b-2 border-primary-500">
                                        <span className="text-slate-500">Your Share (1 seat)</span>
                                        <span className="font-bold text-primary-700 text-lg">Rs. 45</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 text-xs text-center">
                                        <div className="p-2 bg-emerald-50 rounded-lg">
                                            <div className="font-bold text-emerald-700">Rs. 31.50</div>
                                            <div className="text-emerald-600">Driver (70%)</div>
                                        </div>
                                        <div className="p-2 bg-indigo-50 rounded-lg">
                                            <div className="font-bold text-indigo-700">Rs. 12.15</div>
                                            <div className="text-indigo-600">Ops (27%)</div>
                                        </div>
                                        <div className="p-2 bg-amber-50 rounded-lg">
                                            <div className="font-bold text-amber-700">Rs. 1.35</div>
                                            <div className="text-amber-600">Fee (3%)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button onClick={() => setStep('form')} className="flex-1 py-3 border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition">Back</button>
                                    <button onClick={handleConfirm} className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition">Confirm and Pay Rs.45</button>
                                </div>
                            </div>
                        )}

                        {step === 'booked' && (
                            <div className="text-center py-8 space-y-4">
                                <div className="mx-auto w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <CheckCircle size={52} className="text-emerald-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Booking Confirmed!</h3>
                                <p className="text-slate-500">Arjun Kumar is on the way. Redirecting to Live Tracking...</p>
                                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mt-4">
                                    <motion.div className="h-2 bg-primary-500 rounded-full" animate={{ width: '100%' }} transition={{ duration: 2 }} style={{ width: 0 }} />
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default BookingModal;
