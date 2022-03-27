import React, { useEffect, useState } from 'react'
import InputForm from '../form/inputForm/input'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Boutonwhite from '../bouton/boutonwhite/boutonwhite';
import styles from "./rolesForm.module.scss"
import {CREATE_STATUT} from '../../graphql/mutation'
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router'
export default function StatutsForm(props) {
const router = useRouter();
 
const [CreateStatutMutation, {data, errors, loading}] = useMutation(CREATE_STATUT, {
        onCompleted: (data)=>{
            router.reload()
        },
        onError: (errors)=>{}
 })

 


 const [formState, SetFormState]=useState({
    name:"",
    description:"",
    color:"",
 })
 const [windowReady, SetwindowReady]= useState(false)

    const AddStatut = async(event) => {
        event.preventDefault();
        await CreateStatutMutation({
            variables:{...formState},
            context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
        })
    }

    const ChangeColor=(event )=>{
        const colorValue =""+event.target.value+"";
        SetFormState({...formState, color:colorValue})
    }


  useEffect(() => { SetwindowReady( true )},[])
  return (
    
    <div className={styles.project__form}>
    <div className={styles.title}>{props.title}</div>
        <form id="create-course-form" className={styles.form__data}>

    <div className={styles.First__column}>
        
        <div>
            <InputForm 
                label="intitulé du statut *"
                name="name"
                error={true}
                id="name"
                onChange={(e)=>SetFormState({...formState, name:e.target.value })}
                value={formState.name}
                type="text"
            />
        </div>
        <div>
            <InputForm 
                label="description *"
                name="description"
                error={true}
                id="description"
                onChange={(e)=>SetFormState({...formState, description:e.target.value })}
                value={formState.description}
                type="text"
            />
        </div>
        
    

            <div className={styles.input__color}>
                <label>marqueur</label>  
            <input
                placeholder="marqueur*"
                name="color"
                id="color"
                onChange={(e)=>ChangeColor(e)}
                type="color"
            />
            </div>


		{
            windowReady?
            <div className={styles.buton__submit}>
                <Boutonwhite icon={faPlus} name="Ajouter" onClick={e=>AddStatut(e)}/>
            </div>:null
        }
        
    </div>
            


       
           
            </form>
        
        
    </div>)
}
