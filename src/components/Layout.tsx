import { Outlet } from 'react-router-dom';
import { Header, Footer } from './Sections';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-on-surface bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
