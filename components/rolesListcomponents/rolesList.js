import React, {useState, useEffect} from 'react'
import Boutonwhite from '../bouton/boutonwhite/boutonwhite'
import styles from './rolesList.module.scss'
import {faPlus, faCalendarCheck,faEdit} from '@fortawesome/free-solid-svg-icons'

export default function RolesList(props) {

    const [windowsIread, setWindowsIsready]=useState(false)
    const [ editstate, seteditsatet]=useState([])
    const Initstate = ()=>{
        let tab =[]
        for( let i=0; i<props.roles.length; i++){
            tab.push(false)
        }
        seteditsatet( tab );
    }

    const ActiveEdit = (e,index)=>{
        
        e.preventDefault();
        let tab =[...editstate];
        for( let i=0; i<tab.length; i++)
            {
                if( i==index)
                    tab[index]=true;
                else{
                    tab[i]=false;
                }
            }
            seteditsatet(tab)

    }

    const Validate__confirm = (e)=>{

        e.preventDefault();
        let tab =[...editstate];
        for( let i=0; i<tab.length; i++)
            {
                tab[i]=false;
            }
            seteditsatet(tab)
        
    }
    
    useEffect(() => {
        setWindowsIsready(true)
        Initstate();
    },[])

  return (
    <div className={styles.container__wrapper}>
    <form>
        {
            windowsIread?<div>
                {props?.roles?.map( (item, index) =>
                <div className={styles.roles__wrapper}>
                    <div className={styles.input__wrapper}>
                       {
                            editstate.at(index)?<input type="text" name="name" className={styles.active__input}/>
                            :<input type="text" name="name" disabled />
                        }
                    </div>
                        <div className={styles.active__button}>
                             <div className={styles.button__edit}>
                                <Boutonwhite onClick={(e)=>ActiveEdit(e, index)} icon={faEdit} name="editer"/>
                             </div>
                             <div className={styles.button__delete}>
                                <Boutonwhite icon={faEdit} name="supprimer"/> 
                            </div>
                            <div className={styles.button__valider}>
                                {editstate.at(index)?<Boutonwhite onClick={(e)=>Validate__confirm(e)} icon={faEdit} name="valider"/>:null}
                            </div>
                            
                            </div>
                    </div>
                )
                }
            </div>:null
        }

    </form>
    </div>
  )
}
