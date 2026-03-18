import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { MapPin, Calendar, Users, ShieldCheck, Star, Clock } from 'lucide-react';

export default function BookingPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div className="space-y-12">
                    <div>
                        <h1 className="text-5xl font-black text-foreground mb-4 tracking-tight">Book Your Journey</h1>
                        <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                            Secure your spot in a verified community carpool. Save costs, reduce emissions, and meet fellow explorers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card className="p-8 border-none bg-blue-50 dark:bg-blue-900/20">
                            <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl w-fit mb-4">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="text-xl font-black mb-2">Verified Only</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">All drivers are background checked and verified.</p>
                        </Card>
                        <Card className="p-8 border-none bg-emerald-50 dark:bg-emerald-900/20">
                            <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl w-fit mb-4">
                                <Star size={28} />
                            </div>
                            <h3 className="text-xl font-black mb-2">Top Rated</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Only highly-rated community members can host.</p>
                        </Card>
                    </div>
                </div>

                <Card className="p-10 shadow-2xl bg-card border border-border/50">
                    <h2 className="text-2xl font-black mb-8 tracking-tight">Trip Details</h2>
                    <div className="space-y-8">
                        <div className="flex gap-4 items-start pb-8 border-b border-border">
                            <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center font-bold text-primary">A</div>
                            <div>
                                <div className="font-black text-lg">Arjun Kumar</div>
                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Anna University • Rating 4.9</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <MapPin className="text-primary" size={20} />
                                <span className="font-bold">Guindy Station → Taramani Tech Park</span>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <Calendar className="text-primary" size={20} />
                                <span className="font-bold">Oct 24, 2026 • 09:30 AM</span>
                            </div>
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <Clock className="text-primary" size={20} />
                                <span className="font-bold">Estimated time: 15-20 mins</span>
                            </div>
                        </div>

                        <div className="pt-8 space-y-4">
                            <div className="flex justify-between items-end">
                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Fare per seat</div>
                                <div className="text-3xl font-black text-foreground">₹45.00</div>
                            </div>
                            <Button size="lg" className="w-full py-5 text-xl rounded-2xl">Confirm Booking</Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
