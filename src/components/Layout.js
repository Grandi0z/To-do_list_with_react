import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { AuthProvider } from '../context/AuthContext';

const Layout = () => (
  <div className="wrapper">
    <AuthProvider>
      <Navbar />
      <Outlet />
      <>text</>
    </AuthProvider>
  </div>
);
export default Layout;
