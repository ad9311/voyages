import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
import Navbar from './layout_components/Navbar';

const onest = Onest({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Voyages',
  description: 'Share your adventures with the world',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={onest.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
