import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const LoginEmail = dynamic(()=>import('../components/Login_email'),{ssr:false})

function Email() {
  return (
    <>
      <Head>
       <title>Customer Login</title>
       <meta name="description" content="This page email enter field which is used for users login credential" />
      </Head>
       <LoginEmail />
    </>
  )
}

export default Email