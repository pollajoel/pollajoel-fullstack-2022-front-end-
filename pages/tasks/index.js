import React, {useState} from 'react'
import Projectlisting from '../../components/projectlisting/projectlisting'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./task.module.scss"
import uniqid from 'uniqid'
import Boutonblue from '../../components/bouton/boutonblue/boutonblue'
import Link from 'next/link'
import {useQuery, NetworkStatus} from '@apollo/client'
import {PROJECT_TASKS} from '../../graphql/query'
import Loader from '../../components/Loader/loader'
import WindowsForm from '../../components/windowsFormAddTask/windowsForm'

export default function Tasks({columnsBackenfront, editLink, id}) {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [disabledToedit, setdisabledToedit] = useState(false);
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

      const { loading, error, data, refetch, networkStatus } = useQuery(
        PROJECT_TASKS,
        {
          variables: {projectId:Number.parseInt(id)},
          notifyOnNetworkStatusChange: true,
          context:{headers:{authorization: typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
        },
      );
    

const [boutonaddState, SetboutaddState] = useState(false)
const setAdd= ( ) =>{
    SetboutaddState(true)
}
if (networkStatus === NetworkStatus.refetch) return <div>'Refetching!'</div>
if( error) return <div>An error occur...</div>
if( loading) return(<Loader/>)
  
  if( data )
  return (
    <div className={styles.container__wrapper}>
    
    <WindowsForm show={modalIsOpen} onClose={closeModal} projectId={id}/>

        <div className={styles.created__button}>
            <Boutonblue 
              name="Nouvelle Tâche"
              onClick={e=>openModal(true)}
            />
        </div>
        <div style={{ 'width': '100%'}}>
            <div className={styles.Kanban__board}>
              <Projectlisting 
              
              statutLists={columnsBackenfront} 
              isAdd={boutonaddState}
              editLink = {editLink}
              projectsdata = {data}
              
              />
            </div>
        </div>
       
    </div>
  )
}

Tasks.getInitialProps = async ({ query: { id} }) => {
  const isAdd = false;
  return { isAdd, id}
}

Tasks.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
