import React, {useState, useEffect} from 'react'
import Boutonwhite from '../bouton/boutonwhite/boutonwhite'
import styles from './taskSelector.module.scss'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Tasks from '../tasks/tasks';

export default function TaskSelector() {
  
    const [choose, SetChoose] = useState({
       first:true,
       second: false
    })

    function Change(item) {
        if( item == 2){
            SetChoose({...choose, first:false, second:true})
        }else{
            if( item == 1)
                SetChoose({...choose, first:true, second:false})
        }
           
        
    }

   useEffect(()=>{})
  
  
    return (
      <div className={styles.task__bar__select}>
            <div className={styles.taks__bar}>
                <div onClick={()=>Change(1)}>
                    <a className={styles.taskSelectInprogress}>
                        <button>Tâches en cours</button>
                        {choose.first?<div className={styles.activeBar}></div>:<></>}
                    </a>
                </div>
                <div className={styles.second__button} onClick={()=>Change(2)}>
                    <a className={styles.taskSelectCompleted}>
                        <button>Tâches complète</button><br/>
                        {choose.second?<div className={styles.activeBar}></div>:<></>}
                    </a>
                </div>

                <div className={styles.boutonaddContainer}>
                    <Boutonwhite name="Ajouter" icon={faPlus}/>
                </div>
            </div>

         {choose.first?   
                <div className={styles.task__describe}>
                    <Tasks></Tasks>  
                    <Tasks></Tasks>   
                </div>:<div></div>
         }

         {choose.second?<div className={styles.task__describe}>
             <Tasks></Tasks>
             </div>:<div></div>}
    </div>
  )
}
