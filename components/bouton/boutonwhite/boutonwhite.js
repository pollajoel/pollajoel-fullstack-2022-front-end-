import React from 'react'
import styles from './boutonwhite.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Boutonwhite(props) {
 
  if(props.onClick ){
    return(<div className={styles.button__white}>
  
        <button className={styles.custom__button}
        onClick={(event) => props.onClick(event)}
        >
            {props.name}
            <FontAwesomeIcon 
                icon={props.icon}
                pull="right"
                size="1x"
              
            />
        </button>
    </div>
  )
}else{
  return(<div className={styles.button__white}>
    <button className={styles.custom__button}
    >
        {props.name}
        <FontAwesomeIcon 
            icon={props.icon}
            pull="right"
            size="1x"
          
        />
    </button>
</div>)
}
}
