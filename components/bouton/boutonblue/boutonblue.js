import React from 'react'
import styles from './boutonblue.module.scss';
export default function Boutonblue(props) {
  
  if(props.onClick ){
      return (
        <div className={styles.button__blue}>
            <button className={styles.custom__button}
            onClick={(event) => props.onClick(event)}
            >
                {props.name}
            </button>
        </div>
      )
  }else{
    return(
    <div className={styles.button__blue}>
            <button className={styles.custom__button}
            >
                {props.name}
            </button>
    </div>)
  }


}
