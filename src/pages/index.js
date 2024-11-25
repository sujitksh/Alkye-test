import dynamic from "next/dynamic";
import styles from "../styles/home.module.css"
import Head from "next/head";

const LoginEmail = dynamic(()=>import("./components/Login_email"),{ssr:false})

export default function Home() {
  
  return (
    <>
    <Head>
       <title>Home page</title>
       <meta name="description" content="This page email enter field which is used for users login credential" />
    </Head>
    <div className={styles.container}>
      <LoginEmail />
    </div>
    </>
  );
}
