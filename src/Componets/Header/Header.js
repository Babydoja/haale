import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='container'>
        <div>
            <p>TRAINING STUDIO</p>
        </div>
        <div className='navbar'>
            <ul>
                {/* <li><Link to=''>Home</Link></li>
                <li><Link to='/courses'>Courses</Link></li>
                <li><Link to='/blog'>BLOG</Link></li>
                <li><Link to='/contact'>Contact</Link></li> */}
                <li><Link to='/'>home</Link></li>
                <li><Link to='/courses'>courses</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
       
    </div>
   
    </>
  )
}

export default Header