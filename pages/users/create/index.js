import React from 'react'
import HomeLayout from '../../../layouts/Home/Homelayout'
import styles from "./create.module.scss"
import UserForm from "../../../components/userForm/userForm"
import Loader from '../../../components/Loader/loader'
export default function CreateUser(props) {

  if( !props.countries)
  return ( <Loader/>)
  
  if( props.countries)
  return (
    <div className={styles.container__wrapper}>
        <div className={styles.project__form}>
              <UserForm  title="Ajouter un compte"
              isEdit={0}
              isAdd={1}
              countries={props.countries}
              />
          </div>
    </div>
  )


}


CreateUser.getInitialProps = async({ query: { id, isAdd, isEdit } }) => {

  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json()
  return { id ,isAdd, isEdit, countries}
}

CreateUser.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
