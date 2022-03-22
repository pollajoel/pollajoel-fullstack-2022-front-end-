import React from 'react'
import Sidebarmenu from '../../components/sidebarmenu/sidebarmenu'
import styles from './Homelayout.module.scss'
import Image from 'next/image'
import defaultImage from "../../public/uploads/user.png"
import Loginmessage from '../../components/loginmessage/loginmessage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faChevronDown} from '@fortawesome/free-solid-svg-icons'



export default function Homelayout({children}) {
  return (
    <div className={styles.container__wrapper}>

      <div className={styles.container__menu}> <Sidebarmenu/> </div>
      <div className={styles.container__content}> 
        <Loginmessage user="user"></Loginmessage>
        <div>{children}</div> 
      </div>
      <div className={styles.home__container}>
      <div className={styles.user__image}>
            <div className={styles.menu__container} style={{borderRadius: '50%', overflow: 'hidden', border:'1px solid #e6e6e6'}}>
                <Image src={defaultImage} width={40} height={40}/>
                <ul className={styles.user__menu}>
                    <li> 
                      <span className={styles.chevron__size}>UserName <FontAwesomeIcon icon={faChevronDown} size="2x"/></span>
                      <ul className={styles.menu__contain}>
                          <li>Mon profil</li>
                          <li>Déconnexion</li>
                      </ul>
                    </li>
                </ul>
            </div>
            <div className={styles.notifications__box}>
              <div>
                <FontAwesomeIcon  icon={faBell} size="2x"/>
              </div>    
            </div>
          </div>
      </div>



      
    </div>
  )
} 
