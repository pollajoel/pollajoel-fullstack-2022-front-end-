import React from 'react'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./roles.module.scss"
import RolesForm from '../../components/rolesForm/rolesForm'
import RolesList from '../../components/rolesListcomponents/rolesList'
export default function UsersListe(props) {
  return (
    <div className={styles.container__wrapper}>
        <div className={styles.created__button}>
          <RolesForm/>
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