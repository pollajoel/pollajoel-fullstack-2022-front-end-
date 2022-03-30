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

export default function Tasks({columnsBackenfront, editLink, id}) {

   
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
if (networkStatus === NetworkStatus.refetch) return 'Refetching!'
  if( error) return <div>An error occur...</div>

  if( loading) return(<Loader/>)
  
  if( data )
  return (
    <div className={styles.container__wrapper}>

        <div className={styles.created__button}>
          <Link href={"tasks/create"}>
            <Boutonblue 
              name="Créer une tâche"
            />
          </Link>
        </div>
        <div>
            <div className={styles.Kanban__board}>
              <Projectlisting 
              
              statutLists={columnsBackenfront} 
              isAdd={boutonaddState}
              editLink = {editLink}
              
              />
            </div>
        </div>
       
    </div>
  )
}

Tasks.getInitialProps = async ({ query: { id} }) => {

  const editLink ="/tasks/edit"
  const Projects =[
    {name:"editor tab", id:"Editor", isEditor:true},
    {name:"Progression", id:"test4"},
    {name:"Progression", id:"test9"},
    
   
   

  ];

  const isAdd = false;

  const columnsBackenfront =
    {
          [uniqid()]:
          {
            name:"To do",
            items:Projects,
            status_color:"green"
          },
          [uniqid()]:
          {
            name:"Done",
            items:[],
            status_color:"green"
          },
          [uniqid()]:
          {
            name:"Done",
            items:[],
            status_color:"green"
          },
          [uniqid()]:
          {
            name:"Done",
            items:[],
            status_color:"#D0C4DF"
          },
          [uniqid()]:
          {
            name:"Done",
            items:[{name:"Developpement web", id:"test20"}],
            status_color:"#D0C4DF"
          },
          

          
    }
   console.log( columnsBackenfront )
  return {columnsBackenfront, isAdd, id}
}

Tasks.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
