import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-24">
            <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tight">Standardizing Travel</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
                Destination Explorer is a production-grade platform designed to simplify global travel and community-based carpooling.
                We use AI to optimize routes and verified communities to ensure safety and trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-slate-500">To make every journey safe, social, and sustainable through advanced technology.</p>
                </Card>
                <Card className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-slate-500">A world where travel connects people and reduces carbon footprints automatically.</p>
                </Card>
            </div>
        </div>
    );
}
