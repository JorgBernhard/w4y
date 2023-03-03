import './header.css';
import MenuIcon from '../../assets/Menu.png';

import { useState } from 'react';

export default function NavBar() {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='nav-icon'>
                <img className='nav-icon img' src={MenuIcon} alt='menu icon' onClick={handleSidebar} />
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <span onClick={handleSidebar}></span>

                <div className="SideBar-Header">   
                    <ul className='nav-menu-items' onClick={handleSidebar}>
                        <a href='#home'>Home</a>
                        <a href='#me' >Designer</a>
                        <a href='#projects' >Projects</a>
                        <a href='#contact' >Contact</a>
                        </ul>
                </div>
            </nav>
        </>
    );
}
