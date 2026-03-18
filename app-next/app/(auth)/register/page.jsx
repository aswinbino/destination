import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { Mail, Lock, User, Github } from 'lucide-react';

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-background relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[120px] opacity-50"></div>
            <Card className="w-full max-w-md p-10 shadow-2xl border border-border/50 bg-card/80 backdrop-blur-xl relative z-10">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-black text-foreground mb-2">Create Account</h1>
                    <p className="text-muted-foreground font-medium">Join the explorer community today</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <Input placeholder="John Doe" className="pl-12" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <Input type="email" placeholder="name@example.com" className="pl-12" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <Input type="password" placeholder="••••••••" className="pl-12" />
                        </div>
                    </div>
                    <Button size="lg" className="w-full py-4 text-lg">Register</Button>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase font-bold text-muted-foreground">
                        <span className="bg-card px-4 tracking-widest">Or join with</span>
                    </div>
                </div>

                <Button variant="outline" className="w-full py-4 gap-3 rounded-2xl">
                    <Github size={20} /> GitHub
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-8 font-medium">
                    Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Login</Link>
                </p>
            </Card>
        </div>
    );
}
