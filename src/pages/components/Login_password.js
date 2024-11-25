import React, { useState,useRef } from 'react'
import { useRouter } from 'next/router';
import styles from "../../styles/login.module.css"
import Navbar from './Navbar';
import Footer from './Footer';
import useMediaQuery from '@/hooks/useMediaQuery';
import { login } from '@/utils/api';
import Image from 'next/image';

function LoginPassword() {
  const passwordRef = useRef(null);
  const isMobile = useMediaQuery('(max-width:768px)');
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const { email } = router.query;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      document.cookie = `token=${data.token}; path=/`; // Store the token in cookies
      document.cookie = `username=${email}; path=/`; // Store the username in cookies
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };
  const showPassword = ()=>{
    if(passwordRef.current.type == "password"){
      passwordRef.current.type = "text";
    }else{
      passwordRef.current.type = "password";
    }
  }
  return (
    <>
     <div className={styles.form_container}>
      <Navbar logo="Logo"/>
      <div className={styles.header_section}>
      <div className={styles.content_section}>
        <p className={styles.text_content}>STEP 2</p>
        <h1>Create an account to continue</h1>
        <p className={styles.text_content}>You’ll be able to log in to Dingoo with this email address and password.</p>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.password_control}>
          <p>Enter a password to create your account with </p>
          <input type="password" className={styles.input} ref={passwordRef} placeholder="Choose a password" onChange={(e)=>setPassword(e.target.value)} required />
          {
            !isMobile && <Image className={styles.eye_icon} onClick={showPassword} src={`/Icons/eye-off.svg`} alt="eye icon" width={24} height={24} />
          }
          
        </div>
        <div className={styles.continue_button}>
          <p className={styles.text_password}>Use a minimum of 6 characters (case sensitive) with at least one number or special character.</p>
          <button type="submit" className={styles.agree_button}>{isMobile?"Continue":"Agree & Continue"}</button>
        </div>
      </form>
      </div>
        <p className={styles.password_content}>Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo.You can change your communication preferences anytime.We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies.By clicking Agree & Continue, you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.</p>
    </div>
    <Footer />
    </>
  )
}

export default LoginPassword