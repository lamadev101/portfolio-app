import Image from 'next/image'
import styles from '../styles/Skill.module.css'
import {skills} from '.././pages/api/data.js';
import { useState } from 'react';

const Skill = () => {
  const [indexVal, setIndexVal] = useState(0);
  return (
    <div className="container" id='skill'>
      <h1>Skills & Experience</h1>
      <div className={styles.wrapper}>
        <div className={styles.badges}>
          {["Web Development", "UI/UX Design", "Graphics Design"].map((item, index)=>(
              <span className={indexVal === index ? styles.badgeActive : styles.badgeItem } onMouseOver={()=>setIndexVal(index)} key={index}>{item}</span>
          ))}
        </div>
        <div className={styles.skills}>
          <div className={styles.skill}>
            {skills[indexVal].tools.map((item, index)=>(
              <div className={styles.image} key={index}>
                <Image  src={item} alt="" width="70px" height="70px" objectFit="cover" />
              </div>
            ))}
          </div>
          <ul className={styles.experience}>
            {skills[indexVal].desc.map((item,idx)=>(
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Skill