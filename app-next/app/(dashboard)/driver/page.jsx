import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { MapPin, Clock, Car, Users, TrendingUp, AlertCircle } from 'lucide-react';

export default function DriverDashboard() {
    const activeRequests = [
        { id: 1, user: 'Priya S.', route: 'Velachery → OMR Food Street', time: '10 mins ago', students: 2, impact: '+4.2kg CO2' },
        { id: 2, user: 'Arjun K.', route: 'Guindy → Taramani', time: '15 mins ago', students: 1, impact: '+2.1kg CO2' }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-black text-foreground mb-2 tracking-tight">Driver Hub</h1>
                    <p className="text-muted-foreground font-medium tracking-wide">Manage your carpools and monitor AI safety logs.</p>
                </div>
                <Button size="lg" className="rounded-3xl bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/20">
                    Post a Ride
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                    { label: 'Today\'s Earnings', value: '₹450', icon: TrendingUp, color: 'text-emerald-500' },
                    { label: 'Safety Score', value: '98%', icon: AlertCircle, color: 'text-blue-500' },
                    { label: 'Active Rides', value: '2', icon: Car, color: 'text-amber-500' },
                    { label: 'People Helped', value: '42', icon: Users, color: 'text-purple-500' }
                ].map((stat, i) => (
                    <Card key={i} className="p-6 border-none shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                                <div className="text-2xl font-black text-foreground">{stat.value}</div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-foreground">Live Requests</h2>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full animate-pulse">
                            LIVE
                        </span>
                    </div>

                    <div className="space-y-6">
                        {activeRequests.map(req => (
                            <Card key={req.id} className="p-8 shadow-sm group hover:scale-[1.01] transition-all">
                                <div className="flex flex-col md:flex-row justify-between gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center font-bold text-primary">
                                                {req.user.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-black text-lg">{req.user}</div>
                                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{req.time}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-primary font-bold">
                                            <MapPin size={18} />
                                            <span>{req.route}</span>
                                        </div>
                                        <div className="flex gap-4 text-sm font-bold text-muted-foreground">
                                            <span className="flex items-center gap-1"><Users size={16} /> {req.students} Passenger(s)</span>
                                            <span className="flex items-center gap-1 text-emerald-600"><TrendingUp size={16} /> {req.impact}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Button variant="outline" className="rounded-2xl">Reject</Button>
                                        <Button className="rounded-2xl bg-emerald-600 hover:bg-emerald-700">Accept Request</Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl font-black text-foreground">AI Monitor</h2>
                    <Card className="p-8 border-2 border-dashed border-slate-200 dark:border-slate-800">
                        <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto text-blue-500">
                                <Car size={40} />
                            </div>
                            <h3 className="text-xl font-bold">Ready to Start?</h3>
                            <p className="text-sm text-muted-foreground">
                                Your AI co-pilot will monitor drowsiness and route deviations in real-time once you start a ride.
                            </p>
                            <Button className="w-full rounded-2xl py-6 text-lg">Go Online</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
