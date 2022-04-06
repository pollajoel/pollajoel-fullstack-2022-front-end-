import React, {useEffect, useState} from 'react'
import InpuSelect from '../form/select/select';
import {USERS} from '../../graphql/query'
import {useQuery} from '@apollo/client'
export default function AssignTo(props) {

    const [userdata, SetUserdata] = useState([])
    useEffect(()=>{
        
    },[])

    const {data, loading, errors} = useQuery(USERS,{
        context:{headers:{authorization: typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
      }) 

  
  if( loading) return(<div>Loading...</div>)
  if( data )
  return (
    <div>
        <InpuSelect
            Options = {data.users}
            label={props.label}
            name={props.name}
            defautValue={`${data.users.find(item=>item.id==props.defautValue)?.name?data.users.find(item=>item.id==props.defautValue)?.name:""}`}
            description={`${props.description}`}
            assignto={true}
            onChange={(event) => props.onChange(event)}
        />
    </div>
  )
}
