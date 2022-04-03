import React, {useEffect, useState} from 'react'
import Scheduler from '../../components/scheduler/Scheduler'
import HomeLayout from '../../layouts/Home/Homelayout'
import styles from './index.module.scss'

export default function index({data}) {
    const [windowsReady, setWindowsReady]= useState(false)
    useEffect(()=>{
        setWindowsReady(true)
    },[])

  return (
    <div className={styles.calendar__wrapper}>
        <div className={styles.calendar__block}>
          {windowsReady?<div className={styles.scheduler__container}><Scheduler events={data}/></div>:null}
        </div>
        <div className={styles.user__block}>
          dddddddddddd
        </div>
    </div>
  )
}

index.getLayout = function getLayout(page) {
  return (<HomeLayout>{page}</HomeLayout>)
}

index.getInitialProps = async ({ query: { id} }) => {
  const data = [
    { StartTime:  new Date(), EndTime: new Date(2022, 0, 11, 12, 0), text:'Event 1', id: 1 },
  ];
  return { data }
}
