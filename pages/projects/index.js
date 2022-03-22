import React, {useState} from 'react'
import Projectlisting from '../../components/projectlisting/projectlisting'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./projects.module.scss"
import uniqid from 'uniqid'
import Boutonblue from '../../components/bouton/boutonblue/boutonblue'
import Link from 'next/link'

export default function Projects({columnsBackenfront, editLink}) {
  
const [boutonaddState, SetboutaddState] = useState(false)
const setAdd= ( ) =>{
    SetboutaddState(true)
}
  
  return (
    <div className={styles.container__wrapper}>

        <div className={styles.created__button}>
          <Link href={"projects/create"}>
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
                
            />
            </div>
        </div>
       
    </div>
  )
}

Projects.getInitialProps = async (ctx) => {
  const editLink ="/projects/edit"
  const Projects =[
    {name:"editor tab", id:"Editor", isEditor:true},
    {name:"Progression", id:"test4"},
    {name:"Progression", id:"test9"},
    {name:"Developpement web", id:"test10"},
    {name:"Developpement web", id:"test5"},
    {name:"Developpement web", id:"test15"},
   

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
            items:[{name:"Developpement web", id:"test18"}],
            status_color:"yellow"
          },
          [uniqid()]:
          {
            name:"Done",
            items:[{name:"Developpement web", id:"test20"}],
            status_color:"blue"
          },
          [uniqid()]:
          {
            name:"Done",
            items:[{name:"Developpement web", id:"test20"}],
            status_color:"#D0C4DF"
          },
          [uniqid()]:
          {
            name:"Done",
            items:[{name:"Developpement web", id:"test20"}],
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
  return {columnsBackenfront, isAdd, editLink}
}

Projects.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
