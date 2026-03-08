import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Clock, Navigation } from 'lucide-react';

const HeroSection = ({ onStartSafeRide }) => {
    return (
        <div className="relative overflow-hidden bg-slate-900 text-white min-h-[calc(100vh-72px)] flex flex-col justify-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-600 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-emerald-500 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="lg:w-1/2 text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-semibold tracking-wide text-primary-200 shadow-lg"
                    >
                        <ShieldCheck size={16} /> AI-Powered Secure Commute
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                        Smart Carpooling for a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-lg">
                            Greener Tomorrow
                        </span>
                    </h1>

                    <p className="mt-4 max-w-xl text-lg text-slate-300 mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                        Join the trusted circle. We use AI to match drivers and passengers securely, optimize routes, and reduce emissions together.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
                        <motion.button
                            onClick={onStartSafeRide}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-2xl font-bold shadow-[0_0_30px_-5px_var(--color-primary-600)] hover:shadow-[0_0_40px_-5px_var(--color-primary-500)] transition-all border border-primary-400/50 flex flex-row items-center justify-center gap-2"
                        >
                            <ShieldCheck size={20} />
                            Start Safe Ride
                        </motion.button>

                        <Link to="/post">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white backdrop-blur-md rounded-2xl font-bold border border-white/10 hover:bg-white/10 transition flex flex-row items-center justify-center gap-2"
                            >
                                <Navigation size={20} />
                                Offer a Ride
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Right Interactive/3D Elements */}
                <div className="lg:w-1/2 relative w-full h-[400px] flex items-center justify-center perspective-1000">

                    {/* Floating SVG Car */}
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotateZ: [-1, 2, -1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut"
                        }}
                        className="relative z-20 w-64 h-64 md:w-80 md:h-80 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                    >
                        {/* Futuristic Simple Car SVG representaton */}
                        <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                            <path d="M50 120 L80 60 L280 60 L350 120 L380 120 C390 120 395 125 395 135 L395 160 C395 170 390 175 380 175 L350 175 C340 175 330 165 330 155 C330 145 340 135 350 135 M50 175 L20 175 C10 175 5 170 5 160 L5 135 C5 125 10 120 20 120 L50 120 C60 120 70 130 70 140 C70 150 60 160 50 160 M350 175 L50 175" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                            {/* Windows */}
                            <path d="M100 110 L95 70 L200 70 L200 110 Z" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
                            <path d="M220 110 L220 70 L265 70 L320 110 Z" fill="rgba(255,255,255,0.1)" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
                            {/* Wheels */}
                            <circle cx="80" cy="155" r="25" fill="none" stroke="currentColor" strokeWidth="8" />
                            <circle cx="80" cy="155" r="10" fill="currentColor" />
                            <circle cx="320" cy="155" r="25" fill="none" stroke="currentColor" strokeWidth="8" />
                            <circle cx="320" cy="155" r="10" fill="currentColor" />
                            {/* Headlights */}
                            <path d="M360 125 L385 135" stroke="#10b981" strokeWidth="8" strokeLinecap="round" />
                            {/* Speed Lines */}
                            <motion.path
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0], x: [-50, -100] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                d="M20 130 L-80 130" stroke="rgba(255,255,255,0.3)" strokeWidth="4" strokeLinecap="round"
                            />
                            <motion.path
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0], x: [-20, -120] }}
                                transition={{ repeat: Infinity, duration: 1.5, delay: 0.5, ease: "linear" }}
                                d="M10 160 L-60 160" stroke="#10b981" strokeWidth="4" strokeLinecap="round"
                            />
                        </svg>
                    </motion.div>

                    {/* Stat Card 1 - Trust Score */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotate: -5 }}
                        animate={{ opacity: 1, y: 0, rotate: -5 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="absolute top-10 left-0 md:-left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-30"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-white">Trust Score</div>
                                <div className="text-xs text-slate-300">AI Verified</div>
                            </div>
                            <div className="ml-4 text-xl font-bold text-emerald-400">98%</div>
                        </div>
                    </motion.div>

                    {/* Stat Card 2 - Smart Match */}
                    <motion.div
                        initial={{ opacity: 0, y: -50, rotate: 5 }}
                        animate={{ opacity: 1, y: 0, rotate: 5 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="absolute bottom-10 right-0 md:-right-5 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl z-30"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                <Navigation size={20} />
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-white">Smart Match</div>
                                <div className="text-xs text-slate-300">Route Cosine</div>
                            </div>
                            <div className="ml-4 text-xl font-bold text-primary-400">92%</div>
                        </div>
                    </motion.div>

                    {/* Stat Card 3 - ETA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-md border border-white/10 p-3 rounded-full shadow-2xl z-10 w-48 h-48 flex flex-col items-center justify-center"
                    >
                        <Clock size={28} className="text-primary-400 mb-2" />
                        <div className="text-3xl font-bold text-white">15<span className="text-lg text-slate-400">min</span></div>
                        <div className="text-xs text-emerald-400 font-medium tracking-widest uppercase mt-1">Predictive ETA</div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
