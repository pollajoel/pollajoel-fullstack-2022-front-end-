import React from 'react'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./roles.module.scss"
import RolesForm from '../../components/rolesForm/rolesForm'
import RolesList from '../../components/rolesListcomponents/rolesList'
import { RULES } from '../../graphql/query'
import Loader from '../../components/Loader/loader'
import { useQuery } from '@apollo/client';

export default function UsersListe(props) {

  const {data, loading, errors} = useQuery(RULES,
    {
      context:{headers:{authorization: typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
    })

  if(loading) return(<Loader/>)
  if( data)
  return (
    
    <div className={styles.container__wrapper}>
      {console.log(data)}
        <div className={styles.created__button}>
          <RolesForm/>
        </div>
        <div className={styles.user__list}>
           <RolesList roles={data.userroles} type="roles"/>
        </div>
    </div>
  )
}


UsersListe.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }

UsersListe.getInitialProps = async (ctx) => {

    const roleslistes = [
        {
            name: "teguia",
            
        },
        {
            name: "teguia",
            
        },
        {name: "teguia"},
        { name: "teguia" },
        { name: "teguia" },
        { name: "teguia" },
        { name: "teguia" },
        { name: "teguia" },
        { name: "teguia" },
        { name: "teguia" },
        { name: "teguia" }
    ]

    return {roleslistes}
  }