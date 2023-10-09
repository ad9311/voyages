import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './layout_components/Navbar';

const nunito = Nunito({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Voyages',
  description: 'Share your adventures with the world',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
