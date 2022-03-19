import React, {useState} from 'react'
import styles from './projectcards.module.scss'
import Windows from '../windows/windows'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTasks, faEye, faEdit, faTrashAlt, faRulerHorizontal} from '@fortawesome/free-solid-svg-icons'
import 'balloon-css';

export default function Projectcards(props) {
  
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
                  <div aria-label="Modifier" data-balloon-pos="down" onClick={event=>openModal(false)}><FontAwesomeIcon  icon={faEdit} size="2x"/></div>
                  <div aria-label="Supprimer" data-balloon-pos="down"><FontAwesomeIcon  icon={faTrashAlt} size="2x"/></div>
              </div>
              <div className={styles.task__icon} aria-label={`2 tâches`} data-balloon-pos="down">2 Tâches</div>
          </div>
      </div>
    </div>
  )
}
