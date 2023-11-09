import React from 'react'
import './Header.css'
import {BsMouse} from 'react-icons/bs'
const Header = () => {
  return (
    <section id='header'>
      <div className='container header'>
         <div className="header-left" data-aos="fade-right">
          <h1>
            <span>English Fantasy</span>
            <span>cross-platform secure</span>
            <span> Fantasy League</span>
          </h1>
          <p className="u-text-small">
            You can join and perticipate in our special Fantacy leages
          </p>
          <div>
            <button className='btn-dark'>Join FPL</button>
            <button className='btn-light'>Join Uefa League</button>
          </div>
          </div>

      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  )
}

export default Header