import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Star, MapPin, Clock, Shield } from 'lucide-react';

export default function DestinationCard({ title, category, price, rating, slug, image }) {
    return (
        <Link href={`/destinations/${slug}`} className="group block">
            <Card className="p-0 border-none shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-background overflow-hidden">
                <div className="relative h-64 w-full">
                    <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-foreground border border-white/20">
                            {category}
                        </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                        <div className="px-4 py-2 bg-primary rounded-full text-white font-black text-sm shadow-lg shadow-primary/20">
                            {price}
                        </div>
                    </div>
                </div>
                <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">{title}</h3>
                        <div className="flex items-center gap-1">
                            <Star className="text-amber-400 fill-amber-400" size={16} />
                            <span className="text-sm font-black text-foreground">{rating}</span>
                        </div>
                    </div>
                    <div className="flex gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        <span className="flex items-center gap-1"><MapPin size={14} /> 2.4km</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> 15 mins</span>
                        <span className="flex items-center gap-1"><Shield size={14} /> Verified</span>
                    </div>
                </div>
            </Card>
        </Link>
    );
}
