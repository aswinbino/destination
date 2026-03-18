import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: {
        default: 'Destination Explorer | Book Your Next Adventure',
        template: '%s | Destination Explorer',
    },
    description: 'Find, book, and explore amazing destinations worldwide',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>
                    <div className="min-h-screen flex flex-col">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
