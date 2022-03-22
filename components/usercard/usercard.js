import React, {useState, useEffect} from 'react'
import styles from './usercard.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/dist/client/link'
import {faEye, faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import 'balloon-css';

export default function Usercard(props) {

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);


  return (
    
    <div className={styles.user__wrapper}>
      
      {
        winReady?<div className={styles.picture__contain}
      style={{
      'background-image':"url("+`${props.user.user_image}`+")",
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
              <div  aria-label="supprimer" data-balloon-pos="down"><FontAwesomeIcon   icon={faTrashAlt} size="2x" className={styles.icon}/></div>
              <div aria-label="Modifier" data-balloon-pos="down" >
                  <Link 
                    href={{
                      pathname:"users/edit",
                      query: { id:1 },
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
