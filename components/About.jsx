import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className="container" id='about'>
      <h1>About Me</h1>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h3>Personal Info</h3>
          <div className={styles.box}>
            <ul className={styles.leftItems}>
              <li>Full Name: </li>
              <li>Perm. Address: </li>
              <li>Temp. Address: </li>
            </ul>
            <ul className={styles.rightItems}>
              <li>Karma Lama Ghisng</li>
              <li>Shailung-1, Dolakha</li>
              <li>Suraybinayak-8, Bhaktapur</li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Contact Details</h3>
          <div className={styles.box}>
            <ul className={styles.leftItems}>
              <li>Mobile no.: </li>
              <li>Email Address: </li>
              <li>Viber: </li>
              <li>LinkedIn: </li>
            </ul>
            <ul className={styles.rightItems}>
              <li>+977 9880081993</li>
              <li>ghisingkarma740@gmail.com</li>
              <li>9880081993</li>
              <li>linkedin.com/karmalama</li>
            </ul>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Educational Background</h3>
          <div className={styles.box}>
            <ul className={styles.leftItems}>
              <li>Bachelor: </li>
              <li>+2: </li>
              <li>School: </li>
            </ul>
            <ul className={styles.rightItems}>
              <li>Computer Science and Information Technology in TU</li>
              <li>Science in Arunim Higher Scondary School</li>
              <li>Kallabari Secondary School</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About