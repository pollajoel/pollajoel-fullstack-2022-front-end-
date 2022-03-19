import React from 'react'
import styles from './InputForm.module.scss';

export default function InputForm(props) {
  return (
    <div className={styles.form__content}>
        <label htmlFor={props.name}>{props.label}</label><br/>
            <input 
                type={props.type} 
                name={props.name}
                id={props.name}
                value={props.value}
                style={{
                        'font-size':`${props.FontSize}`
                    }}
                    
            />
    </div>
  )
}
