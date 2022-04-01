import React from 'react'
import {TASKS} from '../../graphql/query'
import {useQuery} from '@apollo/client'
import Loader from '../Loader/loader';
import Projectssummary from '../projectsummary/projectssummary';
import {faAd} from '@fortawesome/free-solid-svg-icons'

export default function Taskscards() {
    const {data, loading, errors}= useQuery(TASKS,{
        context:{headers:{authorization: typeof window !== 'undefined'?localStorage.getItem("Token"):""}},
        });

  if( data )
        return (<Projectssummary size={data.tasks.length} description="nombres de tâches" Icon={faAd}/>)
  if( loading )
        return <Loader/>
}
