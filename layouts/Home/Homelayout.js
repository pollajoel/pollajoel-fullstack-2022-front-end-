import React from 'react'
import Boutonblue from '../../components/bouton/boutonblue/boutonblue'
import Searchbar from '../../components/searchebar/searchbar'
import Sidebarmenu from '../../components/sidebarmenu/sidebarmenu'
import styles from './Homelayout.module.scss'
import Image from 'next/image'
import defaultImage from "../../public/uploads/user.png"

export default function Homelayout({children}) {
  return (
    <div className={styles.container__wrapper}>
      <div className={styles.container__menu}> <Sidebarmenu/> </div>
      <div className={styles.container__content}> <main>{children}</main> </div>
      <div className={styles.container__secondsidebar}>
          <div className={styles.profil__button}>
              <div><Boutonblue name="Consulter mon profil"/></div>
              <div>déconnexion</div>
          </div>
          <div> <Searchbar></Searchbar></div>
          <div className={styles.user__image}>
            <Image src={defaultImage} width={70} height={70}/>
          </div>
      </div>
    </div>
  )
} 
