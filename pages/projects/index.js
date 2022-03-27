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



export default function Projects({columnsBackenfront, editLink, projectID}) {

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

        <div className={styles.created__button}>
          <Link href="projects/create">
            <Boutonblue 
              name="Nouveau projet"
            />
          </Link>
        </div>
        <div>
            <div className={styles.Kanban__board}>
              <Projectlisting 
                statutLists={columnsBackenfront} 
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

  var myHeaders = new Headers();
  myHeaders.append("authorization", `${typeof window !== 'undefined'?localStorage.getItem("Token"):""}`);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
  };
  const res = await fetch("http://localhost:4000/api/v1/projects", requestOptions)
  const Allprojects = await res.text()
  const resstat = await fetch("http://localhost:4000/api/v1/statuts", requestOptions)
  const allstatuts = await resstat.text()
  const allstat = JSON.parse(allstatuts)
  const allproj = JSON.parse(Allprojects);
  
  const init = {}
  var tab = {}
  for( let i=0; i<allstat.length; i++ ) {
    tab[allstat[i].id] ={
      name:allstat[i].name,
      status_color:allstat[i].color,
      items: []
    }
  }

  for( let i =0; i< allproj.length; i++) {
    tab[allproj[i].statutId].items.push({name:allproj[i].title,id:allproj[i].id+"" })
  }


  console.log( tab )
  //console.log( dataStatuts )


  const Projects =[
    {name:"editor tab", id:"Editor", isEditor:true},
    {name:"Progression", id:"test4"},
    {name:"Progression", id:"test9"},
    {name:"Developpement web", id:"test10"},
    {name:"Developpement web", id:"test5"},
    {name:"Developpement web", id:"test15"},
   

  ];

    const isAdd = false;
    const columnsBackenfront = tab
  return {columnsBackenfront, isAdd, editLink, projectID}
}

Projects.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
