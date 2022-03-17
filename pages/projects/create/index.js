import React from 'react'
import HomeLayout from '../../../layouts/Home/Homelayout'
import styles from "./projects.module.scss"

export default function Projects() {
  return (
    <div className={styles.container__wrapper}>
    </div>
  )
}


Projects.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
