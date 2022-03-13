import React from 'react'
import styles from "./title.module.scss"
export default function Title(props) {
  return (
    <div className={styles.title__container}>{props.title}</div>
  )
}
