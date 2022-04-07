import React, { useEffect, useState } from 'react'
import InputForm from '../form/inputForm/input'
import {faPlus, faCalendarCheck,faEdit} from '@fortawesome/free-solid-svg-icons'
import Boutonwhite from '../bouton/boutonwhite/boutonwhite';
import styles from "./ProjectForm.module.scss"

import TextareaForm from '../form/textarea/textareaForm';
import {useMutation} from '@apollo/client'
import {useRouter} from 'next/router'
import {CREATE_PROJECT} from '../../graphql/mutation'
import AssignTo from '../statutComponentList/assignTo'
import StatutComponent from '../assignTo/StatutComponent.js'

export default function ProjectForm(props) {
const router = useRouter()
const [CreateProject] = useMutation(CREATE_PROJECT, {
    onCompleted: (data)=>{
        router.reload()
    },
    onError: (errors)=>{
        console.log( errors )
        console.log( formState )
    }
})

 const [formState, SetFormState]=useState({
    title: props.task?.name || "",
    description: props.task?.description || "",
    start_date: props.task?.start_date || "",
    end_date: props.task?.end_date || "",
    statutId: props.task?.statutId || "",
    userId: props.task?.userId || "",
 })
 const [windowReady, SetwindowReady]= useState(false)
 useEffect(() => { SetwindowReady( true )},[])
 
 async function ADDprojectORtask(event){
    event.preventDefault();
        await CreateProject({
            variables:{projectdataInput:{
                start_date: formState.start_date, 
                end_date: formState.end_date, 
                title: formState.title,
                description: formState.description,
                statutId: Number.parseInt(formState.statutId),
                userId: Number.parseInt(formState.userId)
            }},
            context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
        })
 }



  return (
    <div className={styles.project__form}>
    <div className={styles.title}>{props.title}</div>
        <form id="create-course-form" className={styles.form__data}>

    <div className={styles.First__column}>
        
            <InputForm 
                label="nom du projet*"
                name="title"
                error={true}
                id="title"
                onChange={(e)=>SetFormState({...formState, title:e.target.value })}
                value={formState.title}
                type="text"
            />
            
       

        
            <InputForm 
                icon ={faCalendarCheck}
                label="Date de debut"
                name="start_date"
                error={true}
                onChange={(e)=>SetFormState({...formState, start_date:e.target.value })}
                type="date"
                value={formState.start_date}
            />
      
            <InputForm 
                type="date"
                name="end_date"
                label="Date de fin"
                error={true}
                onChange={(e)=>SetFormState({...formState, end_date:e.target.value })}
                value={formState.end_date}
                icon ={faCalendarCheck}
                
            />
        {
            windowReady?
            <div className={styles.buton__submit}>
                { props.isAdd==1?<Boutonwhite icon={faPlus} name="Ajouter" onClick={e=>ADDprojectORtask(e)}/>:null}
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
                onChange={(e)=>SetFormState({...formState, description:e.target.value })}
        />
        
        
            <StatutComponent
                label="statut"
                onChange={(e)=>SetFormState({...formState, 
                    statutId: e.target.value,
                    defautValue:e.target.value
                })}
                name="statutId"
                defautValue={formState.statutId}
                description="veuillez choisir un statut..."
            />

            

            <AssignTo
                label="assigné a"
                onChange={e=>SetFormState({
                    ...formState, 
                    userId:e.target.value,
                    defautValue:e.target.value
                })}
                defautValue={formState.userId}
                name="userId"
                description="veuillez choisir un utilisateur..."
            />
    </div>
            


       
           
            </form>
        
        
    </div>)
}
