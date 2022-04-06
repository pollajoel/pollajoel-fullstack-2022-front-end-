import React, {useEffect, useState} from 'react'
import styles from './inputForm.module.scss';
import {faCheckCircle, faExclamationCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function InputForm(props) {
    const [windowsisReady, setWindowsIsready] =useState(false)
    useEffect(() => {
        setWindowsIsready(true)
    },[])

  return (
    <div>
    {setWindowsIsready?
    <div className={styles.input__container}>
            <div className={styles.icon__container}>
            
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
                        accept={props.accept}
                        min={`${props.min}`}
                    />
                    {
                     props.success!=="" && props.success!==null && props.isAdd==0?
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

                        (props.error=="" ||  props.error==null) && props.isAdd==0?<span>
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
    </div>:null}
    
    <div>
    {props.error?<em className={styles.error__message}>{props.erromessage}</em>:<em></em>}
    </div>
    
    
    </div>
  )
}
