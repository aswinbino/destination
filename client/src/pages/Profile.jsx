import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Building2, Car, Camera, Check, ShieldCheck, Zap } from 'lucide-react';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: 'Rahul M.',
        email: 'rahul.m@annauniv.edu',
        organization: 'Anna University',
        bio: 'Final year CSE student. Passionate about sustainable mobility and AI.',
        role: 'Commuter',
        trustScore: 96,
        vehicle: {
            model: 'Tata Nexon EV',
            color: 'Teal Blue',
            number: 'TN09 AB 1234'
        }
    });

    const [formData, setFormData] = useState({ ...user });

    const handleUpdate = (e) => {
        e.preventDefault();
        setUser({ ...formData });
        setIsEditing(false);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            {/* Header / Avatar Section */}
            <div className="relative mb-12">
                <div className="h-48 bg-gradient-to-r from-primary-600 to-emerald-500 rounded-3xl opacity-20 absolute inset-0 -z-10 blur-2xl"></div>
                <div className="flex flex-col md:flex-row items-center gap-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <div className="relative group">
                        <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center text-white text-4xl font-bold border-4 border-[#0a0a0c] shadow-2xl">
                            {user.name.charAt(0)}
                        </div>
                        <button className="absolute bottom-1 right-1 bg-white text-slate-900 p-2 rounded-full shadow-lg hover:scale-110 transition cursor-pointer">
                            <Camera size={18} />
                        </button>
                    </div>

                    <div className="flex-grow text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                            <h1 className="text-3xl font-extrabold text-slate-900">{user.name}</h1>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-bold uppercase tracking-wider">
                                <ShieldCheck size={14} /> Verified Member
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-500">
                            <div className="flex items-center gap-2 text-sm">
                                <Building2 size={16} /> {user.organization}
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Mail size={16} /> {user.email}
                            </div>
                        </div>
                    </div>

                    <div className="text-center bg-slate-50 border border-slate-100 p-4 rounded-2xl md:min-w-[120px]">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Trust Score</div>
                        <div className="text-3xl font-black text-primary-600">{user.trustScore}</div>
                        <div className="text-[10px] font-bold text-emerald-600 uppercase mt-1">Excellent</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Profile Details */}
                <div className="md:col-span-2 space-y-8">
                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-slate-800">Profile Information</h3>
                            {!isEditing ? (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="text-sm font-bold text-primary-600 hover:text-primary-700"
                                >
                                    Edit Details
                                </button>
                            ) : null}
                        </div>

                        {isEditing ? (
                            <form onSubmit={handleUpdate} className="grid grid-cols-1 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Organization (AI Match Boost)</label>
                                    <input
                                        type="text"
                                        value={formData.organization}
                                        onChange={e => setFormData({ ...formData, organization: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">About Bio</label>
                                    <textarea
                                        rows="3"
                                        value={formData.bio}
                                        onChange={e => setFormData({ ...formData, bio: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition"
                                    ></textarea>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        type="submit"
                                        className="flex-1 py-3 bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition"
                                    >
                                        Save Changes
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setIsEditing(false); setFormData({ ...user }); }}
                                        className="px-6 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Organization</div>
                                        <div className="text-slate-800 font-medium">{user.organization}</div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Member Since</div>
                                        <div className="text-slate-800 font-medium">May 2024</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Bio</div>
                                    <p className="text-slate-600 text-sm leading-relaxed">{user.bio}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Vehicle Details (For Driver Mode) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden"
                    >
                        <div className="absolute right-0 top-0 opacity-5 -translate-y-1/4 translate-x-1/4">
                            <Car size={160} />
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                                <Car size={24} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-800">Vehicle Information</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Model</div>
                                <div className="font-bold text-slate-800 flex items-center gap-1">
                                    {user.vehicle.model} <Zap size={12} className="text-amber-500 fill-amber-500" />
                                </div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Exterior</div>
                                <div className="font-bold text-slate-800">{user.vehicle.color}</div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Plate Number</div>
                                <div className="font-bold text-slate-800">{user.vehicle.number}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Account Activity / Badges */}
                <div className="space-y-6">
                    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                        <h3 className="font-bold text-lg text-slate-800 mb-6">Badges</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-center gap-2 p-3 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
                                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                    <Check size={20} />
                                </div>
                                <span className="text-[10px] font-bold text-emerald-700 uppercase">Early Bird</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 p-3 bg-primary-50 rounded-2xl border border-primary-100 text-center opacity-40">
                                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white">
                                    <Zap size={20} />
                                </div>
                                <span className="text-[10px] font-bold text-primary-700 uppercase">100 Rides</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#0a0a0c] to-[#1a1a1e] rounded-3xl p-6 text-white text-center shadow-xl">
                        <h4 className="text-emerald-400 font-bold mb-2">Eco Performance</h4>
                        <div className="text-4xl font-black mb-1">124kg</div>
                        <p className="text-xs text-slate-400 mb-4">Total Carbon Savings</p>
                        <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                            <div className="bg-emerald-500 h-2 rounded-full w-3/4"></div>
                        </div>
                        <div className="text-[10px] text-slate-400">75% to Next Milestone</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
