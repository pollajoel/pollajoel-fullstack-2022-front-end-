import React, {useEffect, useState} from 'react'
import Searchbar from '../searchebar/searchbar'
import styles from './loginmessage.module.scss'
import { GET_ME } from "../../graphql/query"
import { useQuery } from "@apollo/client";

export default function Loginmessage() {
  const [windowsReady, Setwindowsready]= useState(false);
  const  {data, loading, errors } = useQuery(GET_ME,{
    context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
  })
  
  useEffect(()=>{
    Setwindowsready(true)
    },[])
    if (loading) return (<>loading...</>);
    if(errors) return null;
    console.log(data);
  return (
    <div>
      <div className={styles.loginmessage__wrapper}>
          <div className={styles.name__block}>
              <h1>Bienvenu 
                  {windowsReady?<span>  {data.getMe.firstname}</span>:null}
              </h1>
              <p>Faisons de notre mieux aujourd'hui</p>
          </div>
          <div>
              <Searchbar></Searchbar>
          </div>
      </div>
    </div>
  )
}
