import React from 'react'
import styles from './statutComponent.module.scss'
export default function StatutComponent(props) {
  return (
    <div className={styles.statut__describe}
        style={{'background-color':`${props.color}`}}
    >{props.statut}</div>
  )
}
