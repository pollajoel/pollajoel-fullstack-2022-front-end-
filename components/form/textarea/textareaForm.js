import React from 'react'
import styles from './textareaForm.module.scss';

export default function TextareaForm(props) {
  return (
    <div className={styles.textarea__wrapper}>
      <div className={styles.title} htmlFor={props.name}>{props.label}</div>
        <textarea 
            id={props.name}
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
