import Image from 'next/image'
import styles from '.././styles/Contact.module.css';
import {contact} from '.././pages/api/data.js'
import email from '.././public/img/contact/email.png'
import phone from '.././public/img/contact/phone.png'


const Contact = () => {
  return (
    <div className="container" id='contact'>
      <h1>Hire Me</h1>
      <div className={styles.wrapper}>
        <div className={styles.mailPhone}>
          <span className={styles.badge}>
            <Image src={phone} width="20" height="20" object-fit="fill" />
            +977 9880081993
          </span>
          <span className={styles.badge}>
            <Image src={email} width="20" height="20" object-fit="fill" />            
            ghisingkarma740@gmail.com
          </span>
        </div>
        <div className={styles.info}>
          <div className={styles.card}>
            {contact.map((con, index)=>(
              <div className={styles.contactList} key={index}>
                <Image src={con.logo} width="40" height="40" object-fit="cover" alt='' />
                <a href={con.link} className={styles.link} target="_blank">{con.link}</a>
              </div>
            ))}
          </div>
          <div className={styles.card}>
            <form action="" className={styles.form}>
              <input type="text" placeholder='Full Name' className={styles.input} />
              <input type="email" placeholder='Email' className={styles.input} />
              <input type="number" placeholder='Phone no.' className={styles.input} />
              <input type="text" placeholder='Organization' className={styles.input} />
              <textarea name="msg" id="" placeholder='Message' className={styles.textarea} />
              <input type="submit" value="SUBMIT" className={styles.button} />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact