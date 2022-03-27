import React, { useEffect, useState } from 'react'
import InputForm from '../form/inputForm/input'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import Boutonwhite from '../bouton/boutonwhite/boutonwhite';
import styles from "./rolesForm.module.scss"
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client';
import {CREATE_RULES} from '../../graphql/mutation'
export default function RolesForm(props) {

    const [CreateRules, {data, errors, loading}] = useMutation(CREATE_RULES, {
        onCompleted: (data)=>{
            router.reload()
        },
        onError: (errors)=>{}
    })

    const createRule = async()=>{ 
        await CreateRules({
            variables:{...formState},
            context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
        })
    }

 const router = useRouter()
 const [formState, SetFormState]=useState({ name: ""})
 const [windowReady, SetwindowReady]= useState(false)
 useEffect(() => { SetwindowReady( true )},[])

  return (

    <div className={styles.project__form}>
    <div className={styles.title}>{props.title}</div>
    <form id="create-course-form" className={styles.form__data}>
    <div className={styles.First__column}>
            <InputForm 
                label="intitulé de la fonction*"
                name="name"
                error={true}
                id="name"
                onChange={(e)=>SetFormState({...formState, name:e.target.value })}
                value={formState.name}
                type="text"
            />
            
       

        
       
        
    </div>

    <div className={styles.second__column}>
		{
            windowReady?
            <div className={styles.buton__submit}>
                <Boutonwhite icon={faPlus} name="Ajouter" onClick={e=>createRule()}/>
            </div>:null
        }
        
    </div>
            


       
           
            </form>
        
        
    </div>)
}
