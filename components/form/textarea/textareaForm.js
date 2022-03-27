import React from 'react'
import styles from './textareaForm.module.scss';

export default function TextareaForm(props) {
  return (
    <div className={styles.textarea__wrapper}>
      <div className={styles.title}>{props.label}</div>
        <textarea 
            name={props.name} 
            placeholder={props.description}
            value={props.value}
            rows={props.rows}
            cols={props.cols}
            onChange={props.onChange}
           
            
        >
        </textarea>
    </div>
  )
}
