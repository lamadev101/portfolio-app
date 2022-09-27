import React from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        Copywrite &copy; 2022 <a href="#home">KGT</a>. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer