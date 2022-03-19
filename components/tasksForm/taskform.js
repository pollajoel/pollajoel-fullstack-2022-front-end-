import React, { useEffect, useState } from 'react'
import InputForm from '../form/inputForm/input'
import {faCalendarPlus, faProjectDiagram} from '@fortawesome/free-solid-svg-icons';
import TextareaForm from '../form/textarea/textareaForm';
import {faPlus, faEdit} from '@fortawesome/free-solid-svg-icons'
import Boutonwhite from '../bouton/boutonwhite/boutonwhite';
import styles from "./taskform.module.scss"

export default function TaskForm(props) {

 const [formState, SetFormState]=useState({
    title: props.title || "",
    start_date: props.start_date || "",
    end_date: props.end_date || "",
    decription: props.description || ""
 })
 const [open, SetCloseForm]= useState(false)

 const closeButton = ()=>{   
    document.getElementById("create-course-form").reset();   
}

    useEffect(() => {
        SetCloseForm(props.isAdd)
        
    },[props.isAdd])

  return (
    <>
    {open?<div className={styles.project__form}>
        <div className={styles.form__content}>
            <div>{props.title}</div>
            <div>
            <form id="create-course-form">
                <div>
                    <InputForm 
                    name="title"
                    error={true}
                    id="title"
                    placeholder="intitulé du projet"
                    onChange={(e)=>SetFormState({...formState, title:e.target.value })}
                    icon={faProjectDiagram}
                
                    />
                </div>
                <div>
                    <InputForm 
                    name="start_date"
                    error={true}
                    icon={faCalendarPlus}
                    placeholder="date de début"
                    onChange={(e)=>SetFormState({...formState, name:e.target.value })}
                    />
                </div>

                <div>
                    <InputForm 
                    name="end_date"
                    error={true}
                    icon={faCalendarPlus}
                    placeholder="date de fin"
                    onChange={(e)=>SetFormState({...formState, end_date:e.target.value })}
                    />
                </div>
                <div>
                    <TextareaForm
                        decription="description du projet"
                        rows="4"
                        cols="40"
                        name="decription"
                        description="brève description du projet"
                        onChange={(e)=>SetFormState({...formState, description:e.target.value })}
                
                />
                </div>

                <div>
                    { props.isAdd?<Boutonwhite icon={faPlus} name="Ajouter"/>:null}
                    {  props.isEdit?<Boutonwhite icon={faEdit} name="Modifier"/>:null}
                    </div>
            </form>
        </div>
        </div>
    </div>:null
    }
    </>)
}
