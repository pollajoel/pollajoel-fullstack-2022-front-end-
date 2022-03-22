import React from 'react'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./users.module.scss"
import Usercard from '../../components/usercard/usercard'
import Boutonblue from '../../components/bouton/boutonblue/boutonblue'
import Link from 'next/dist/client/link'
export default function UsersListe(props) {
  return (
    <div className={styles.container__wrapper}>
        <div className={styles.created__button}>
          <Link href={{
                pathname:"users/create",
                query: { isEdit: false, isAdd: true },
              }}
          >
            <Boutonblue 
              name="Ajouter un compte"
              
            />
          </Link>
        </div>
        <div className={styles.user__list}>
              {
                props.usersliste.map((user)=><Usercard
                    user={user}
                  />)
              }
          </div>
    </div>
  )
}


UsersListe.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }

UsersListe.getInitialProps = async (ctx) => {

    const usersliste = [
        {
            name: "teguia",
            firstname: "polla joël",
            email: "pollajoel2017@gmail.com",
            user_image:"/bg.jpg",
            fonction:"fonction"
        },
        {
            name: "teguia",
            firstname: "polla joël",
            email: "pollajoel2017@gmail.com",
            user_image:"/bg.jpg",
            fonction:"fonction"
        },
        {
            name: "teguia",
            firstname: "polla joël",
            email: "pollajoel2017@gmail.com",
            user_image:"/bg.jpg",
            fonction:"fonction"
        },
        {
            name: "teguia",
            firstname: "polla joël",
            email: "pollajoel2017@gmail.com",
            user_image:"/bg.jpg",
            fonction:"fonction"
        },
        {
            name: "teguia",
            firstname: "polla joël",
            email: "pollajoel2017@gmail.com",
            user_image:"/bg.jpg",
            
        }
    ]

    return {usersliste}
  }