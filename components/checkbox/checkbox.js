import React from 'react'
import styles from "./checkbox.module.scss";
export default function Checkbox(props) {
  return (
    <div className={styles.container}>
        <input 
            type="checkbox" name={props.name}
            className={styles.CheckboxCustom}
        />
         <span className={styles.checkmark}></span>
    </div>
  )
}
