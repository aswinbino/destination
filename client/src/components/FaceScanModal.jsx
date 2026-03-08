import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Webcam from 'react-webcam';
import { ShieldCheck, Loader2, X, CheckCircle, AlertTriangle, ScanFace, Eye, Activity } from 'lucide-react';

const FaceScanModal = ({ isOpen, onClose, onSuccess }) => {
    const [scanState, setScanState] = useState('scanning'); // scanning, processing, success, failed
    const [statusText, setStatusText] = useState('Position your face in the frame');
    const [pillsOptions, setPillsOptions] = useState({
        detected: 'waiting', // waiting, success, failed
        liveness: 'waiting',
        alertness: 'waiting'
    });

    useEffect(() => {
        if (!isOpen) return;

        // Reset state
        setScanState('scanning');
        setStatusText('Align face and blink once');
        setPillsOptions({ detected: 'waiting', liveness: 'waiting', alertness: 'waiting' });

        // Mock Flow
        const t1 = setTimeout(() => {
            setPillsOptions(prev => ({ ...prev, detected: 'success' }));
        }, 1000);

        const t2 = setTimeout(() => {
            setPillsOptions(prev => ({ ...prev, liveness: 'success' }));
            setScanState('processing');
            setStatusText('Analyzing biometric encodings...');
        }, 2500);

        const t3 = setTimeout(() => {
            setPillsOptions(prev => ({ ...prev, alertness: 'success' }));
            setScanState('success');
            setStatusText('Identity Verified. Safe to drive.');

            setTimeout(() => {
                if (onSuccess) onSuccess();
            }, 1500);
        }, 4500);

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [isOpen, onSuccess]);

    if (!isOpen) return null;

    const StatusPill = ({ label, status, icon: Icon }) => {
        let colors = "bg-slate-800 text-slate-400 border-slate-700";
        if (status === 'success') colors = "bg-emerald-500/20 text-emerald-400 border-emerald-500/50";
        if (status === 'failed') colors = "bg-red-500/20 text-red-400 border-red-500/50";
        if (status === 'waiting' && scanState === 'scanning') colors = "bg-primary-500/20 text-primary-400 border-primary-500/50 animate-pulse";

        return (
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold ${colors} transition-colors duration-300`}>
                <Icon size={14} />
                {label}
            </div>
        );
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden w-full max-w-md relative"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-slate-800">
                            <div className="flex items-center gap-2 text-white font-bold">
                                <ScanFace size={20} className="text-primary-500" />
                                Security Check
                            </div>
                            <button onClick={onClose} className="text-slate-400 hover:text-white transition rounded-full p-1 hover:bg-white/10">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col items-center relative">

                            {/* Camera Area */}
                            <div className="relative w-64 h-64 rounded-2xl overflow-hidden mb-6 bg-slate-800 border-2 border-slate-700">
                                <Webcam
                                    audio={false}
                                    className="w-full h-full object-cover"
                                    mirrored={true}
                                />

                                {/* Scanning Reticle (Corner Brackets) */}
                                <div className="absolute inset-4 z-10 pointer-events-none">
                                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary-500 rounded-tl-lg"></div>
                                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary-500 rounded-tr-lg"></div>
                                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary-500 rounded-bl-lg"></div>
                                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary-500 rounded-br-lg"></div>
                                </div>

                                {/* Laser Scanning Animation */}
                                {scanState === 'scanning' && (
                                    <motion.div
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                                        className="absolute left-0 w-full h-1 bg-primary-500 shadow-[0_0_15px_3px_var(--color-primary-500)] z-20 opacity-70"
                                    ></motion.div>
                                )}

                                {/* Processing Overlay */}
                                {(scanState === 'processing' || scanState === 'success') && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm z-30 flex items-center justify-center"
                                    >
                                        {scanState === 'processing' && <Loader2 size={48} className="text-primary-500 animate-spin" />}
                                        {scanState === 'success' && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                                className="bg-emerald-500 text-white rounded-full p-3"
                                            >
                                                <CheckCircle size={48} />
                                            </motion.div>
                                        )}
                                    </motion.div>
                                )}
                            </div>

                            {/* Status Text Area */}
                            <div className="text-center mb-6 h-8">
                                <h3 className={`text-lg font-semibold ${scanState === 'success' ? 'text-emerald-400' : 'text-slate-200'}`}>
                                    {statusText}
                                </h3>
                            </div>

                            {/* Status Pills */}
                            <div className="flex flex-wrap justify-center gap-3 w-full">
                                <StatusPill label="Face Detected" icon={ScanFace} status={pillsOptions.detected} />
                                <StatusPill label="Liveness" icon={Eye} status={pillsOptions.liveness} />
                                <StatusPill label="Alertness" icon={Activity} status={pillsOptions.alertness} />
                            </div>

                        </div>

                        {/* Footer decorative line */}
                        <div className={`h-1 w-full ${scanState === 'success' ? 'bg-emerald-500' : scanState === 'failed' ? 'bg-red-500' : 'bg-primary-500'}`}></div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FaceScanModal;
