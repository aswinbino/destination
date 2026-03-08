import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="p-4 bg-white shadow-sm flex justify-between">
            <Link to="/" className="font-bold text-xl text-primary-600">Destination</Link>
            <div className="flex gap-4">
                <Link to="/login" className="text-slate-600 hover:text-primary-600 transition">Login</Link>
                <Link to="/dashboard" className="text-slate-600 hover:text-primary-600 transition">Dashboard</Link>
            </div>
        </nav>
    );
};

export default Navbar;
