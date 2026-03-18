import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { MapPin, Map as MapIcon, Calendar, Users, Star, ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';

export default function DestinationDetailPage({ params }) {
    const { slug } = params;

    // Mock data for the specific destination
    const dest = {
        title: slug === 'paris' ? 'Paris Weekend' : slug.charAt(0).toUpperCase() + slug.slice(1),
        category: 'City Break',
        price: '₹3,500',
        rating: '4.8',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
        description: 'Experience the magic of the city of lights. This trip includes a guided carpool journey with fellow enthusiasts, a stay in a production-grade boutique hotel, and exclusive access to local hidden gems.'
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-12">
                    <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                        <img src={dest.image} alt={dest.title} className="w-full h-full object-cover" />
                        <div className="absolute top-8 left-8">
                            <span className="px-6 py-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-sm font-black uppercase tracking-widest text-primary border border-white/20">
                                {dest.category}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between items-end">
                            <div>
                                <h1 className="text-5xl font-black tracking-tight mb-2">{dest.title}</h1>
                                <div className="flex items-center gap-6 text-muted-foreground font-bold uppercase tracking-widest text-xs">
                                    <span className="flex items-center gap-2"><MapPin size={16} /> France, EU</span>
                                    <span className="flex items-center gap-2"><Star className="text-amber-400 fill-amber-400" size={16} /> {dest.rating} (124 Reviews)</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-1">Starting from</div>
                                <div className="text-4xl font-black text-primary">{dest.price}</div>
                            </div>
                        </div>

                        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                            {dest.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                            {[
                                { icon: MapIcon, label: 'Route Optimized', sub: 'AI Planned' },
                                { icon: Users, label: 'Community', sub: 'Verified Only' },
                                { icon: Shield, label: 'Safe Travel', sub: '24/7 Monitor' }
                            ].map((feature, i) => (
                                <Card key={i} className="p-6 border-none bg-muted hover:bg-muted/80 transition-colors">
                                    <div className="text-primary mb-3">
                                        <feature.icon size={28} />
                                    </div>
                                    <div className="font-black">{feature.label}</div>
                                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{feature.sub}</div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                <aside className="space-y-8">
                    <Card className="p-10 shadow-2xl border-none sticky top-12">
                        <h3 className="text-2xl font-black mb-8 tracking-tight">Reserve Spot</h3>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Date</label>
                                <div className="p-4 bg-muted rounded-2xl font-bold flex items-center justify-between">
                                    Oct 24, 2026
                                    <Calendar size={18} className="text-primary" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Passengers</label>
                                <div className="p-4 bg-muted rounded-2xl font-bold flex items-center justify-between">
                                    1 Person
                                    <Users size={18} className="text-primary" />
                                </div>
                            </div>
                            <div className="pt-6 border-t border-border space-y-4">
                                <div className="flex justify-between font-bold">
                                    <span className="text-muted-foreground">Standard Fare</span>
                                    <span>{dest.price}</span>
                                </div>
                                <div className="flex justify-between font-bold text- emerald-600 dark:text-emerald-400">
                                    <span>Carbon Offset</span>
                                    <span>FREE</span>
                                </div>
                                <Link href="/booking">
                                    <Button size="lg" className="w-full py-5 text-xl rounded-2xl mt-4">
                                        Book Now <ArrowRight className="ml-2" size={20} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </aside>
            </div>
        </div>
    );
}
