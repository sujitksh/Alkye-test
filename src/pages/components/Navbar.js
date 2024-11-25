import React from 'react'
import styles from "../../styles/navbar.module.css"
import Image from 'next/image'
import useMediaQuery from '@/hooks/useMediaQuery';

function Navbar({logo}) {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <div className={styles.navbar_section}>
        <Image className={styles.logo} src={`/Logo/${logo}.${isMobile?'png':'svg'}`} alt="logo" width={isMobile?64:127} height={isMobile?29:59}  onError={(e) => console.error('Image failed to load', e)}/>
      </div>
  )
}

export default Navbar