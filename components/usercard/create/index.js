import React from 'react'
import HomeLayout from '../../../layouts/Home/Homelayout'
import styles from "./projects.module.scss"
import EditprojectsForm from "../../../components/tasksForm/taskform.js"
export default function TasksCreate() {
  return (
    <div className={styles.container__wrapper}>
        <div className={styles.project__form}>
              <EditprojectsForm title="create"
              isEdit={true}
              isAdd={true}
              />
          </div>
    </div>
  )
}


TasksCreate.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
