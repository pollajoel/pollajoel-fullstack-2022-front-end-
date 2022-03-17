import React from 'react'
import styles from './projectcards.module.scss'
export default function Projectcards(props) {
  return (
      <div className={styles.project__card__wrapper}>
          <div className={styles.project__name}>{props.item.name}</div>
          <div className={styles.project__containdata}>
            <div>2 Tâches</div>
            <div>Vue d'ensemble</div>
          </div>
      </div>
  )
}
