import React, { useState } from 'react'
import styles from "../../styles/login.module.css"
import Navbar from './Navbar';
import Footer from './Footer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useMediaQuery from '@/hooks/useMediaQuery';

function LoginEmail() {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
 const router = useRouter();
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {    
      if (username) {
        router.push(`/login/password?email=${encodeURIComponent(username)}`);
      } else {
        setError('Invalid email');
      }
    } catch (err) {
      
      setError('Something went wrong. Please try again.');
    }
  };
  return (
    <>
    <div className={styles.form_container}>
      <Navbar logo="Logo"/>
      <div className={styles.header_section}>
      <div className={styles.content_section}>
        <p className={styles.text_content}>STEP 1</p>
        <h1>Enter your email address to continue</h1>
        <p className={styles.text_content}>Log in to your account. If you don’t have one, you will be prompted to create one.</p>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className={styles.form} onSubmit={handleEmailSubmit}>
        
        <input type="text" placeholder="Username" className={styles.input} required onChange={(e)=>setUsername(e.target.value)}/>
      
        <div className={styles.continue_button}>
          {isMobile && <Link href="#">Have an account?</Link>}
          <button type="submit">Continue</button>
        </div>
      </form>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default LoginEmail