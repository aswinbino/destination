import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

const botReplies = [
    "I'm on my way! ETA is about 15 minutes. 🚗",
    "Sure, I'll wait for you at the main gate.",
    "I'm currently near Guindy signal. Will be there soon!",
    "My car is a Tata Nexon EV, Teal Blue. Look for license plate TN09 AB1234.",
    "Traffic is a bit slow on Sardar Patel Road, but I'll make it on time.",
    "I've noted your updated pickup location. See you shortly!",
    "Yes, AC is on. Have a comfortable ride! 😊",
    "Of course, I can drop you at the side entrance of Taramani Tech Park.",
];

const ChatBot = ({ driverName = 'Arjun Kumar' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, from: 'driver', text: `Hi! I'm ${driverName}. I'm on my way to your pickup point. 👋`, time: new Date() }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (isOpen) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), from: 'rider', text: input, time: new Date() };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsTyping(true);

        // Simulate bot reply after a 1-2 second delay
        setTimeout(() => {
            const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
            setMessages(prev => [...prev, { id: Date.now() + 1, from: 'driver', text: reply, time: new Date() }]);
            setIsTyping(false);
        }, 1200 + Math.random() * 800);
    };

    const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <>
            {/* Floating Launcher */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-500 text-white rounded-full shadow-2xl flex items-center justify-center shadow-primary-500/40"
            >
                <MessageSquare size={28} />
                {/* New message indicator */}
                <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 40, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[480px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary-600 to-primary-500 p-4 flex items-center justify-between flex-shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-white text-lg">A</div>
                                <div>
                                    <div className="font-bold text-white">{driverName}</div>
                                    <div className="text-xs text-white/70 flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                                        Active Ride
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white rounded-full p-1">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-grow overflow-y-auto p-4 space-y-3 bg-slate-50">
                            {messages.map(msg => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.from === 'rider' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.from === 'driver' && (
                                        <div className="w-7 h-7 bg-primary-100 rounded-full flex items-center justify-center text-xs font-bold text-primary-700 mr-2 flex-shrink-0 mt-1">A</div>
                                    )}
                                    <div className={`max-w-[75%] ${msg.from === 'rider' ? 'items-end' : 'items-start'} flex flex-col`}>
                                        <div className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.from === 'rider'
                                                ? 'bg-primary-600 text-white rounded-br-sm'
                                                : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-sm'
                                            }`}>
                                            {msg.text}
                                        </div>
                                        <span className="text-[10px] text-slate-400 mt-1 px-1">{formatTime(msg.time)}</span>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
                                    <div className="w-7 h-7 bg-primary-100 rounded-full flex items-center justify-center text-xs font-bold text-primary-700">A</div>
                                    <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-slate-100 flex gap-1">
                                        {[0, 1, 2].map(i => (
                                            <motion.div key={i} className="w-2 h-2 rounded-full bg-slate-400"
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                            <div ref={bottomRef}></div>
                        </div>

                        {/* Input */}
                        <form onSubmit={sendMessage} className="p-3 border-t border-slate-100 bg-white flex gap-2 flex-shrink-0">
                            <input
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                placeholder="Message your driver..."
                                className="flex-grow px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                            />
                            <motion.button
                                type="submit"
                                whileTap={{ scale: 0.9 }}
                                className="w-10 h-10 bg-primary-600 text-white rounded-xl flex items-center justify-center hover:bg-primary-700 transition flex-shrink-0"
                            >
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;
