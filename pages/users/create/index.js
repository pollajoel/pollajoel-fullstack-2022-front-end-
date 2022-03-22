import React from 'react'
import HomeLayout from '../../../layouts/Home/Homelayout'
import styles from "./create.module.scss"
import UserForm from "../../../components/userForm/userForm"
export default function CreateUser(props) {
  return (
    <div className={styles.container__wrapper}>
        <div className={styles.project__form}>
              <UserForm  title="Ajouter un compte"
              isEdit={0}
              isAdd={1}
              />
          </div>
    </div>
  )
}


CreateUser.getInitialProps = ({ query: { id, isAdd, isEdit } }) => {
  return { id, isAdd, isEdit }
}

CreateUser.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
