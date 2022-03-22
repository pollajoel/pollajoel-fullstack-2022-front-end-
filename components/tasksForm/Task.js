import React, { useEffect, useState } from 'react'
import InputForm from '../form/inputForm/input'
import {faPlus, faCalendarCheck,faEdit} from '@fortawesome/free-solid-svg-icons'
import Boutonwhite from '../bouton/boutonwhite/boutonwhite';
import styles from "./task.module.scss"
import InpuSelect from '../form/select/select';
import TextareaForm from '../form/textarea/textareaForm';

export default function TaskForm(props) {

 const [formState, SetFormState]=useState({
    name: props.task?.name || "sss",
    description: props.task?.description || "",
    start_date: props.task?.start_date || "dd",
    end_date: props.task?.phone || 666666,
    statutId: props.task?.statutId || 666666,
    userId: props.task?.userId || 666666,
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
                label="Intitulé de la tâche *"
                name="name"
                error={true}
                id="name"
                onChange={(e)=>SetFormState({...formState, name:e.target.value })}
                value={formState.name}
                type="text"
            />
            
       

        
            <InputForm 
                icon ={faCalendarCheck}
                label="Date de debut"
                name="start_date"
                error={true}
                onChange={(e)=>SetFormState({...formState, start_date:e.target.value })}
                type="text"
                value={formState.start_date}
            />
      
            <InputForm 
                name="end_date"
                label="Date de fin"
                error={true}
                onChange={(e)=>SetFormState({...formState, end_date:e.target.value })}
                type="text"
                value={formState.end_date}
                icon ={faCalendarCheck}
            />
        {
            windowReady?
            <div className={styles.buton__submit}>
                { props.isAdd==1?<Boutonwhite icon={faPlus} name="Ajouter"/>:null}
                {  props.isEdit==1?<Boutonwhite icon={faEdit} name="Confirmer"/>:null}
            </div>:null
        }
    </div>


    <div className={styles.second__column}>
    


        <TextareaForm
                
                rows={5}
                label="Description"
                type="text"
                name="description"
                error={true}
                value={formState.firstname}
                onChange={(e)=>SetFormState({...formState, firstname:e.target.value })}
        />
        
        <InpuSelect 
            label="statut"
            defautValue="Cameroun"
            description="Selectionner un pays"
        />
        

        <InpuSelect 
            label="Assigner à"
            defautValue="Cameroun"
            description="Selectionner un pays"
        />
    </div>
            


       
           
            </form>
        
        
    </div>)
}
