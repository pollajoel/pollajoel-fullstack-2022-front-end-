import React from 'react'
import styles from './textareaForm.module.scss';

export default function TextareaForm(props) {
  return (
    <div className={styles.textarea__wrapper}>
        <textarea 
            name={props.name} 
            placeholder={props.description}
            value={props.value}
            rows={props.rows}
            cols={props.cols}
           
            
        >
        </textarea>
    </div>
  )
}
