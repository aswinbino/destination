import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ShieldCheck, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';

export default function BookingConfirmPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-24">
            <Card className="max-w-2xl w-full p-12 text-center shadow-2xl border-none">
                <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <ShieldCheck size={48} />
                </div>
                <h1 className="text-5xl font-black text-foreground mb-4 tracking-tight">Booking Confirmed!</h1>
                <p className="text-xl text-muted-foreground font-medium mb-12 max-w-md mx-auto">
                    Your seat is secured. Arjun has been notified and is expecting you at Guindy Station.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                    <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl text-left border border-border">
                        <div className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2">Booking ID</div>
                        <div className="font-bold text-foreground">#DEST-8829-X</div>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl text-left border border-border">
                        <div className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2">Pickup Time</div>
                        <div className="font-bold text-foreground">09:30 AM Today</div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/dashboard" className="flex-1">
                        <Button size="lg" className="w-full rounded-2xl py-6 gap-2">
                            Go to Dashboard <ArrowRight size={20} />
                        </Button>
                    </Link>
                    <Link href="/" className="flex-1">
                        <Button variant="outline" size="lg" className="w-full rounded-2xl py-6 gap-2">
                            <Home size={20} /> Back Home
                        </Button>
                    </Link>
                </div>
            </Card>
        </div>
    );
}
