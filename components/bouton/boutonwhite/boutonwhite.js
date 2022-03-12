import React from 'react'
import styles from './boutonwhite.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Boutonwhite(props) {
  return (
    <div className={styles.button__white}>
        <button className={styles.custom__button}>
            {props.name}
            <FontAwesomeIcon 
                icon={props.icon}
                pull="right"
                size="1x"
            />
        </button>
    </div>
  )
}
