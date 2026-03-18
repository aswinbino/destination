import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-24">
            <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tight">Get in Touch</h1>
            <p className="text-xl text-slate-600 mb-12">Have questions about our production architecture or community travel? We're here to help.</p>

            <Card className="p-10">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                            <Input placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <Input type="email" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                        <textarea
                            className="w-full min-h-[150px] rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all"
                            placeholder="How can we help you?"
                        ></textarea>
                    </div>
                    <Button size="lg" className="w-full">Send Message</Button>
                </form>
            </Card>
        </div>
    );
}
