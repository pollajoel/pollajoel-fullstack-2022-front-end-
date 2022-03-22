import React from 'react'
import styles from './select.module.scss'
export default function InpuSelect(props) {
  return (
    <div className={styles.select__wrapper}>
        <div className={styles.title}>
            <label>{props.label} : {props.defautValue}</label>
        </div>
        <select name={props.name} className={styles.select__wrapper__list}>
            <option value="" selected disabled hidden>{props.description}</option>
            {props?.Options?.map( (item) => <option key={item.id}
                default={props.defautValue}
            /> )}
        </select>
    </div>
  )
}
