import React, {useState} from 'react'
import Projectlisting from '../../components/projectlisting/projectlisting'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./task.module.scss"
import {useQuery, NetworkStatus} from '@apollo/client'
import {PROJECT_TASKS} from '../../graphql/query'
import Loader from '../../components/Loader/loader'
import WindowsForm from '../../components/windowsFormAddTask/windowsForm'

export default function Tasks({columnsBackenfront, editLink, id}) {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [disabledToedit, setdisabledToedit] = useState(false);
  const [StatutId, SetstatutId]= useState(0);

  
  function openModal(disabledValue, statutId) {
    setdisabledToedit(disabledValue)
    SetstatutId( statutId );
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
    <WindowsForm show={modalIsOpen} onClose={closeModal} projectId={id} StatutId={StatutId}/>
        <div style={{ 'width': '100%'}}>
            <div className={styles.Kanban__board}>
              <Projectlisting 
              onClick={e=>openModal(true)}
              statutLists={columnsBackenfront} 
              isAdd={boutonaddState}
              editLink = {editLink}
              projectsdata = {data}
              StatutId= {StatutId}
              SetstatutId = {SetstatutId}
              setIsOpen={setIsOpen}
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
