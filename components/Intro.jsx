import Image from 'next/image'
import styles from '../styles/Intro.module.css'
import profile from '.././public/img/profile.jpg'

const Intro = () => {
  return (
    <div className="container" id='home'>
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <Image src={profile} width="500" height="500" object-fit="cover" alt='porfile image' />
        </div>
        <div className={styles.intro}>
          <span>Hi, there <br /> I&apos;m </span>
          <h2 className={styles.title}>Karma Lama <br /> Ghising</h2>
          <ul className={styles.items}>
            <li>Web Developer</li>
            <li>UX/UI Designer</li>
            <li>Graphic Designer</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Intro