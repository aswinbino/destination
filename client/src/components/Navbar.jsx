import { Link, useLocation } from 'react-router-dom';
import { Search, User, LayoutDashboard, Car } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { path: '/search', label: 'Search', icon: Search },
        { path: '/profile', label: 'Profile', icon: User },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/10 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-500/20">
                        <Car className="text-white" size={18} />
                    </div>
                    <span className="font-bold text-xl text-white tracking-tight">Destination</span>
                </Link>

                <div className="flex gap-6 items-center">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`flex items-center gap-2 font-medium transition-all ${isActive
                                        ? 'text-primary-500 bg-primary-500/10 px-3 py-1.5 rounded-xl'
                                        : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                <Icon size={18} />
                                <span className="hidden md:inline text-sm">{link.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};


export default Navbar;
