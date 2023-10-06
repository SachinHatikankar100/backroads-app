import React from 'react'
import { pageLinks,footerLinks } from '../Data'
const Footer = () => {
  return (
    <div>
    <footer class="section footer">
    <ul class="footer-links">
        {pageLinks.map((pageLink)=>{
          return(
            <li id={pageLink.id}>
            <a href={pageLink.href} class="footer-link">{pageLink.text}</a>
          </li>
        )})}
      </ul>
      <ul class="footer-icons">
        {footerLinks.map((footerLink)=>{
          const {id,href,icon} = footerLink;
          return(
            <li id={id}>
            <a href={href} target="_blank" rel="noreferrer" class="footer-icon"
              ><i class={icon}></i
            ></a>
          </li>
          )})}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
    </div>
  )
}

export default Footer