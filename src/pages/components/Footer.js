import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="footer">
      <div className='footer_content'>
      <div className="social-links">
        <Link href="#"><Image src="/Icons/facebook.svg" alt="Facebook"  width={50} height={50} /></Link>
        <Link href="#"><Image src="/Icons/instagram.svg" alt="Instagram"  width={50} height={50} /></Link>
        <Link href="#"><Image src="/Icons/twitter.svg" alt="Twitter"  width={50} height={50} /></Link>
        <Link href="#"><Image src="/Icons/twitch.svg" alt="twitch"  width={50} height={50} /></Link>
        <Link href="#"><Image src="/Icons/youtube.svg" alt="YouTube"  width={50} height={50} /></Link>
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