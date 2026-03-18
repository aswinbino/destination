import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { MapPin, Search as SearchIcon, Filter, SlidersHorizontal } from 'lucide-react';
import { DestinationCard } from '@/components/destinations/DestinationCard';

export default function SearchPage() {
    const results = [
        { title: 'Paris Weekend', category: 'City Break', price: '$150', rating: '4.8', slug: 'paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop' },
        { title: 'Alpine Trails', category: 'Adventure', price: '$85', rating: '4.9', slug: 'alpine', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row gap-12">
                <aside className="w-full md:w-80 space-y-8">
                    <div>
                        <h2 className="text-2xl font-black mb-6">Filters</h2>
                        <Card className="p-6 space-y-6 border-none shadow-sm">
                            <div className="space-y-4">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Category</label>
                                <div className="space-y-2">
                                    {['Adventure', 'City Break', 'Luxury', 'Wildlife'].map(cat => (
                                        <label key={cat} className="flex items-center gap-3 font-medium cursor-pointer">
                                            <input type="checkbox" className="w-5 h-5 rounded-lg border-border bg-muted text-primary" />
                                            {cat}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Price Range</label>
                                <input type="range" className="w-full accent-primary" />
                            </div>
                            <Button className="w-full rounded-xl">Apply Filters</Button>
                        </Card>
                    </div>
                </aside>

                <main className="flex-1 space-y-8">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-black">2 Results Found</h1>
                        <Button variant="outline" className="rounded-xl gap-2 md:hidden">
                            <Filter size={18} /> Filters
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {results.map(dest => (
                            <DestinationCard key={dest.slug} {...dest} />
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
