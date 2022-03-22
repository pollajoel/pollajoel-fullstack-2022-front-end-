import React from 'react'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./roles.module.scss"
import RolesList from '../../components/rolesListcomponents/rolesList'
import StatutsForm from '../../components/statutsForm/statutsForm'
export default function UsersListe(props) {
  return (
    <div className={styles.container__wrapper}>
        <div className={styles.created__button}>
          <StatutsForm/>
        </div>
        <div className={styles.user__list}>
           <RolesList roles={props.roleslistes}/>
        </div>
    </div>
  )
}


UsersListe.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }

UsersListe.getInitialProps = async (ctx) => {

    const statut = [
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