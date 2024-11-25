import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
const LoginPassword = dynamic(()=>import('../components/Login_password'),{ssr:false})


function Password() {
  return (
    <>
       <Head>
       <title>Customer Login</title>
       <meta name="description" content="This page password enter field which is used for users login credential" />
      </Head>
      <LoginPassword />
    </>
  )
}

export default Password 