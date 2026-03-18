import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { MapPin, Users, Calendar } from 'lucide-react';

export default function BookingForm() {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Pickup Location</label>
                <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <Input placeholder="Enter pickup point" className="pl-12" />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Date</label>
                    <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input type="date" className="pl-12" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Seats</label>
                    <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                        <Input type="number" min="1" max="4" defaultValue="1" className="pl-12" />
                    </div>
                </div>
            </div>
            <Button className="w-full py-4 rounded-2xl">Search Rides</Button>
        </div>
    );
}
