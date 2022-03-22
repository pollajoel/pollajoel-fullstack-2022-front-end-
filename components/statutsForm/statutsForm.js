import React, { useEffect, useState } from 'react'
import InputForm from '../form/inputForm/input'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Boutonwhite from '../bouton/boutonwhite/boutonwhite';
import styles from "./rolesForm.module.scss"


export default function StatutsForm(props) {

 const [formState, SetFormState]=useState({
    name: props.statut?.name || "sss",
    description: props.statut?.description || "sss",
    color: props.statut?.color || "sss",
 })
 const [windowReady, SetwindowReady]= useState(false)


    useEffect(() => {
       
        SetwindowReady( true )

    },[])

  return (
    
    <div className={styles.project__form}>
    <div className={styles.title}>{props.title}</div>
        <form id="create-course-form" className={styles.form__data}>

    <div className={styles.First__column}>
        
            <InputForm 
                label="intitulé du statut"
                name="name"
                error={true}
                id="name"
                onChange={(e)=>SetFormState({...formState, name:e.target.value })}
                value={formState.name}
                type="text"
            />
            
            <InputForm 
                label="description"
                name="description"
                error={true}
                id="name"
                onChange={(e)=>SetFormState({...formState, description:e.target.value })}
                value={formState.name}
                type="text"
            />

        
    </div>

    <div className={styles.second__column}>


    <InputForm 
                label="couleur"
                name="color"
                error={true}
                id="color"
                onChange={(e)=>SetFormState({...formState, color:e.target.value })}
                value={formState.name}
                type="color"
               
            />


		{
            windowReady?
            <div className={styles.buton__submit}>
                <Boutonwhite icon={faPlus} name="Ajouter"/>
            </div>:null
        }
        
    </div>
            


       
           
            </form>
        
        
    </div>)
}
