import React, { useState } from 'react'
import './Navbar.css'
import {FaTimes} from 'react-icons/fa'
import {AiOutlineBars } from 'react-icons/ai'
import {RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
  const togglemenu=()=>{
    setShowMenu(!showMenu)
  }
    return (
    <div>
        <nav className='container navbar'>
            <div className='logo'>
            <FaTimes color="#fff" size={33} />
            <p className='logo-text'>
                <span>Predict</span>
            </p>
            </div>
            <menu>
                <ul className='nav-links' id={showMenu ? 'nav-links-mobile':'nav-links-mobile-hide'}>
                    <li><a href='#' >Home</a></li>
                    <li><a href='"#features"'>Featured Picks</a></li>
                    <li><a href='#subscribe'>Subscribe</a></li>
                    <li><a href='#download'>Dowload</a></li>
                    {/* <li className='nav-btn'><a href=''>Contact</a></li> */}
                    <button className='nav-btn'>Contact</button>
                </ul>
            </menu>
            <div className='menu-icons' onClick={togglemenu}>
            {showMenu 
            ?(<RiCloseLine color="#fff" size={30} /> )
            :( <AiOutlineBars color="#fff" size={27} />)}
            </div>
        </nav>
    </div>
  )
}

export default Navbar