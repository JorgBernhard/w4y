import Logo from '../assets/Logo-w4y.png';

import { Outlet, Link } from "react-router-dom";
import '../css/layout.css';
const Layout = () => {
  return (
    <>
      <nav className="HeaderBar">
        <div className='LayoutContainer'>
        <img className="Logo" src={Logo} alt="logo" />
        <div className="Links">
          
            <Link className="LayoutMain" to="/">Main</Link>
          
            <Link className="LayoutWork" to="/work">Work</Link>
         
            <Link className="LayoutUs" to="/us">Us</Link>
         
            <Link className="LayoutContact" to="/contact">Contact</Link>
            </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;