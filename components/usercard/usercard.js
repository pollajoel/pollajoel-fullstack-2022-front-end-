import React, {useState, useEffect} from 'react'
import styles from './usercard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/dist/client/link'
import {faEye, faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import 'balloon-css';
import { DELETE_USER } from '../../graphql/mutation'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

export default function Usercard(props) {
  const router = useRouter()
  const [Isdeleted, SetIsdeleted] = useState(false)

  const [DeleteUserMutation] = useMutation(DELETE_USER,{
    onCompleted: (data)=>{
      SetIsdeleted( true)
      router.reload();
    },
    onError: (errors)=>{console.log( errors )}
  })

  const deleteUserMutation = async()=>{

    await DeleteUserMutation({
      variables:{id:props.user.id},
      context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
    })

  }
  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);


  return (
    
    <div className={styles.user__wrapper}>

      
      {
        winReady?<div className={styles.picture__contain}
      style={{
      'background-image':"url("+`${props.user.profil_image}`+")",
      "background-size": "contain",
      "background-repeat": "no-repeat",
      "background-position":"center"
    }}
      />:<div className={styles.picture__contain}/>
  }
      <div className={styles.user__content}>
          <div>{props.user.name} {props.first_name}</div>
          <div>{props.user.email}</div>
          <div>{props.user.fonction}</div>
          <div className={styles.user__card__details}>
              <div aria-label="details" data-balloon-pos="down"> <FontAwesomeIcon   icon={faEye} size="2x" className={styles.icon}/> </div>
              <div  aria-label="supprimer" data-balloon-pos="down"
                onClick ={deleteUserMutation}
              ><FontAwesomeIcon   icon={faTrashAlt} size="2x" className={styles.icon}/></div>
              <div aria-label="Modifier" data-balloon-pos="down" >
                  <Link 
                    href={{
                      pathname:"users/edit",
                      query: { id:props.user.id },
                    }}
                  >
                      <FontAwesomeIcon   icon={faEdit} size="2x" className={styles.icon}/>
                  </Link>
                </div>
          </div>
      </div>

     
      
    </div>
   
  )
}
