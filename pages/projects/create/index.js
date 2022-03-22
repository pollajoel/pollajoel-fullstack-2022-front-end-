import React from 'react'
import HomeLayout from '../../../layouts/Home/Homelayout'
import styles from "./create.module.scss"
import ProjectForm from '../../../components/projectForm/ProjectForm'
export default function TaskCreate(props) {
  return (
    <div className={styles.container__wrapper}>
        <div className={styles.project__form}>
              <ProjectForm  title="Ajouter un projet"
              isEdit={0}
              isAdd={1}
              />
          </div>
    </div>
  )
}


TaskCreate.getInitialProps = ({ query: { id, isAdd, isEdit } }) => {
  return { id, isAdd, isEdit }
}

TaskCreate.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
