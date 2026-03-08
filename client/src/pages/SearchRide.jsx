import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Clock, Users, Filter } from 'lucide-react';
import RideCard from '../components/RideCard';

const mockResults = [
    {
        id: 'r1',
        driver: { name: 'Priya S.', trustScore: 99, vehicle: 'Tata Nexon (EV)', isEV: true, organization: 'Anna University' },
        status: 'available',
        startLocation: 'Guindy Campus',
        endLocation: 'Taramani Tech Park',
        time: 'Today, 08:45 AM',
        price: '₹45',
        matchScore: 98
    },
    {
        id: 'r2',
        driver: { name: 'Arjun K.', trustScore: 94, vehicle: 'Honda City', isEV: false, organization: 'Anna University' },
        status: 'available',
        startLocation: 'Velachery',
        endLocation: 'Taramani',
        time: 'Today, 09:00 AM',
        price: '₹40',
        matchScore: 91
    },
    {
        id: 'r3',
        driver: { name: 'Rahul V.', trustScore: 88, vehicle: 'Hyundai Venue', isEV: false, organization: 'TCS Siruseri' },
        status: 'available',
        startLocation: 'Adyar',
        endLocation: 'Siruseri IT Park',
        time: 'Today, 08:30 AM',
        price: '₹55',
        matchScore: 65
    }
];

const SearchRide = () => {
    const [hasSearched, setHasSearched] = useState(false);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            {/* Search Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-8"
            >
                <h1 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <Search className="text-primary-600" /> Find a Commute
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="relative col-span-1 lg:col-span-2">
                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                        <input
                            type="text"
                            placeholder="Leaving from..."
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition"
                        />
                    </div>
                    <div className="relative col-span-1 lg:col-span-2">
                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500" size={18} />
                        <input
                            type="text"
                            placeholder="Going to..."
                            className="w-full pl-10 pr-4 py-3 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-primary-500 outline-none transition"
                        />
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setHasSearched(true)}
                        className="col-span-1 bg-primary-600 text-white rounded-2xl py-3 font-bold hover:bg-primary-700 transition shadow-lg shadow-primary-500/30"
                    >
                        Search
                    </motion.button>
                </div>

                <div className="flex gap-4 mt-4 pt-4 border-t border-slate-100 overflow-x-auto pb-2">
                    {/* Date */}
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 whitespace-nowrap">
                        <Calendar size={16} /> Today
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 whitespace-nowrap">
                        <Clock size={16} /> 08:30 AM
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-100 whitespace-nowrap">
                        <Users size={16} /> 1 Seat
                    </button>
                    <div className="w-px h-8 bg-slate-200 mx-2"></div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-xl text-sm font-medium border border-primary-100 whitespace-nowrap">
                        <Filter size={16} /> More Filters
                    </button>
                </div>
            </motion.div>

            {/* Results Section */}
            {hasSearched && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-slate-800">
                            {mockResults.length} AI-Matched Rides
                        </h2>
                        <div className="text-sm text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full">
                            Highest CO2 Savings first
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockResults.map((ride, idx) => (
                            <motion.div
                                key={ride.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <RideCard ride={ride} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Empty State before search */}
            {!hasSearched && (
                <div className="text-center py-20 text-slate-400">
                    <Search size={48} className="mx-auto mb-4 opacity-20" />
                    <p>Enter your commute details to find the best AI-matched rides.</p>
                </div>
            )}

        </div>
    );
};

export default SearchRide;
