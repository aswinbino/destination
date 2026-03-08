import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { ShieldAlert, Users, TrendingUp, CheckCircle, XCircle, AlertTriangle, Activity, MapPin } from 'lucide-react';

// Mock Data
const revenueData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 5500 },
    { month: 'Mar', revenue: 8200 },
    { month: 'Apr', revenue: 11000 },
    { month: 'May', revenue: 15300 },
    { month: 'Jun', revenue: 21900 },
];

const splitData = [
    { name: 'Driver', value: 70 },
    { name: 'Platform', value: 27 },
    { name: 'Commission', value: 3 },
];
const COLORS = ['#10b981', '#6366f1', '#f59e0b'];

const initialVerifications = [
    { id: '1', name: 'Arjun K.', role: 'Student', org: 'Anna University', doc: 'ID-4920', status: 'pending' },
    { id: '2', name: 'Priya M.', role: 'Employee', org: 'TCS Siruseri', doc: 'EMP-991', status: 'pending' },
    { id: '3', name: 'Rohit S.', role: 'Student', org: 'IIT Madras', doc: 'ID-102', status: 'pending' },
];

const AdminDashboard = () => {
    const [alerts, setAlerts] = useState([]);
    const [verifications, setVerifications] = useState(initialVerifications);

    // Simulate Socket.IO live alerts for Driver Monitoring
    useEffect(() => {
        const createRandomAlert = () => {
            const types = ['DROWSINESS', 'ROUTE_DEVIATION', 'HARSH_BRAKING', 'OVERSPEEDING'];
            const names = ['Driver A', 'Driver B', 'Driver C', 'Driver D'];
            const id = Math.random().toString(36).substring(7);
            const type = types[Math.floor(Math.random() * types.length)];
            const driver = names[Math.floor(Math.random() * names.length)];

            setAlerts(prev => [
                { id, type, driver, time: new Date().toLocaleTimeString(), severity: type === 'DROWSINESS' || type === 'ROUTE_DEVIATION' ? 'high' : 'medium' },
                ...prev
            ].slice(0, 5)); // Keep last 5 alerts
        };

        // Initial alert
        createRandomAlert();

        // Random alerts every 8-15 seconds
        const interval = setInterval(() => {
            if (Math.random() > 0.5) {
                createRandomAlert();
            }
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const handleVerify = (id, action) => {
        setVerifications(prev => prev.map(v => v.id === id ? { ...v, status: action } : v));
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 p-6 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">

                <header className="flex justify-between items-center pb-6 border-b border-slate-800">
                    <div>
                        <h1 className="text-3xl font-bold text-white flex items-center gap-2">
                            <ShieldAlert className="text-primary-500" />
                            Admin Operations
                        </h1>
                        <p className="text-slate-400 mt-1">Live Safety & Revenue Monitor</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700 flex items-center gap-2 text-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                            System Online
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Live Safety Monitor (Socket.IO simulation) */}
                    <div className="lg:col-span-1 space-y-4">
                        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                            <Activity className="text-red-500" />
                            Live Safety Alerts
                        </h2>

                        <div className="space-y-3">
                            <AnimatePresence>
                                {alerts.map(alert => (
                                    <motion.div
                                        key={alert.id}
                                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className={`p-4 rounded-xl border ${alert.severity === 'high' ? 'bg-red-500/10 border-red-500/30' : 'bg-orange-500/10 border-orange-500/30'}`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex items-center gap-2">
                                                {alert.severity === 'high' ? (
                                                    <AlertTriangle size={18} className="text-red-500 animate-pulse" />
                                                ) : (
                                                    <MapPin size={18} className="text-orange-500" />
                                                )}
                                                <span className={`font-bold text-sm ${alert.severity === 'high' ? 'text-red-400' : 'text-orange-400'}`}>
                                                    {alert.type.replace('_', ' ')}
                                                </span>
                                            </div>
                                            <span className="text-xs text-slate-500">{alert.time}</span>
                                        </div>
                                        <div className="text-sm">
                                            <span className="text-slate-400">Driver: </span>
                                            <span className="text-slate-200 font-medium">{alert.driver}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            {alerts.length === 0 && (
                                <div className="text-center p-8 text-slate-500 border border-dashed border-slate-700 rounded-xl">
                                    No active alerts
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Revenue Charts */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Monthly Growth */}
                            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
                                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                    <TrendingUp size={18} className="text-emerald-400" />
                                    Monthly Volume (₹)
                                </h3>
                                <div className="h-64">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                            <defs>
                                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <XAxis dataKey="month" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                                            <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value / 1000}k`} />
                                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                                            <RechartsTooltip
                                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                                                itemStyle={{ color: '#10b981' }}
                                            />
                                            <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Revenue Split */}
                            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl flex flex-col items-center">
                                <h3 className="text-lg font-semibold text-white mb-2 self-start w-full border-b border-slate-700 pb-4">
                                    Revenue Split Models
                                </h3>
                                <div className="h-48 w-full mt-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={splitData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={50}
                                                outerRadius={75}
                                                paddingAngle={5}
                                                dataKey="value"
                                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                                labelLine={false}
                                                stroke="none"
                                            >
                                                {splitData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <RechartsTooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px' }} />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="flex gap-4 mt-4 text-xs">
                                    <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-emerald-500"></span> Driver (70%)</div>
                                    <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-indigo-500"></span> Platform (27%)</div>
                                    <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-amber-500"></span> App (3%)</div>
                                </div>
                            </div>
                        </div>

                        {/* Verification Table */}
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl overflow-x-auto">
                            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                <Users size={18} className="text-primary-400" />
                                Pending Verifications
                            </h3>
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-slate-400 border-b border-slate-700 text-sm">
                                        <th className="pb-3 font-medium">User</th>
                                        <th className="pb-3 font-medium">Role</th>
                                        <th className="pb-3 font-medium">Organization</th>
                                        <th className="pb-3 font-medium">Document</th>
                                        <th className="pb-3 font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <AnimatePresence>
                                        {verifications.map((v) => (
                                            <motion.tr
                                                key={v.id}
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="border-b border-slate-700/50 last:border-0"
                                            >
                                                <td className="py-4 text-white font-medium">{v.name}</td>
                                                <td className="py-4">
                                                    <span className="px-2 py-1 bg-slate-700 rounded text-xs text-slate-300">{v.role}</span>
                                                </td>
                                                <td className="py-4 text-slate-300 text-sm">{v.org}</td>
                                                <td className="py-4 text-blue-400 text-sm hover:underline cursor-pointer">{v.doc}</td>
                                                <td className="py-4 flex gap-2">
                                                    {v.status === 'pending' ? (
                                                        <>
                                                            <button
                                                                onClick={() => handleVerify(v.id, 'approved')}
                                                                className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg hover:bg-emerald-500/30 transition flex items-center gap-1 text-sm font-medium"
                                                            >
                                                                <CheckCircle size={16} /> Approve
                                                            </button>
                                                            <button
                                                                onClick={() => handleVerify(v.id, 'rejected')}
                                                                className="px-3 py-1.5 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition flex items-center gap-1 text-sm font-medium"
                                                            >
                                                                <XCircle size={16} /> Reject
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <span className={`text-sm font-semibold capitalize ${v.status === 'approved' ? 'text-emerald-500' : 'text-red-500'}`}>
                                                            {v.status}
                                                        </span>
                                                    )}
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </AnimatePresence>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
