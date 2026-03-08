import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import FaceScanModal from '../components/FaceScanModal';
import { ShieldCheck, Smartphone, KeyRound, CheckCircle } from 'lucide-react';

const Login = () => {
    const [step, setStep] = useState('phone'); // phone, otp, face_scan, verified
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [isFaceScanOpen, setIsFaceScanOpen] = useState(false);
    const navigate = useNavigate();

    const handleSendOTP = (e) => {
        e.preventDefault();
        setStep('otp');
    };

    const handleVerifyOTP = (e) => {
        e.preventDefault();
        setStep('face_scan');
        setIsFaceScanOpen(true);
    };

    const handleFaceScanSuccess = () => {
        setIsFaceScanOpen(false);
        setStep('verified');
        setTimeout(() => {
            navigate('/dashboard');
        }, 1500);
    };

    const handleOtpChange = (element, index) => {
        if (isNaN(element.value)) return false;
        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
        // Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <div className="min-h-[calc(100vh-72px)] bg-slate-900 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 w-full max-w-md p-8 rounded-3xl shadow-2xl relative overflow-hidden"
            >
                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl pointer-events-none"></div>

                <h2 className="text-3xl font-bold text-center mb-2 text-white flex justify-center items-center gap-2">
                    <ShieldCheck className="text-primary-500" /> Secure Login
                </h2>
                <p className="text-slate-400 text-center mb-8 text-sm">Mandatory Identity Verification</p>

                <AnimatePresence mode="wait">
                    {step === 'phone' && (
                        <motion.form
                            key="phone-form"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            onSubmit={handleSendOTP}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                                    <Smartphone size={16} /> Phone Number
                                </label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+91 98765 43210"
                                    className="w-full bg-slate-900/50 text-white px-4 py-3 rounded-xl border border-slate-600 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-bold hover:shadow-[0_0_20px_-5px_var(--color-primary-500)] transition-all">
                                Send OTP
                            </button>
                        </motion.form>
                    )}

                    {step === 'otp' && (
                        <motion.form
                            key="otp-form"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            onSubmit={handleVerifyOTP}
                            className="space-y-6"
                        >
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2">
                                    <KeyRound size={16} /> Enter OTP sent to {phone}
                                </label>
                                <div className="flex justify-between gap-2">
                                    {otp.map((data, index) => (
                                        <input
                                            className="w-12 h-14 text-center bg-slate-900/50 text-white text-xl font-bold rounded-xl border border-slate-600 focus:ring-2 focus:ring-primary-500 outline-none transition"
                                            type="text"
                                            name="otp"
                                            maxLength="1"
                                            key={index}
                                            value={data}
                                            onChange={e => handleOtpChange(e.target, index)}
                                            onFocus={e => e.target.select()}
                                            required
                                        />
                                    ))}
                                </div>
                            </div>
                            <button type="submit" className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-bold hover:shadow-[0_0_20px_-5px_var(--color-primary-500)] transition-all">
                                Verify & Scan Face
                            </button>
                            <div className="text-center">
                                <button type="button" onClick={() => setStep('phone')} className="text-slate-400 text-sm hover:text-white transition">Back</button>
                            </div>
                        </motion.form>
                    )}

                    {step === 'face_scan' && (
                        <motion.div
                            key="face-scan-waiting"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-8 space-y-4"
                        >
                            <div className="mx-auto w-16 h-16 border-4 border-slate-600 border-t-primary-500 rounded-full animate-spin"></div>
                            <p className="text-slate-300">Awaiting Biometric Verification...</p>
                        </motion.div>
                    )}

                    {step === 'verified' && (
                        <motion.div
                            key="verified-status"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8 space-y-4"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring" }}
                                className="mx-auto w-24 h-24 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6"
                            >
                                <CheckCircle size={48} />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white">Identity Verified</h3>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold">
                                <ShieldCheck size={16} /> 128-d Encoding Confirmed
                            </div>
                            <p className="text-slate-400 mt-4 text-sm">Redirecting to Dashboard...</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <FaceScanModal
                isOpen={isFaceScanOpen}
                onClose={() => {
                    setIsFaceScanOpen(false);
                    setStep('otp'); // rollback to OTP if they close modal
                }}
                onSuccess={handleFaceScanSuccess}
            />
        </div>
    );
};

export default Login;
