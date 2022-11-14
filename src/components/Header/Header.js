import React from 'react'
import styles from "./Header.scss"
import Navbar from './Navbar'
function Header() {
  return (
    <header className='header'>
        
        <Navbar />
        <h1>Discover property more easly</h1>
    </header>
  )
}

export default Header