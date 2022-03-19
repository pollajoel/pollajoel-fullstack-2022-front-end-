
import React from 'react'
import styles from './displayer.module.scss'
export default function Displayer(props) {
  return (
    <div className={styles.displayer__Wrapper}>
      <label>{props.title}</label> {props.value}</div>
  )
}
