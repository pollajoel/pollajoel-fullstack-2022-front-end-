import React, {useState} from 'react'
import styles from './projectcards.module.scss'
import Windows from '../windows/windows'
import 
import Link from 'next/dist/client/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye, faEdit, faTrashAlt, faTasks} from '@fortawesome/free-solid-svg-icons'
import 'balloon-css';
import {useMutation} from '@apollo/client'
import { DELETE_TASK, DELETE_PROJECT} from '../../graphql/mutation'
import {useRouter} from 'next/router'
export default function Projectcards(props) {
 const router = useRouter()
  const [deleteTask] = useMutation(DELETE_TASK,{
    onCompleted: (data)=>{
      router.reload()
    },
    onError: (errors)=>{
      console.log( errors)
    }
  })

  const [deleteProject] = useMutation(DELETE_PROJECT,{
    onCompleted: (data)=>{
      router.reload()
    },
    onError: (errors)=>{
      console.log( errors)
    }
  })
  
  const [modalIsOpen, setIsOpen] = useState(false);
  const [disabledToedit, setdisabledToedit] = useState(false);
  const Deleted= async(id, type)=>{

      if ( type =="tasks" ) {
          
        await deleteTask ({
          variables:{id:id},
          context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
        })

      }else{

        await deleteProject({
          variables:{id:id},
          context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
        })

      }
  }

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

  


  return (
    <div>
      <Windows show={modalIsOpen} onClose={closeModal} item={props.item} 
      statutType={disabledToedit}
      color={props.statutstate}
      />
      <div className={styles.project__card__wrapper}>
          <div className={styles.project__containerbarre}>
              <div 
                style={
                  {"background-color":`${props.statutstate}`, width:"20%", height:"6px"}
                }>
              </div>
          </div>
          <div className={styles.project__name}>{props.item.name}</div>
          <div className={styles.project__containdata}>
          </div>
          <div className={styles.update__container}>
              <div className={styles.icon__left}>
                  <div onClick={(e)=>openModal(true)}  aria-label="voir" data-balloon-pos="down"><FontAwesomeIcon  icon={faEye} size="2x"/></div>
                
                  
                    <div aria-label="Modifier" data-balloon-pos="down">
                        {
                         
                          <Link href={{pathname:`${props.editLink}`, query:{id:`${props.item.id}`}}}>
                              <FontAwesomeIcon  icon={faEdit} size="2x"/>
                          </Link>
                      }
                      </div>
                    
                  
                  <div aria-label="Supprimer" data-balloon-pos="down">
                    
                  {!props.isTasks?<FontAwesomeIcon  icon={faTrashAlt} size="2x"
                    onClick={e=>Deleted(props.item.id, "projects")}
                  />:<FontAwesomeIcon  icon={faTrashAlt} size="2x"
                  onClick={e=>Deleted(props.item.id, "tasks")}
                />}
                  
                  </div>
                    {
                      !props.isTasks?<div className={styles.task__icon} aria-label={`voir les tâches`} data-balloon-pos="down"><Link 
                      href={{pathname:`${"/tasks"}`, query:{id:`${props.item.id}`}}}
                      >
                      <FontAwesomeIcon  icon={faTasks} size="4x"/>  
                      </Link></div>:null  
                    }
              </div>
              
          </div>
      </div>
    </div>
  )
}
