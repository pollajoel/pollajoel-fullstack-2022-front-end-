import React from 'react'
import {USERS} from '../../graphql/query'
import {faUserAlt} from '@fortawesome/free-solid-svg-icons'
import {useQuery} from '@apollo/client'
import Loader from '../Loader/loader';
import Projectssummary from '../projectsummary/projectssummary';
export default function Userscard() {
    const {data, loading, errors}= useQuery(USERS,{
        context:{headers:{authorization: typeof window !== 'undefined'?localStorage.getItem("Token"):""}},
        });

   if( data )
        return (<Projectssummary size={data?.users?.length} Icon={faUserAlt}
        description="Nombres d'utilisateurs"
        />)
  if( loading )
        return <Loader/>
  if( errors )
            return <div>errors...</div>
}
