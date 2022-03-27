import React, {useEffect, useState} from  'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { useQuery } from "@apollo/client";
import {GET_ME} from '../../graphql/query'


export default function LoginUsername(props) {

    const [windowsready, SetwindowsReady]=useState(false)
    const  {data, loading, errors } = useQuery(GET_ME,{
        context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
      })

    useEffect(()=>{
        SetwindowsReady(true)
    },[])

  if( loading) return(<span>is loading...</span>)
  if( data )
  return (<span>{windowsready?<>{data.getMe.firstname}</>:null}<FontAwesomeIcon icon={faChevronDown} size="1x"/></span>)
}
