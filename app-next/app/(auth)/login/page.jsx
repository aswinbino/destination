import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { Mail, Lock, Github } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-background relative overflow-hidden transition-colors duration-300">
            {/* Background Decorations */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[120px] opacity-50"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-[120px] opacity-30"></div>

            <Card className="w-full max-w-md p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-border/50 bg-card/80 backdrop-blur-xl relative z-10">
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/30">
                        <Lock className="text-primary-foreground" size={32} />
                    </div>
                    <h1 className="text-3xl font-black text-foreground mb-2">Welcome Back</h1>
                    <p className="text-muted-foreground font-medium">Log in to your explorer account</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest ml-1">Email</label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <Input type="email" placeholder="name@example.com" className="pl-12" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Password</label>
                            <Link href="#" className="text-xs font-bold text-primary">Forgot?</Link>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                            <Input type="password" placeholder="••••••••" className="pl-12" />
                        </div>
                    </div>
                    <Button size="lg" className="w-full py-4 text-lg">Login</Button>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase font-bold text-muted-foreground">
                        <span className="bg-card px-4 tracking-widest">Or continue with</span>
                    </div>
                </div>

                <Button variant="outline" className="w-full py-4 gap-3 rounded-2xl">
                    <Github size={20} /> GitHub
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-8 font-medium">
                    Don't have an account? <Link href="/register" className="text-primary font-bold hover:underline">Register</Link>
                </p>
            </Card>
        </div>
    );
}
