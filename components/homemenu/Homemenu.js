import React from 'react'
import styles from "./homemenu.module.scss"
import uniqid from 'uniqid'
import Link from 'next/link'
import Image from 'next/image'
import logo from "../../public/uploads/logo.JPG"
import user from "../../public/uploads/user.png"


const myLoader = ({ src, width, quality, url }) => {
    return `${url}/${src}?w=${width}&q=${quality || 75}`
  }

export default function Homemenu() {
    const menu =[
        {link:"/", title:"my profil"},
        {link:"/", title:"projects"},
        {link:"/", title:"calendar"},
        {link:"/", title:"deconnexion"}
    ]
  return (
    <div className={styles.homemenu__container}>

      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={logo}
            alt="Picture of the author"
            width={200}
            height={100}
          />
        </Link>
      </div>
      <div>
            <nav className={styles.home__nav}>
                  <ul className={styles.mainmenu__list}>
                      <li className={styles.currentUserPicture}>
                          
                          <Link href="/">
                          <Image
                                src={user}
                                alt="Picture of the author"
                                width={45}
                                height={45}
                                className={styles.profilImage}
                        />
                        </Link>
                          
                         
                          <ul className={styles.secondmenu__list}>
                            <li className={styles.currentUser}>connecté(e): Joël</li>
                            
                            {
                                menu.map( 
                                (item)=><li key={uniqid()} className="nav__item">
                                            <Link href={item.link}>
                                                <a className={styles.nav__link}>{item.title}</a>
                                            </Link>
                                        </li>)
                            }
                          </ul>
                      </li>
                  </ul>
            </nav>
          </div>
        </div>
  )
}
