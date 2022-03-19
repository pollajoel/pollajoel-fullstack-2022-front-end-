import React from 'react'
import HomeLayout from '../../../layouts/Home/Homelayout'
import styles from "./projects.module.scss"
import EditprojectsForm from "../../../components/editForm/editprojectsForm"
export default function Projects() {
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


Projects.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
