import React from 'react'
import './navbar.css'
import Logo from '../../assets/hind-loogo.png'
import { useState } from 'react'
const Navbar = () => {
const [activeNav, setActiveNav] = useState('#')
  return (
    <>
    <div className="navbar">
			<div className="logo">
				<img src={Logo} alt="logo"/>
			</div>
			<ul>
		    <li onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><a href="#home">Home</a></li>
			<li onClick={() => setActiveNav('#projact')} className={activeNav === '#projact' ? 'active' : ''}><a href="#projact">Projact</a></li>
			<li onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><a href="#skills">Skills</a></li>
			<li onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><a href="#contact">Contact</a></li>
			</ul>
		</div>
    </>
  )
}

export default Navbar