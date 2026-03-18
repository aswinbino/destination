import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { CreditCard, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { Input } from '@/components/ui/Input';

export default function PaymentPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-black mb-4 tracking-tight">Payment</h1>
                <p className="text-muted-foreground font-medium">Securely complete your booking via our production-grade gateway.</p>
            </div>

            <div className="grid grid-cols-1 gap-12">
                <Card className="p-10 shadow-2xl border-none">
                    <div className="flex items-center justify-between mb-10 pb-6 border-b border-border">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                                <CreditCard size={24} />
                            </div>
                            <div>
                                <div className="font-black text-xl">Credit / Debit Card</div>
                                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Secure encrypted payment</div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-8 h-5 bg-slate-200 dark:bg-slate-700 rounded"></div>
                            <div className="w-8 h-5 bg-slate-200 dark:bg-slate-700 rounded"></div>
                        </div>
                    </div>

                    <form className="space-y-8">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Card Holder</label>
                            <Input placeholder="JOHN DOE" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Card Number</label>
                            <Input placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Expiry</label>
                                <Input placeholder="MM / YY" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">CVV</label>
                                <Input placeholder="•••" />
                            </div>
                        </div>

                        <div className="pt-8">
                            <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-2xl mb-8">
                                <ShieldCheck size={20} />
                                <span className="text-sm font-bold">Your payment information is never stored on our servers.</span>
                            </div>
                            <Button size="lg" className="w-full py-6 text-xl rounded-2xl">Confirm & Pay ₹45.00</Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}
