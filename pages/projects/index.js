import React, {useState, useEffect} from 'react'
import Projectlisting from '../../components/projectlisting/projectlisting'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./projects.module.scss"
import uniqid from 'uniqid'
import Boutonblue from '../../components/bouton/boutonblue/boutonblue'
import Link from 'next/link'
import {TASKS} from '../../graphql/query'
import {useQuery} from '@apollo/client'
import Loader from '../../components/Loader/loader'
import WindowsFormProject from '../../components/windowsFormProject/WindowsFormProject'


export default function Projects({ editLink, projectID}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [disabledToedit, setdisabledToedit] = useState(false);
const [windowsReady, setWindowsReady] = useState(false)
const [boutonaddState, SetboutaddState] = useState(false)
const [StatuId, SetstatutId]= useState("tt");

function openModal(disabledValue) {
  setdisabledToedit(disabledValue)
  setIsOpen(true);
}

function closeModal() {
  setIsOpen(false);
}

function afterOpenModal() {
  // references are now sync'd and can be accessed.
  subtitle.style.color = '#f00';
}



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
       <WindowsFormProject show={modalIsOpen} onClose={closeModal} StatuId={StatuId}/>
        <div>
            <div className={styles.Kanban__board}>
              <Projectlisting 
                editLink = { editLink}
                projectID = {projectID}
                tasks = {`${data.tasks}`}
                onClick={e=>openModal(true)}
                StatuId= {StatuId}
                projectsdata={data}
                StatutId= {StatuId}
                SetstatutId = {SetstatutId}
                setIsOpen={setIsOpen}
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
