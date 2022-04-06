import React from 'react'
import Head from 'next/head'
export default function Header(props) {
  return (
    <Head>
        <title>{props.title}</title>
        <meta 
            name="description" 
            content="Generated by create next app" 
            charSet="utf-8"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
