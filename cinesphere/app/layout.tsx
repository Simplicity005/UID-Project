import './globals.css';
import Navbar from '../components/layouts/Navbar';

export const metadata = {
  title: 'Cinesphere',
  description: 'Discover your next favorite movie.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}