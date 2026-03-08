import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Car, MapPin, User, Shield, CreditCard, Leaf, Plus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import RideCard from '../components/RideCard';
import BookingModal from '../components/BookingModal';

const mockActiveRide = {
    id: 'r1',
    driver: { name: 'Priya S.', trustScore: 98, vehicle: 'Tata Nexon (EV)' },
    status: 'active',
    startLocation: 'Guindy',
    endLocation: 'Taramani Tech Park',
    time: 'Today, 08:30 AM',
    price: '₹45'
};

const mockRecentRides = [
    {
        id: 'h1',
        driver: { name: 'Arjun K.', trustScore: 94, vehicle: 'Honda City', organization: 'Anna University' },
        status: 'completed',
        startLocation: 'Velachery',
        endLocation: 'Taramani',
        time: 'Yesterday, 05:00 PM',
        price: '₹40'
    },
    {
        id: 'h2',
        driver: { name: 'Deepa R.', trustScore: 91, vehicle: 'Hyundai i20', organization: 'IIT Madras' },
        status: 'completed',
        startLocation: 'Adyar',
        endLocation: 'Siruseri IT Park',
        time: 'Mon, 07:00 PM',
        price: '₹55'
    }
];

const mockIncomingRequests = [
    {
        id: 'req1',
        driver: { name: 'Siddharth V.', trustScore: 92, vehicle: 'Anna University student' },
        status: 'incoming',
        startLocation: 'Guindy Main Gate',
        endLocation: 'Anna University Dept',
        time: 'Today, 09:15 AM',
        price: '₹15'
    }
];

