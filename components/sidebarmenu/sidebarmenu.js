import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOut,faTasks, faPieChart ,faHomeAlt, faUsers, faCog,  faList, faCalendarTimes} from '@fortawesome/free-solid-svg-icons';
import styles from './sidebarmenu.module.scss'
import uniqid from 'uniqid';
import Link from 'next/link';
export default function Sidebarmenu() {

    const menu =[
        {icon: faHomeAlt, link:"/"},
        {icon: faList, link:"/projects"},
        {icon: faCalendarTimes, link:"calendar"},
        {icon: faUsers, link:"/users"},
        {icon: faCog, link:"/parametres"},
        //{icon: faTasks, link:"/tasks"}
    
    ]
  return (
    <div className={styles.sidebar__container}>
        <nav >
            <ul className={styles.nav__list}>
                <li className={styles.nav__logo}>
                      <Link href="/">
                            <a href="/">Logo</a>
                       </Link>
                </li>
                {
                    menu.map(item => <li className={styles.nav__link} key={uniqid()}>
                        <Link href={item.link}>
                            <a className={styles.nav__item}  href={item.link}>
                                <FontAwesomeIcon 
                                    icon={item.icon}
                                    pull="left"
                                    size="2x"
                                />
                            


                            </a>
                        </Link>
                        {
                            item.link=="/parametres"?
                            <ul className={styles.second__menu}>
                                <li>Profil</li>
                                <li>Tâches</li>
                            </ul>:null
                        }

                    </li>)
                }

                <li className={styles.nav__link}>
                    <FontAwesomeIcon 
                        icon={faSignOut}
                        pull="left"
                        size="2x"
                    />
                </li>
                
                
                


            </ul>
        </nav>
    </div>
  )
}
