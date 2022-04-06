import React, {useEffect, useState} from 'react'
import Scheduler from '../../components/scheduler/Scheduler'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from './index.module.scss'

export default function Index({data}) {
 
  return (
    <div className={styles.calendar__wrapper}>
        <div className={styles.calendar__block}>
          <div className={styles.scheduler__container}><Scheduler events={data}/></div>
        </div>
        <div className={styles.user__block}>
          dddddddddddd
        </div>
    </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (<HomeLayout>{page}</HomeLayout>)
}

Index.getInitialProps = async ({ query: { id} }) => {
  const data = [
    { StartTime:  new Date(), EndTime: new Date(2022, 0, 11, 12, 0), text:'Event 1', id: 1 },
  ];
  return { data }
}
