import React from 'react'
import styles from './textareacustom.module.scss'
export default function Textareacustom(props) {
  return (
    <div>
        <textarea 
            cols={props.cols} 
            rows={props.rows} 
            name={props.name} 
            resize={props.resize}
            className={styles.custom__textarea}
            value="bbbbbbbbbbbbbbbbbbbbbbbbbb"
            disabled={props.disabled}
        />

    </div>
  )
}
