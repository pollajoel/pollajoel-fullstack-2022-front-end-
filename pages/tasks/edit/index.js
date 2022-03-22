import React from 'react'
import HomeLayout from '../../../layouts/Home/Homelayout'
import styles from "./edit.module.scss"
import TaskForm from '../../../components/tasksForm/Task'
export default function EditUser(props) {
  return (
    <div className={styles.container__wrapper}>
        <div className={styles.project__form}>
              <TaskForm  title="Modifier la tâche"
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
