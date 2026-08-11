import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SmoothScroll from '@/components/ui/smooth-scroll';
import SiteHeader from '@/components/site/header';
import SiteFooter from '@/components/site/footer';

export const metadata: Metadata = {
  title: {
    default: 'Adventure Axis Incorporated — Roxas City',
    template: '%s | Adventure Axis',
  },
  description:
    'Adventure Axis Incorporated builds and runs entertainment destinations across Roxas City, Capiz — home of Shuffles and BayRox.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Fredoka:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <SmoothScroll>
          <SiteHeader />
          {children}
          <SiteFooter />
          <Toaster />
        </SmoothScroll>
      </body>
    </html>
  );
}
