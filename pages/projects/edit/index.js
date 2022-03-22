import React from 'react'
import HomeLayout from '../../../layouts/Home/Homelayout'
import styles from "./edit.module.scss"
import ProjectForm from '../../../components/projectForm/ProjectForm'
export default function EditUser(props) {
  return (
    <div className={styles.container__wrapper}>
        <div className={styles.project__form}>
            <ProjectForm  title="Modifier le projet"  
              isEdit={1}
              isAdd={0}
              />
          </div>
    </div>
  )
}

EditUser.getInitialProps = ({ query: { id, isAdd, isEdit } }) => {
  return { id }
}

EditUser.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
