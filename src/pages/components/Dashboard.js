import React from 'react'
import styles from "../../styles/dashboard.module.css"
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
import useMediaQuery from '@/hooks/useMediaQuery';

function Dashboard({item,username}) {
    const isMobile = useMediaQuery('(max-width:768px)');
    const user = username?.charAt(0).toUpperCase();
    const email = user+""+username?.slice(1,4);
  return (
    <div>
        <div className={styles.container}>
       <div className={styles.container_fluid}>
           <Navbar logo="Logo_white"/>
           <div className={styles.header_section}>
           <div className={styles.header_text}>
              <h3>Welcome <span style={!isMobile?{"textDecoration":"underline"}:{"textDecoration":""}}>{email}</span></h3>
              <p>Hope you having a good day!</p>
           </div>
           <Slider prompt="Photography" data={item} />
           <Slider prompt="Learning" data={item} />
           </div>
       </div>
       <Footer />
    </div>
    </div>
  )
}

export default Dashboard