import Image from 'next/image';
import styles from '../styles/Goup.module.css'
import uparrow from '.././public/img/uparrow.png';
import { useEffect, useState } from 'react';

const Goup = () => {    
    const [topLink, setTopLink] = useState(false);

    const topScroll = ()=>{
        const scrollHeight = window.scrollY;
        if(scrollHeight >= 100)
            setTopLink(true);
        else
            setTopLink(false);
    }
    useEffect(()=>{
        window.addEventListener("scroll", topScroll);
    }, [])

  return (
    <div className={topLink ? styles.showTop: styles.hideTop}>
      <Image src={uparrow} width="100%" height="100%" objectFit='cover' onClick={()=>window.scroll(0,0)} />
    </div>
  );
}

export default Goup;
