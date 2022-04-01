import React from 'react'
import { useQuery } from '@apollo/client';
import { PROJECTS } from '../../graphql/query'
import Projectssummary from '../projectsummary/projectssummary';
import Loader from '../Loader/loader';

import {faProjectDiagram} from '@fortawesome/free-solid-svg-icons'


export default function ProjectCards() {
    const {data, loading, errors}= useQuery(PROJECTS,{
        context:{headers:{authorization: typeof window !== 'undefined'?localStorage.getItem("Token"):""}},
        });
    
    if( loading )
        return (<Loader/>)
    if( data )
        return <Projectssummary size={data.projects.length} description="Nombres de projets" Icon= {faProjectDiagram}/>

}
