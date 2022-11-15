import React from 'react'
import styles from "./Header.scss"
import Navbar from './Navbar'
function Header() {
  return (
    <header className='header'>
        
        <Navbar />
        <div className='text-box'>
            <h1>Discover property more easly</h1>
            <h3>Rentoo helps people find their dream homes</h3>
        </div>
    </header>
  )
}

export default Header

