import React from 'react'
import styles from "./Homecards.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Homecards(props) {
  return (
    <div className={ styles.homecard__wrapper }>
        <div className={styles.wrapper__icon}>
         <FontAwesomeIcon 
            icon={props.icon}
            pull="right"
            size="6x"
        />
        </div>
        <div className={styles.wrapper__title}>
            {props.title}
        </div>
    </div>
  )
}
