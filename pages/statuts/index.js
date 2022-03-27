import React from 'react'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./roles.module.scss"
import RolesList from '../../components/rolesListcomponents/rolesList'
import StatutsForm from '../../components/statutsForm/statutsForm'
import {STATUS} from '../../graphql/query'
import { useQuery } from '@apollo/client'
import Loader from '../../components/Loader/loader'

export default function UsersListe(props) {

  const {StatuQuery, data, loading, errors} = useQuery(STATUS,
    {
      context:{headers:{authorization: typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
    })

    if( data ){ console.log( data )}

    if (loading) { return(<Loader/>)}
    if( data )
    return (
      <div className={styles.container__wrapper}> 
        <div className={styles.title}>Gestion des statuts</div>
          <div className={styles.created__button}>
            <StatutsForm/>
          </div>
          <div className={styles.user__list}>
            <RolesList roles={data.statuts} type="statut"/>
          </div>
      </div>
    )
}


UsersListe.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }

UsersListe.getInitialProps = async (ctx) => {

    const roleslistes = []

    return {roleslistes}
  }