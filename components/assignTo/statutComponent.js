import React from 'react'
import InpuSelect from '../form/select/select';
import {STATUS} from '../../graphql/query'
import {useQuery} from '@apollo/client'
export default function StatutComponent(props) {

    const {data, loading, errors} = useQuery(STATUS,{
        context:{headers:{authorization: typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
      }) 

  
  if( loading) return(<div>Loading...</div>)
  if( data )
  return (
    <div>
        <InpuSelect
            Options = {data.statuts}
            label={props.label}
            defautValue={`${data.statuts.find(item=>item.id ==props.defautValue)?.name?data.statuts.find(item=>item.id ==props.defautValue)?.name:""}`}
            description={`${props.description}`}
            statutComp = {true}
            onChange={(event) => props.onChange(event)}
        />
    </div>
  )
}
