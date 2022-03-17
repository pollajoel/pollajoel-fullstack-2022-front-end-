import React from 'react'
import DoughnutChart from '../../components/stat/Doughnut'
import Piechart from '../../components/stat/Piechart'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from "./statistic.module.scss"

export default function Statistic() {
  return (
    <div className={styles.container__wrapper}>
        <div className={styles.doughnutchart}><DoughnutChart/></div>
        <div className={styles.piechart}><Piechart/></div>
    </div>
  )
}


Statistic.getLayout = function getLayout(page) {
    return (<HomeLayout>{page}</HomeLayout>)
  }
