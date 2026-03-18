import Link from 'next/link';
import { Compass, MapPin, Search, Calendar, ShieldCheck, Zap } from 'lucide-react';
import { Features } from '@/components/marketing/Features';

export default function Home() {
    return (
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
                    {/* Animated Background Placeholder */}
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop')] bg-cover bg-center"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                    <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
                        EXPLORE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">WITHOUT LIMITS</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto">
                        Standardizing production-grade travel experiences with AI-powered route planning and verified community carpooling.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/destinations"
                            className="px-12 py-5 bg-blue-600 text-white rounded-full font-black text-lg shadow-2xl shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 transition-all"
                        >
                            Start Exploring
                        </Link>
                        <Link
                            href="/login"
                            className="px-12 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-black text-lg hover:bg-white/20 transition-all"
                        >
                            Login
                        </Link>
                    </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute bottom-10 left-0 right-0 max-w-6xl mx-auto px-6 overflow-x-auto no-scrollbar">
                    <div className="flex gap-4 min-w-max">
                        {[
                            { icon: MapPin, label: "500+", sub: "Destinations" },
                            { icon: Users, label: "10k+", sub: "Active Users" },
                            { icon: ShieldCheck, label: "Verified", sub: "Community" },
                            { icon: Zap, label: "AI Powered", sub: "Matching" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex items-center gap-4 min-w-[200px]">
                                <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl">
                                    <stat.icon size={24} />
                                </div>
                                <div>
                                    <div className="text-xl font-black text-white">{stat.label}</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Features />

            {/* Featured Destinations Section */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-black text-slate-900 mb-2">Popular Destinations</h2>
                        <p className="text-slate-500 font-medium">Curated by our community of explorers</p>
                    </div>
                    <Link href="/destinations" className="text-blue-600 font-black flex items-center gap-2 hover:gap-3 transition-all">
                        See All <Search size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Destination Card Placeholder */}
                    {[1, 2, 3].map(i => (
                        <div key={i} className="group cursor-pointer">
                            <div className="h-80 bg-slate-200 rounded-[2.5rem] mb-6 overflow-hidden relative">
                                <div className="absolute top-6 left-6 z-10">
                                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-slate-900 border border-white/20">
                                        ⭐ 4.9
                                    </span>
                                </div>
                                <div className="w-full h-full bg-slate-300 animate-pulse transition group-hover:scale-105 duration-500"></div>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-1">Scenic Trails {i}</h3>
                            <p className="text-slate-500 font-medium">Mountain Adventure • $120/day</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

function Users(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
