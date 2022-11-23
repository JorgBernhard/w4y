import './Header-style.css';
import MenuIcon from '../../assets/icons/menu-white.png';
import { useState } from 'react';

export default function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => setSidebar(!sidebar);

    return (
        <div className="sidebar">
            <div className='nav-icon'>
                <img src={MenuIcon} alt='menu icon' onClick={handleSidebar} />
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <span onClick={handleSidebar}></span>
                <ul className='nav-menu-items' onClick={handleSidebar}>
                        <a href='#main'>Home</a>
                        <a href='#what'>What we do</a>
                        <a href='#projects' >Projects</a>
                        <a href='#contact'>Contact</a>
                    </ul>
            </nav>
        </div>
    );
}
