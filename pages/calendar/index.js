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
    <div>
        {windowsReady?<div className={styles.scheduler__container}><Scheduler events={data}/></div>:null}
    </div>
  )
}

index.getLayout = function getLayout(page) {
  return (<HomeLayout>{page}</HomeLayout>)
}

index.getInitialProps = async ({ query: { id} }) => {
  const data = [
    { start_date:'2020-06-10 6:00', end_date:'2021-06-10 8:00', text:'Event 1', id: 1 },
    { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 }
  ];
  return { data }
}
