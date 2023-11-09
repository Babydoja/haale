import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {AiOutlineBars } from 'react-icons/ai'
import {RiCloseLine } from 'react-icons/ri'
import './Work.css'
const Work = () => {
  return (
    <div>
        <nav className='containers navbars'>
            <div className='logos'>
            <FaTimes  size={33} />
            <p className='logo-text'>
                <span>Predict</span>
            </p>
            </div>
            <menu>
                <ul className='nav-links1' >
                    <li><a href='' >Home</a></li>
                    <li><a href=''>Featured Picks</a></li>
                    <li><a href=''>Subscribe</a></li>
                    <li><a href=''>Dowload</a></li>
                    {/* <li className='nav-btn'><a href=''>Contact</a></li> */}
                    <button className='nav-btn1'>Contact</button>
                </ul>
            </menu>
            <div className='menu-icons1'>
            
            <RiCloseLine size={30} /> 
            <AiOutlineBars  size={27} />
            </div>
        </nav>
    </div>
  )
}

export default Work