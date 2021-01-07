import React, { Fragment, useState } from 'react'
import { Link } from "react-scroll"
import '../css/header.css'

export default function Header() {
  const [isNavCollapse, setNavCollapse] = useState(true)
  const handleNavCollapse = () => setNavCollapse(!isNavCollapse)
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light custom-header fixed-top">
        <Link
          className='navbar-brand text-white'
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={900}
        >Bienvenido</Link>
        <button className="navbar-toggler custom-toggler" type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapse ? true : false}
          onClick={handleNavCollapse}
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapse ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className='nav-link text-white'
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-280}
                duration={900}
              >Acerca de mi</Link>
            </li>
            <li className="nav-item">
              <Link
                className='nav-link text-white'
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
              >Portafolio</Link>
            </li>
            <li className="nav-item">
              <Link
                className='nav-link text-white'
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
              >Habilidades</Link>
            </li>
            <li className="nav-item">
              <Link
                className='nav-link text-white'
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={900}
              >Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}