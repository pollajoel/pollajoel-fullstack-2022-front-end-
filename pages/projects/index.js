import React, {useState, useEffect} from 'react'
import Projectlisting from '../../components/projectlisting/projectlisting'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./projects.module.scss"
import uniqid from 'uniqid'
import Boutonblue from '../../components/bouton/boutonblue/boutonblue'
import Link from 'next/link'
import {PROJECTS, STATUS, TASKS} from '../../graphql/query'
import {useQuery} from '@apollo/client'
import Loader from '../../components/Loader/loader'



export default function Projects({ editLink, projectID}) {

const [windowsReady, setWindowsReady] = useState(false)
const [boutonaddState, SetboutaddState] = useState(false)
const {data, loading, errors} = useQuery(TASKS,{
  context:{headers:{authorization: typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
})

useEffect(() => {
  setWindowsReady(true)
},[])
const setAdd= ( ) =>{
    SetboutaddState(true)
}
  
  if(loading) return(<Loader/>)
  if(data)
  return (
    <div className={styles.container__wrapper}>
        <div>
            <div className={styles.Kanban__board}>
              <Projectlisting 
                editLink = { editLink}
                projectID = {projectID}
                tasks = {`${data.tasks}`}
            />
            </div>
        </div>
       
    </div>
  )
}

Projects.getInitialProps = async (ctx) => {
  const editLink ="/projects/edit"
  const projectID = 1
    const isAdd = false;
  return {isAdd, editLink, projectID}
}

Projects.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
