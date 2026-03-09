import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PromoModal from './PromoModal';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
      <PromoModal />
    </div>
  );
};

export default Layout;
