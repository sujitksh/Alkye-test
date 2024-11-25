import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

function Footer() {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <footer className="footer">
      <div className='footer_content'>
      <div className="social-links">
        <Link href="#"><Image src={`/Icons/facebook.${isMobile?'png':'svg'}`} alt="Facebook"  width={50} height={50} /></Link>
        <Link href="#"><Image src={`/Icons/instagram.${isMobile?'png':'svg'}`} alt="Instagram"  width={50} height={50} /></Link>
        <Link href="#"><Image src={`/Icons/twitter.${isMobile?'png':'svg'}`} alt="Twitter"  width={50} height={50} /></Link>
        <Link href="#"><Image src={`/Icons/twitch.${isMobile?'png':'svg'}`} alt="twitch"  width={50} height={50} /></Link>
        <Link href="#"><Image src={`/Icons/youtube.${isMobile?'png':'svg'}`} alt="YouTube"  width={50} height={50} /></Link>
      </div>
      <ul className="footer-links">
        <li className='item1'><Link href="#">Privacy Policy</Link></li> 
        <li className='item2'><Link href="#">Contact Us</Link></li>
        <li className='item3'><Link href="#">Cookie Preferences</Link></li>
        <li className='item4'><Link href="#">Corporate Information</Link></li>
        <li className='item5'><Link href="#">Privacy Policy</Link></li>
        <li className='item6'><Link href="#">Contact Us</Link></li>
        <li className='item7'><Link href="#">Cookie Preferences</Link></li>
        <li className='item8'><Link href="#">Corporate Information</Link></li>
      </ul>
      <p className="company_name"><span style={{"color":"gray"}}>©</span>&nbsp;Alkye Test</p>
      </div>
    </footer>
  )
}
export default Footer