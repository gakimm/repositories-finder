import './globals.css';
import Navbar from '../components/Navbar';
import { SearchProvider } from '../lib/SearchContext';

export const metadata = {
  title: 'Repositories Finder',
  description: 'Explore GitHub repos by username',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <SearchProvider> {/* ⬅️ Bungkus semuanya */}
        <Navbar />
        <main style={{ paddingTop:'100px' }}>{children}</main>
      </SearchProvider>
      </body>
    </html>
  );
}
