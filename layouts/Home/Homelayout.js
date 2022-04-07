import React from 'react'
import Sidebarmenu from '../../components/sidebarmenu/sidebarmenu'
import styles from './Homelayout.module.scss'
import Image from 'next/image'
import defaultImage from "../../public/uploads/user.png"
import Loginmessage from '../../components/loginmessage/loginmessage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import ClientOnly from '../../components/clientOnly/clientonly'
import LoginUsername from '../../components/loginUsername/loginUsername'
import { useQuery } from "@apollo/client";
import {GET_ME} from '../../graphql/query'
import Link from 'next/dist/client/link'

    


export default function Homelayout({children}) {

  const  {data, loading, errors } = useQuery(GET_ME,{
    context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
  })


  return (
    <div className={styles.container__wrapper}>

      <div className={styles.container__menu}> <Sidebarmenu/> </div>
      <div className={styles.container__content}>
        <ClientOnly>
          <Loginmessage
            user={data}
          ></Loginmessage>  
        </ClientOnly> 
        
        <div>{children}</div> 
      </div>
      <div className={styles.home__container}>
      <div className={styles.user__image}>
            <div className={styles.menu__container} style={{borderRadius: '50%', overflow: 'hidden', border:'1px solid #e6e6e6'}}>
                {data?<Image src={data.getMe.profil_image!=""?defaultImage:data.getMe.profil_image} width={40} height={40}/>:null}
                {loading?<Image src={defaultImage} width={40} height={40}/>:null}
                
                <ul className={styles.user__menu}>
                    <li> 
                      <LoginUsername className={styles.chevron__size}
                        user={data}
                      
                      />
                      <ul className={styles.menu__contain}>
                          <li>
                           {data? <Link
                            
                            href={{
                              pathname:"/users/edit",
                              query: { id:data.getMe.id },
                            }}
                            
                            >Mon profil</Link>:null}
                            </li>
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
