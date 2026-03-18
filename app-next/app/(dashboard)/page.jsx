import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { MapPin, Calendar, CreditCard, ChevronRight, User, Plus } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
    const stats = [
        { label: 'Total Trips', value: '12', color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' },
        { label: 'CO2 Saved', value: '124kg', color: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400' },
        { label: 'Points', value: '2,450', color: 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400' }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-black text-foreground mb-2 tracking-tight">Welcome, Explorer</h1>
                    <p className="text-muted-foreground font-medium tracking-wide">You have 1 upcoming booking this week.</p>
                </div>
                <div className="flex gap-4">
                    <Link href="/dashboard/driver">
                        <Button variant="outline" size="lg" className="rounded-3xl border-2">Become a Driver</Button>
                    </Link>
                    <Link href="/destinations/search">
                        <Button size="lg" className="rounded-3xl">New Booking</Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {stats.map((stat, i) => (
                    <Card key={i} className="p-8 border-none shadow-sm flex items-center justify-between group hover:bg-muted transition-colors">
                        <div>
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</div>
                            <div className="text-4xl font-black text-foreground">{stat.value}</div>
                        </div>
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                            <ChevronRight size={24} />
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <h2 className="text-2xl font-black text-foreground">Upcoming Journeys</h2>
                    <div className="space-y-6">
                        <Card className="p-8 shadow-sm group cursor-pointer border-l-8 border-l-primary">
                            <div className="flex flex-col md:flex-row justify-between gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-primary">
                                        <MapPin size={18} />
                                        <span className="font-black text-lg">Guindy → Taramani Tech Park</span>
                                    </div>
                                    <div className="flex gap-6 text-sm font-medium text-muted-foreground">
                                        <span className="flex items-center gap-2"><Calendar size={16} /> Oct 24, 2026</span>
                                        <span className="flex items-center gap-2"><CreditCard size={16} /> Paid - ₹45.00</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Button variant="outline" className="rounded-2xl">Details</Button>
                                    <Button className="rounded-2xl shadow-primary/20">Track Live</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl font-black text-foreground">Rewards</h2>
                    <Card className="p-8 bg-slate-900 dark:bg-slate-800 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20"></div>
                        <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Explorer Level</p>
                        <h3 className="text-3xl font-black mb-6">Master Guide</h3>
                        <div className="w-full bg-white/10 rounded-full h-3 mb-3">
                            <div className="bg-primary h-full rounded-full w-3/4 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                        </div>
                        <div className="text-sm font-medium text-slate-400">75% to Next Milestone</div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
