import React from 'react'
import styles from './boutonblue.module.scss';
export default function Boutonblue(props) {
  return (
    <div className={styles.button__blue}>
        <button className={styles.custom__button}>
            {props.name}
        </button>
    </div>
  )
}
