import React from 'react'
import styles from './tasks.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import defaultImage from "../../public/uploads/user.png"
export default function Tasks() {
  return (
    <div className={styles.task__container}>
    <div className={styles.description}>
            <div className={styles.container__title}>
                     <div className={styles.description__title}>Title of task</div>
                     <div className={styles.menu__box}>
                          <ul className={styles.Select__menu}>
                            <li className={styles.nav__link}>
                              <FontAwesomeIcon  icon={faEllipsisV} size="2x"/>
                              <ul className={styles.edit__Menu}>
                                  <li>Voir</li>
                                  <li>Modifier</li>
                              </ul>
                            </li>
                          </ul>
                     </div>
            </div>
            <div className={styles.description__project}>Title of projects</div>
            <div className={styles.times__content}>
                <div className={styles.start__date}>start date</div>
                <div className={styles.end__date}>end_date</div>
                <div className={styles.picture__container}>
                    <Image 
                            src={defaultImage} 
                            width={20} 
                            height={20}
                            style={{borderRadius: '50%', overflow: 'hidden', border:'1px solid #e6e6e6'}}
                    />
                </div>
            </div>
    </div>
    </div>
  )
}
