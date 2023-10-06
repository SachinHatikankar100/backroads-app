import React from 'react'
import {navLinks,navIcons} from '../Data'
import navImg from '../images/logo.svg'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={navImg} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul class="nav-links" id="nav-links">
            {navLinks.map((navLink)=>{
              return(
                <li id={navLink.id}>
                <a href={navLink.href} class="nav-link">{navLink.text}</a>
              </li>
            )})}
          
        </ul>

        <ul class="nav-icons">
            {navIcons.map((navIcon)=>{
              const {id,href,icon}=navIcon;
              return(
                <li id={id}>
                <a href={href} target="_blank" rel='noreferrer' class="nav-icon"
                  ><i class={icon}></i
                ></a>
              </li>
              );
            })}
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar