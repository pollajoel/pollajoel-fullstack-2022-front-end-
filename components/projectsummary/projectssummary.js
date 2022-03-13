import React from 'react'
import styles from './projectssummary.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Projectssummary(props) {
  return (
    <div className={styles.summary__container}>
        <div className={styles.container__icon}>
            <FontAwesomeIcon 
                icon={props.Icon}
                size="2x"
            />
        </div>
        <div className={styles.container__stat}><span>{props.Numbers}</span></div>
        <div className={styles.container__statut}>{props.description}</div>
    </div>
  )
}
