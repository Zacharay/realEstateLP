import React from 'react'
import styles from "./Header.scss"
function Navbar() {
  return (
    <div className='navbar'>
        <div class="links-box">
          <a href="#" className='logo-box link'>Rentoo <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          </a>
        
          <a href="#" className='link'>For rent</a>
          <a href="#" className='link'>For rent</a>
          <a href="#" className='link'>About us</a>
          <a href="#" className='link'>Blog</a>
          <a href="#" className='link'>Contact</a>
        </div>
        <div class="btns-box">
          <button class="btn-black ">Login</button>
          <button class="btn-black ">Register</button>
        </div>
    </div>
  )
}

export default Navbar