import Image from 'next/image'
import styles from '.././styles/Work.module.css'
import {work_category, work} from '.././pages/api/data.js'
import { useState } from 'react'

const Work = () => {
  const [btnValue, setBtnValue] = useState('react');
  console.log(btnValue);

  const projectFilter = work.filter(({key})=>{
    return key === btnValue;
  })

  return (
    <div className="container" id='work'>
      <div className={styles.wrapper}>
        <h1>My Works</h1>
        <div className={styles.list}>
          {work_category.map((item, index)=>(
            <div className={btnValue === item.key ? styles.activeBtn : styles.btn} key={index} onClick={()=>setBtnValue(item.key)}>
              <Image className={styles.img} src={item.icon} width="20" height="20" object-fit="cover" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        <div className={styles.work}>
        {projectFilter?.map((item, index) =>{
            return (
              <div className={styles.thumbnail} key={index}>
                <Image src={item.img} width="500" height="300" object-fit="cover" alt="" />
                <div className={styles.info}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href={item.github} target="blank" className={styles.github}>{item.github}</a> <br />
                  <a href={item.link} target="blank">
                    <button className={styles.button}>Explore project...</button>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Work