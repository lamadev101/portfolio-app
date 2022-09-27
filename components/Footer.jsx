import Image from 'next/image'
import styles from '../styles/Footer.module.css'
import logo from '../public/img/logo.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <Image src={logo} width="200" height="100" alt="" />
        <span>Call Now: +977 9880081993</span>
        <p className={styles.footerText}>Copywrite &copy; 2022. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer