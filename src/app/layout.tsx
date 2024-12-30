import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from './header';
import Footer from './footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Lauryn Robson',
  description: 'This is the official website of Lauryn Robson',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
