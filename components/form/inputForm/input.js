import React from 'react'
import styles from './inputForm.module.scss';
import {faCheckCircle, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function InputForm(props) {
  return (
    <div>
    <div className={styles.input__container}>
            <div className={styles.icon__container}>
            <FontAwesomeIcon 
                icon={props.icon}
                size="2x"
            />
            </div>
            <div className={styles.formInpunt__wrapper}>
                <div className={styles.wrapper__label}>
                    <label htmlFor={props.id}>
                        {props.label}
                    </label>
                </div>
                <div className={styles.wrapper__input}>
                    <input 
                        type={props.type} 
                        name={props.name}
                        id={props.id}
                        placeholder={props.placeholder}
                        onChange={props.onChange}
                        value={props.value}
                        className={props.customstyle}
                    />
                    {
                     props.success?
                        <span>
                            <FontAwesomeIcon 
                                className={styles.icon__verified}
                                icon={faCheckCircle}
                                pull="right"
                                size="2x"
                            />
                        </span>:<span></span>
                    }
                    {

                        props.error?<span>
                            <FontAwesomeIcon 
                                className={styles.icon__error}
                                icon={faExclamationCircle}
                                pull="right"
                                size="2x"
                                fill="currentColor"
                            />
                        </span>:<span></span>
                    }

                </div>
            </div>
    </div>
    <div>
    {props.error?<em className={styles.error__message}>{props.erromessage}</em>:<em></em>}
        
        </div>
    </div>
  )
}
