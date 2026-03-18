/* eslint-disable */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation2, Phone, AlertTriangle, ShieldAlert, Mic, Zap, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import ChatBot from '../components/ChatBot';

const RideTracking = () => {
    const { rideId } = useParams();
    const [eta, setEta] = useState(15);
    const [sosActive, setSosActive] = useState(false);
    const [sosConfirmed, setSosConfirmed] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');

    const handleSOS = () => {
        setSosActive(true);
        setSosConfirmed(false);
        setAlertMsg('');
        // In a real app, this would trigger a socket event or API call
        console.log("🚨 SOS Triggered!");
    };

    // Check if it's a history/completed ride (mock logic)
    const isCompleted = rideId?.startsWith('h');

    // Simulating real-time updates for live rides only
    useEffect(() => {
        if (isCompleted) return;

        const timer = setInterval(() => {
            setEta(prev => prev > 1 ? prev - 1 : 0);
        }, 60000);

        const alertTimer = setTimeout(() => {
            setAlertMsg('⚠️ AI Alert: Route deviation detected! Driver is 600m off route. Are you safe?');
        }, 12000);

        return () => { clearInterval(timer); clearTimeout(alertTimer); };
    }, [rideId, isCompleted]);

    if (isCompleted) {
        return (
            <div className="min-h-[calc(100vh-72px)] bg-slate-50 py-12 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-xl mx-auto bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden"
                >
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white text-center relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                            <CheckCircle size={40} className="text-emerald-400" />
                        </div>
                        <h2 className="text-3xl font-black mb-1">Ride Summary</h2>
                        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">Completed Yesterday, 05:45 PM</p>
                    </div>

                    <div className="p-8 space-y-8">
                        {/* Driver & Impact Section */}
                        <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">A</div>
                                <div>
                                    <h4 className="font-bold text-slate-800">Arjun Kumar</h4>
                                    <div className="flex items-center gap-1 text-xs text-slate-500">
                                        <Star size={12} className="fill-amber-400 text-amber-400" /> 4.9 • Tata Nexon EV
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Impact</div>
                                <div className="text-lg font-black text-emerald-600">🌿 240g CO2</div>
                            </div>
                        </div>

                        {/* Route Summary */}
                        <div className="relative pl-8 space-y-6">
                            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-200"></div>
                            <div className="relative">
                                <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white"></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Started from</p>
                                    <p className="font-semibold text-slate-800">Guindy (near Anna Univ)</p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-primary-500 border-4 border-white"></div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Arrived at</p>
                                    <p className="font-semibold text-slate-800">Taramani Tech Park</p>
                                </div>
                            </div>
                        </div>

                        {/* Payment Summary */}
                        <div className="pt-6 border-t border-slate-100">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-slate-500 font-medium">Total Fare</span>
                                <span className="text-2xl font-black text-slate-900">₹45.00</span>
                            </div>
                            <div className="bg-primary-50/50 p-4 rounded-2xl mb-8 flex items-center gap-3">
                                <ShieldCheck className="text-primary-600" size={24} />
                                <p className="text-xs font-medium text-primary-700 leading-relaxed">
                                    This payment helped Arjun save 240g of CO2 today and contributed to our goal of 500kg for Chennai.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => window.history.back()}
                                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-black transition"
                            >
                                Back to Dashboard
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }

    const etaTime = new Date(Date.now() + eta * 60000);

    return (
        <div className="h-[calc(100vh-72px)] flex flex-col md:flex-row bg-slate-100 relative">
            {/* Same Live Tracking UI as before... */}
            {/* ... keeping the rest of the existing live tracking implementation ... */}

            {/* Map Area (Mock) */}
            <div className="flex-grow bg-slate-800 relative overflow-hidden h-64 md:h-auto">
                {/* Animated grid background to simulate a map */}
                <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: 'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
                {/* Road lines */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-0 w-full h-1.5 bg-white/10"></div>
                    <div className="absolute left-1/3 top-0 h-full w-1.5 bg-white/10"></div>
                    <div className="absolute left-2/3 top-0 h-full w-1.5 bg-white/10"></div>
                </div>

                {/* Route polyline */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path d="M 100 80% Q 250 60% 400 40% T 700 25%" fill="none" stroke="#6366f1" strokeWidth="4" strokeDasharray="12 6" opacity="0.6" />
                </svg>

                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-xs font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                    Live GPS Simulation
                </div>

                {/* Destination Pin */}
                <div className="absolute bottom-10 right-12 text-right">
                    <div className="inline-flex items-center gap-1 bg-primary-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-primary-500/40">
                        📍 Taramani Tech Park
                    </div>
                </div>

                {/* Simulated Moving Car Marker */}
                <motion.div
                    animate={{ x: [0, 60, 120, 180], y: [0, -30, -60, -90] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[70%] left-[10%]"
                >
                    <div className="relative">
                        <div className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-3 border-primary-500 shadow-primary-500/30">
                            <Navigation2 className="text-primary-600 rotate-45" size={22} />
                        </div>
                        <div className="absolute inset-0 bg-primary-400 rounded-full animate-ping opacity-30"></div>
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded text-white text-[10px] font-bold whitespace-nowrap">
                            Arjun Kumar
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Tracking Panel */}
            <div className="w-full md:w-96 bg-white shadow-[-10px_0_30px_rgba(0,0,0,0.08)] flex flex-col z-20 overflow-hidden">

                {/* Status Header */}
                <div className="p-5 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wide rounded-full mb-3">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        Live Tracking
                    </div>
                    <h2 className="text-4xl font-extrabold text-slate-900 mb-0.5">
                        {eta} <span className="text-xl font-medium text-slate-400">mins away</span>
                    </h2>
                    <p className="text-slate-500 text-sm">ETA: {etaTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>

                {/* AI Deviation Alert */}
                <AnimatePresence>
                    {alertMsg && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-amber-50 border-l-4 border-amber-500 px-4 py-3 overflow-hidden"
                        >
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-amber-900 text-sm">{alertMsg}</p>
                                <div className="flex gap-2">
                                    <button className="text-xs font-bold text-amber-700 hover:bg-amber-100 px-3 py-1.5 rounded-lg border border-amber-200 transition" onClick={() => setAlertMsg('')}>
                                        ✅ I'm Safe
                                    </button>
                                    <button className="text-xs font-bold text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg transition" onClick={() => { setAlertMsg(''); setSosActive(true); }}>
                                        🚨 Trigger SOS
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Driver Info */}
                <div className="p-5 flex-grow overflow-y-auto">
                    <div className="flex items-start gap-4 mb-5 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-lg">
                                A
                            </div>
                            <span className="absolute -bottom-1 -right-1 bg-amber-400 text-white rounded-full w-5 h-5 flex items-center justify-center">
                                <Zap size={10} className="fill-white" />
                            </span>
                        </div>
                        <div className="flex-grow">
                            <h3 className="font-bold text-lg text-slate-900">Arjun Kumar</h3>
                            <p className="text-sm text-slate-500">Tata Nexon EV • Teal Blue</p>
                            <p className="text-xs text-slate-400 font-mono">TN09 AB 1234</p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-xs font-bold text-primary-700 bg-primary-50 px-2 py-0.5 rounded-lg border border-primary-100">Trust: 99/100</span>
                                <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-lg flex items-center gap-0.5">
                                    <Star size={10} className="fill-amber-400 text-amber-400" /> 4.9
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Route Details */}
                    <div className="space-y-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-400 flex-shrink-0"></div>
                            <span className="text-slate-700">Guindy (Pickup)</span>
                        </div>
                        <div className="w-0.5 h-4 bg-slate-200 ml-1"></div>
                        <div className="flex items-center gap-3 text-sm">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary-500 flex-shrink-0"></div>
                            <span className="text-slate-700 font-medium">Taramani Tech Park</span>
                        </div>
                    </div>

                    {/* Fare Breakdown */}
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-slate-700">Your Share</span>
                            <span className="font-bold text-primary-700 text-lg">₹45</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-[10px] text-center">
                            <div className="bg-emerald-50 p-1.5 rounded-lg text-emerald-700"><div className="font-bold">₹31.50</div>Driver</div>
                            <div className="bg-indigo-50 p-1.5 rounded-lg text-indigo-700"><div className="font-bold">₹12.15</div>Ops</div>
                            <div className="bg-amber-50 p-1.5 rounded-lg text-amber-700"><div className="font-bold">₹1.35</div>Fee</div>
                        </div>
                    </div>
                </div>

                {/* SOS Footer */}
                <div className="p-4 border-t border-slate-100 space-y-2 flex-shrink-0 bg-white">
                    {/* SOS Confirm Dialog */}
                    <AnimatePresence>
                        {sosConfirmed && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                                className="p-3 bg-red-50 border border-red-200 rounded-xl text-center text-sm">
                                <p className="font-bold text-red-700 mb-2">Confirm Emergency SOS?</p>
                                <div className="flex gap-2">
                                    <button onClick={() => setSosConfirmed(false)} className="flex-1 py-1.5 border border-slate-200 rounded-lg text-slate-600 text-xs font-semibold">Cancel</button>
                                    <button onClick={handleSOS} className="flex-1 py-1.5 bg-red-600 text-white rounded-lg text-xs font-bold">Yes, Send SOS</button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 bg-indigo-50 text-indigo-600 border border-indigo-100 hover:bg-indigo-100 transition text-sm">
                        <Mic size={16} /> Voice SOS (Beta)
                    </motion.button>

                    {!sosActive ? (
                        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                            onClick={handleSOS}
                            className="w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 transition">
                            <ShieldAlert size={20} /> Emergency SOS
                        </motion.button>
                    ) : (
                        <div className="w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 bg-red-600 text-white animate-pulse">
                            <ShieldAlert size={20} /> SOS SENT — HELP IS ON THE WAY
                        </div>
                    )}

                    <p className="text-center text-xs text-slate-400">Alerts your emergency contacts & authorities.</p>
                </div>
            </div>

            {/* Floating ChatBot */}
            <ChatBot driverName="Arjun Kumar" />
        </div>
    );
};

export default RideTracking;
