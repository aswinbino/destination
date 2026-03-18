import { DestinationCard } from '@/components/destinations/DestinationCard';
import { Input } from '@/components/ui/Input';
import { Search } from 'lucide-react';

export default function DestinationsPage() {
    const destinations = [
        { title: 'Paris Weekend', category: 'City Break', price: '$150', rating: '4.8', slug: 'paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop' },
        { title: 'Alpine Trails', category: 'Adventure', price: '$85', rating: '4.9', slug: 'alpine', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop' },
        { title: 'Bali Relax', category: 'Retreat', price: '$45', rating: '4.7', slug: 'bali', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop' },
        { title: 'Tokyo Neon', category: 'Urban', price: '$120', rating: '4.9', slug: 'tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop' },
        { title: 'Safari Dreams', category: 'Wildlife', price: '$200', rating: '4.8', slug: 'safari', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop' },
        { title: 'Santorini Sunset', category: 'Coastal', price: '$180', rating: '4.9', slug: 'santorini', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2038&auto=format&fit=crop' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                <div>
                    <h1 className="text-5xl font-black text-foreground mb-3 tracking-tight">Destinations</h1>
                    <p className="text-muted-foreground font-medium">Find your next production-ready adventure.</p>
                </div>
                <div className="w-full md:w-96 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input placeholder="Search locations..." className="pl-12" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map(dest => (
                    <DestinationCard key={dest.slug} {...dest} />
                ))}
            </div>
        </div>
    );
}