const Dashboard = () => {
    const [role, setRole] = useState('passenger');
    const [bookingOpen, setBookingOpen] = useState(false);
    const [isRideActive, setIsRideActive] = useState(false);
    const [incomingRequests, setIncomingRequests] = useState(mockIncomingRequests);

    const handleAccept = (ride) => {
        alert(`Accepted ride from ${ride.driver.name}! Starting commute...`);
        setIncomingRequests(prev => prev.filter(r => r.id !== ride.id));
        setIsRideActive(true);
    };

    const handleReject = (ride) => {
        setIncomingRequests(prev => prev.filter(r => r.id !== ride.id));
    };

    // Animated CO2 Counter logic
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 124000, { duration: 3, ease: 'easeOut' });
        return animation.stop;
    }, []);

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header & Toggle */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Welcome, Rahul 👋</h1>
                        <p className="text-slate-500 mt-1">
                            {role === 'passenger' ? 'Ready for your next commute?' : 'Ready to share your commute?'}
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        {role === 'passenger' ? (
                            <button
                                onClick={() => setBookingOpen(true)}
                                className="px-5 py-2.5 bg-primary-600 text-white rounded-xl font-semibold text-sm hover:bg-primary-700 transition shadow-md shadow-primary-500/30 flex items-center gap-2"
                            >
                                <Plus size={18} /> Book a Ride
                            </button>
                        ) : (
                            <Link to="/post">
                                <button className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-semibold text-sm hover:bg-emerald-700 transition shadow-md shadow-emerald-500/30 flex items-center gap-2">
                                    <Car size={18} /> Post a Ride
                                </button>
                            </Link>
                        )}
                        <div className="bg-white p-1 rounded-xl shadow-sm border border-slate-100 flex">
                            <button onClick={() => setRole('passenger')} className={`px-5 py-2 rounded-lg font-medium transition-all text-sm ${role === 'passenger' ? 'bg-primary-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}>Passenger</button>
                            <button onClick={() => setRole('driver')} className={`px-5 py-2 rounded-lg font-medium transition-all text-sm ${role === 'driver' ? 'bg-primary-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}>Driver</button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8">

                        {role === 'driver' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                                        <CreditCard size={24} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Today's Earnings</div>
                                        <div className="text-2xl font-black text-slate-800">₹185</div>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rides Shared</div>
                                        <div className="text-2xl font-black text-slate-800">12</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {role === 'driver' && incomingRequests.length > 0 && (
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                                    Incoming Requests <span className="w-6 h-6 bg-emerald-100 text-emerald-700 text-xs rounded-full flex items-center justify-center">{incomingRequests.length}</span>
                                </h3>
                                <div className="space-y-4">
                                    {incomingRequests.map(req => (
                                        <RideCard
                                            key={req.id}
                                            ride={req}
                                            onAccept={handleAccept}
                                            onReject={handleReject}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}


                        {/* Active Ride Banner (Conditional) */}
                        {isRideActive ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-gradient-to-r from-primary-600 to-emerald-500 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden"
                            >
                                <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                                    <Car size={200} />
                                </div>

                                <div className="relative z-10">
                                    <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-sm mb-4 inline-block">
                                        {role === 'passenger' ? 'Active Ride' : 'Ongoing Commute'}
                                    </span>
                                    <h2 className="text-3xl font-bold mb-2">Heading to Taramani</h2>
                                    <p className="opacity-90 flex items-center gap-2 mb-6">
                                        <MapPin size={16} /> {role === 'passenger' ? 'Pickup in 15 mins' : 'Destination 4km away'}
                                    </p>

                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between border border-white/20">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 font-bold text-lg">
                                                PS
                                            </div>
                                            <div>
                                                <div className="font-semibold">{role === 'passenger' ? 'Driven by Priya S.' : 'Passenger: Rahul M.'}</div>
                                                <div className="text-sm opacity-80">{role === 'passenger' ? 'Trust Score: 98/100' : 'Payment Verified'}</div>
                                            </div>
                                        </div>
                                        <Link to="/track/r1">
                                            <button className="px-6 py-2 bg-white text-primary-600 rounded-xl font-bold text-sm hover:bg-primary-50 transition">
                                                Track Live
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="bg-white rounded-3xl p-10 text-center border-2 border-dashed border-slate-100">
                                <Search size={48} className="mx-auto mb-4 text-slate-200" />
                                <h3 className="text-lg font-bold text-slate-800 mb-1">
                                    {role === 'passenger' ? 'No Active Rides' : 'No Active Offers'}
                                </h3>
                                <p className="text-slate-500 text-sm mb-6">
                                    {role === 'passenger'
                                        ? "You don't have any commutes scheduled for now."
                                        : "You haven't posted any rides for today yet."}
                                </p>
                                <Link to={role === 'passenger' ? "/search" : "/post"}>
                                    <button className="px-6 py-2.5 bg-primary-50 text-primary-600 rounded-xl font-bold text-sm hover:bg-primary-100 transition">
                                        {role === 'passenger' ? 'Find a Commute' : 'Post a Ride'}
                                    </button>
                                </Link>
                            </div>
                        )}


                        {/* Recent Rides/Requests */}
                        <div>
                            <div className="flex justify-between items-end mb-6">
                                <h3 className="text-xl font-bold text-slate-800">
                                    {role === 'passenger' ? 'Recent Rides' : 'Ride Requests'}
                                </h3>
                                <Link to="/search" className="text-sm text-primary-600 font-medium hover:underline">View All</Link>
                            </div>
                            <div className="space-y-4">
                                {mockRecentRides.map(ride => (
                                    <RideCard key={ride.id} ride={ride} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Stats */}
                    <div className="space-y-6">

                        {/* AI Trust Score */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                    <Shield size={24} />
                                </div>
                                <h3 className="font-bold text-lg text-slate-800">AI Trust Score</h3>
                            </div>

                            <div className="flex items-center justify-center mb-4">
                                <div className="relative w-32 h-32 flex items-center justify-center">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="64" cy="64" r="56" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                                        <circle cx="64" cy="64" r="56" fill="none" stroke="#10b981" strokeWidth="12" strokeDasharray="351.8" strokeDashoffset={351.8 * (1 - 0.96)} strokeLinecap="round" />
                                    </svg>
                                    <div className="absolute text-center">
                                        <div className="text-3xl font-extrabold text-slate-800">96</div>
                                        <div className="text-xs text-slate-400 font-medium uppercase mt-1">Excellent</div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-slate-500 text-center">
                                Your score is higher than 92% of users. Keep up the punctuality!
                            </p>
                        </motion.div>

                        {/* Carbon Impact */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                                    <Leaf size={24} />
                                </div>
                                <h3 className="font-bold text-lg text-emerald-900">Green Impact</h3>
                            </div>
                            <div className="text-4xl font-extrabold text-emerald-600 mb-1 flex items-end gap-1">
                                <motion.span>{rounded}</motion.span>
                                <span className="text-lg font-medium text-emerald-800 pb-1">g</span>
                            </div>
                            <div className="text-sm text-emerald-700">CO2 emissions saved (124kg)</div>

                            <div className="mt-6 pt-6 border-t border-emerald-200/50 flex justify-between items-center text-sm font-medium text-emerald-800">
                                <span>Equivalent to</span>
                                <span className="bg-emerald-200 px-3 py-1 rounded-full flex items-center gap-1"><Leaf size={14} /> 5 Trees Planted</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
            <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
        </>
    );
};


export default Dashboard;
