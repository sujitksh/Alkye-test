import Dashboard from "../components/Dashboard";
import Head from "next/head";
function dashboard(props) {
   
  return (
    <>
     <Head>
       <title>Dashboard page</title>
       <meta name="description" content="This page all Users Artical list,here show section wise artical list" />
    </Head>
    <Dashboard {...props} />
    </>
  )
}

export default dashboard;

export async function getServerSideProps(context){
  const { req } = context;
  const token = req.cookies.token;
  const username = req.cookies.username?req.cookies.username:"Demo"
  const res = await fetch('https://untitled-twkmuar27a-uc.a.run.app/api', {
    headers: {
      Authorization: `Token ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error('Unauthorized');
  }
  const data = await res.json();
  
    return{
      props:{
        item:data,
        username
      }
    }
}