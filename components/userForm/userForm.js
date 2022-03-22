import React, { useEffect, useState } from 'react'
import InputForm from '../form/inputForm/input'
import {faPlus, faImagePortrait,faEdit} from '@fortawesome/free-solid-svg-icons'
import Boutonwhite from '../bouton/boutonwhite/boutonwhite';
import styles from "./userForm.module.scss"
import InpuSelect from '../form/select/select';

export default function UserForm(props) {

 const [formState, SetFormState]=useState({
    name: props.user?.name || "sss",
    firstname: props.user?.firstname || "dd",
    password: props.user?.password || "dd",
    is_admin: props.user?.is_admin || "",
    email: props.user?.email || "dd",
    phone: props.user?.phone || 666666,
    city: props.user?.city || "dd",
    country: props.user?.country || "dd",
    postal_code: props.user?.postal_code || "dd",
    profil_image: props.user?.profil_image || false
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
                label="Nom *"
                name="name"
                error={true}
                id="name"
                onChange={(e)=>SetFormState({...formState, name:e.target.value })}
                value={formState.name}
                type="text"
            />
            <InputForm 
                label="prenom *"
                type="text"
                name="firstname"
                error={true}
                value={formState.firstname}
                onChange={(e)=>SetFormState({...formState, firstname:e.target.value })}
            />
       

        
            <InputForm 
                label="email *"
                name="email"
                error={true}
                onChange={(e)=>SetFormState({...formState, email:e.target.value })}
                type="email"
                value={formState.email}
            />
      
            <InputForm 
                name="password"
                label="mot de passe *"
                error={true}
                onChange={(e)=>SetFormState({...formState, password:e.target.value })}
                type="password"
                value={formState.password}
            />
      
        
        
            <InputForm 
            label="numéro de télophone *"
            name="phone"
            id="phone"
            error={true}
            value={formState.phone}
            type="number"
            onChange={(e)=>SetFormState({...formState, phone:e.target.value })}
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
        
        <InputForm 
            label="code postal *"
            name="postal_code"
            error={false}
            success={true}
            value={formState.postal_code}
            onChange={(e)=>SetFormState({...formState, postal_code:e.target.value })}
            type="email"
        />

        <InputForm 
            label="Ville *"
            name="city"
            error={true}
            value={formState.city}
            onChange={(e)=>SetFormState({...formState, city:e.target.value })}
            type="email"
        />

        <InpuSelect 
            label="Pays"
            defautValue="Cameroun"
            description="Selectionner un pays"
        />
        
        <InputForm 
           
            name="profil_image"
            id="profil_image"
            label=""
            icon ={faImagePortrait}
            error={true}
            onChange={(e)=>SetFormState({...formState, country:e.target.value })}
            type="file"
            customstyle={styles.cunstom__file}
        />


        <div className={styles.is__admin}>
            <div className="pretty p-default p-curve p-thick p-smooth">
                <input type="checkbox"  
                    value = {formState.is_admin}
                    name="is_admin"
                    onChange={(e)=>SetFormState({...formState, is_admin:e.target.value })}
                
                />
                <div className="state p-success-o">
                    <label>Est administrateur ?</label>
                </div>
            </div>
        </div>
    

    </div>
            


       
           
            </form>
        
        
    </div>)
}
