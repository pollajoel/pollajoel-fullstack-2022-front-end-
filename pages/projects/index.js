import React from 'react'
import Boutonblue from '../../components/bouton/boutonblue/boutonblue'
import Projectlisting from '../../components/projectlisting/projectlisting'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./projects.module.scss"
import uniqid from 'uniqid'


export default function Projects({columnsBackenfront}) {
  return (
    <div className={styles.container__wrapper}>
        <Projectlisting statutLists={columnsBackenfront}/>
    </div>
  )
}

Projects.getInitialProps = async (ctx) => {

  const Projects =[
    {name:"editor tab", id:"Editor", isEditor:true},
    {name:"Progression", id:"test4"},
    {name:"Progression", id:"test9"},
    {name:"Developpement web", id:"test10"},
    {name:"Developpement web", id:"test5"},
    {name:"Developpement web", id:"test15"},
   

  ];

  

  const columnsBackenfront =
    {
          [uniqid()]:
          {
            name:"To do",
            items:Projects
          },
          [uniqid()]:
          {
            name:"Done",
            items:[]
          },
          [uniqid()]:
          {
            name:"Done",
            items:[]
          }

          
    }
   console.log( columnsBackenfront )
  return {columnsBackenfront}
}

Projects.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
