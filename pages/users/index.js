import React from 'react'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./users.module.scss"
import Usercard from '../../components/usercard/usercard'
import Boutonblue from '../../components/bouton/boutonblue/boutonblue'
import Link from 'next/dist/client/link'
import { useQuery } from "@apollo/client";
import { USERS } from '../../graphql/query'
import Loader from '../../components/Loader/loader'

export default function UsersListe(props) {
  
  const  {data, loading, errors } = useQuery(USERS,{
    context:{headers:{authorization: typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
  });

  if( loading ){ return(<Loader/>)}

  if( data )
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
                data.users.map((user)=><Usercard
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

