import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import SmoothScroll from '@/components/ui/smooth-scroll';

export const metadata: Metadata = {
  title: 'Shuffles - Premium Entertainment Hub',
  description: 'Bowling, Billiards, Darts, Karaoke, Bar and Restaurant. Your ultimate nightlife destination.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn('dark')}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased selection:bg-neon-orange selection:text-white">
        <SmoothScroll>
          {children}
          <Toaster />
        </SmoothScroll>
      </body>
    </html>
  );
}
