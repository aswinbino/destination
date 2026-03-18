import { Card } from '@/components/ui/Card';
import { Shield, Zap, Users, Globe, Lock, Cpu } from 'lucide-react';

export function Features() {
    const features = [
        { title: 'AI Route Planning', description: 'Advanced algorithms optimize every mile of your journey.', icon: Zap, color: 'text-blue-500' },
        { title: 'Verified Community', description: 'Safe community carpooling with student & employee verification.', icon: Shield, color: 'text-emerald-500' },
        { title: 'Global Coverage', description: 'Access over 500+ premium destinations worldwide.', icon: Globe, color: 'text-purple-500' },
        { title: 'Social Impact', description: 'Reduce carbon emissions and build genuine connections.', icon: Users, color: 'text-amber-500' },
        { title: 'Secure Vault', description: 'Production-grade security for your data and payments.', icon: Lock, color: 'text-rose-500' },
        { title: 'AI Safety Monitor', description: 'Real-time drowsiness and route deviation alerts.', icon: Cpu, color: 'text-indigo-500' }
    ];

    return (
        <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-foreground mb-4 tracking-tight">Standardized Excellence</h2>
                    <p className="text-muted-foreground font-medium max-w-2xl mx-auto">
                        Everything you need for a premium, secure, and sustainable travel experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <Card key={i} className="p-10 border-none shadow-sm group hover:scale-[1.02] transition-all bg-card">
                            <div className={`${feature.color} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                                <feature.icon size={40} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-2xl font-black text-foreground mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground font-medium leading-relaxed">{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
