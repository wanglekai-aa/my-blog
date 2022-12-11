import { NextPage } from 'next';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout: NextPage = ({ children }) => {
  return (
    <div className="page-index">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
