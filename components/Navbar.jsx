import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import logo from '../public/img/logo.svg';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.brand}>
          <Image src={logo} width="100" height="60" />
        </div>
        <ul className={styles.items}>
          <li className={styles.listItem}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.listItem}>
            <a href="#about">About Me</a>
          </li>
          <li className={styles.listItem}>
            <a href="#work">My Works</a>
          </li>
          <li className={styles.listItem}>
            <a href="#skill">Skills & Experience</a>
          </li>
          <li className={styles.listItem}>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
