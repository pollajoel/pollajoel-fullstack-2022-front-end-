import React from 'react'
import HomeLayout from '../../../layouts/Home/Homelayout'
import styles from "./edit.module.scss"
import UserForm from "../../../components/userForm/userForm"
import { useQuery } from "@apollo/client";
import { USER } from '../../../graphql/query'
import Loader from '../../../components/Loader/loader';

export default function EditUser(props) {

  const  {data, loading, errors } = useQuery(USER,{
    variables:{id:props.id},
    context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
  })

  if( loading ) return(<Loader/>)
  if( data )
  return (
    <div className={styles.container__wrapper}>
        <div className={styles.project__form}>
              <UserForm  title="Modifier le compte"
              isEdit={1}
              isAdd={0}
              user ={data.user}
              countries={props.countries}
              />
          </div>
    </div>
  )


}

EditUser.getInitialProps = async({ query: { id, isAdd, isEdit } }) => {

  const res = await fetch('https://restcountries.com/v3.1/all')
  const countries = await res.json()
  return { id , countries}
}

EditUser.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
