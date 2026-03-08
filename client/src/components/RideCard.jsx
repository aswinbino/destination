import { MapPin, Clock, Zap, Building2, BrainCircuit } from 'lucide-react';
import { Link } from 'react-router-dom';

const RideCard = ({ ride, onBook, onAccept, onReject }) => {
    const getStatusButton = () => {
        if (ride.status === 'available') {
            return (
                <button
                    onClick={() => onBook && onBook(ride)}
                    className="text-sm font-bold bg-primary-600 text-white px-4 py-1.5 rounded-lg hover:bg-primary-700 transition"
                >
                    Book Now
                </button>
            );
        }
        if (ride.status === 'incoming') {
            return (
                <div className="flex gap-2">
                    <button
                        onClick={() => onAccept && onAccept(ride)}
                        className="text-sm font-bold bg-emerald-500 text-white px-4 py-1.5 rounded-lg hover:bg-emerald-600 transition"
                    >
                        Accept
                    </button>
                    <button
                        onClick={() => onReject && onReject(ride)}
                        className="text-sm font-medium bg-slate-50 text-slate-500 border border-slate-200 px-4 py-1.5 rounded-lg hover:bg-slate-100 transition"
                    >
                        Reject
                    </button>
                </div>
            );
        }
        if (ride.status === 'active') {
            return (
                <Link to={`/track/${ride.id || 'r1'}`}>
                    <button className="text-sm font-semibold text-primary-600 hover:text-primary-700 border border-primary-100 px-4 py-1.5 rounded-lg hover:bg-primary-50 transition">
                        Track Live
                    </button>
                </Link>
            );
        }
        return (
            <Link to={`/track/${ride.id || 'r1'}`}>
                <button className="text-sm font-medium text-slate-400 hover:text-slate-600 border border-slate-100 px-4 py-1.5 rounded-lg hover:bg-slate-50 transition">
                    View Summary
                </button>
            </Link>
        );
    };



    return (
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition group relative overflow-hidden">
            {/* Decorative accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600 border border-slate-200">
                        {ride.driver?.name?.charAt(0) || 'D'}
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800 flex items-center gap-1">
                            {ride.driver?.name || 'Driver'}
                            {ride.driver?.isEV && <Zap size={14} className="text-amber-500 fill-amber-500" title="EV Vehicle" />}
                            {ride.driver?.organization && (
                                <span className="ml-1 text-[10px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded flex items-center gap-0.5 whitespace-nowrap">
                                    <Building2 size={10} /> {ride.driver.organization}
                                </span>
                            )}
                        </h4>
                        <div className="text-xs text-slate-500">{ride.driver?.vehicle || 'Vehicle'} • ⭐ {ride.driver?.trustScore || 100}</div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="font-bold text-primary-600 text-lg">{ride.price}</div>
                    {ride.matchScore && (
                        <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded uppercase font-bold mt-1 inline-flex items-center gap-1">
                            <BrainCircuit size={12} /> {ride.matchScore}% Match
                        </div>
                    )}
                </div>
            </div>

            <div className="relative pl-6 space-y-4 mb-4">
                {/* Timeline line */}
                <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-200"></div>

                <div className="relative">
                    <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white"></div>
                    <div className="text-sm font-medium text-slate-900">{ride.startLocation}</div>
                </div>

                <div className="relative">
                    <div className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-primary-500 border-2 border-white"></div>
                    <div className="text-sm font-medium text-slate-900">{ride.endLocation}</div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-2">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <Clock size={14} /> {ride.time}
                </div>
                {getStatusButton()}
            </div>
        </div>
    );
};


export default RideCard;
