import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOut, faPlusCircle, faHomeAlt, faUsers, faCog,  faList, faCalendarTimes} from '@fortawesome/free-solid-svg-icons';
import styles from './sidebarmenu.module.scss'
import uniqid from 'uniqid';
import Link from 'next/link';
import Image from 'next/image';
import 'balloon-css';

export default function Sidebarmenu() {

    const menu =[
        {icon: faHomeAlt, link:"/", description:"Accueil"},
        {icon: faList, link:"/projects", description:"projets"},
        {icon: faCalendarTimes, link:"/calendar", description:"plannings"},
        {icon: faUsers, link:"/users", description:"utilisateurs"},
        {icon: faCog, link:"/parametres", description:"parametres"},
        //{icon: faTasks, link:"/tasks"}
    
    ]
  return (
    <div className={styles.sidebar__container}>
        <nav >
            <ul className={styles.nav__list}>
                <li className={styles.nav__logo}>
                      <Link href="/">
                            <a href="/">
                                <Image
                                  src={"/uploads/logo.JPG"}
                                  alt="logo"
                                  height={100}
                                  width={200}
                                />
                                </a>
                       </Link>
                </li>
                {
                    menu.map(item => <li className={styles.nav__link} key={uniqid()}
                    aria-label={`${item.description}`} data-balloon-pos="right"
                    >
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
                                    <li>
                                        <div className={styles.menu__contain}>
                                            <div><Link href="/statuts">Statuts</Link></div>
                                            <div><Link href="/roles">Roles</Link></div>
                                        </div>
                                    </li>
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
