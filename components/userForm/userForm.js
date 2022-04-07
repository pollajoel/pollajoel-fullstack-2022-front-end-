import React, { useEffect, useState } from 'react'
import InputForm from '../form/inputForm/input'
import {faPlus, faImagePortrait,faEdit} from '@fortawesome/free-solid-svg-icons'
import Boutonwhite from '../bouton/boutonwhite/boutonwhite';
import styles from "./userForm.module.scss"
import InpuSelect from '../form/select/select';
import {useMutation } from '@apollo/client';
import {UPDATE_USER, CREATE_USER } from '../../graphql/mutation'
import { useRouter } from 'next/router'
import Loader from '../Loader/loader';

export default function UserForm(props) {
    const router = useRouter()
    const [ isSubmit, setSubmit] = useState(false)

    const [CreateUser] = useMutation(CREATE_USER, {
        onCompleted: (data)=>{
           setSubmit(true)
           SetFormState({
               ...formState,
               name: "",
               firstname: "",
               password: "",
               is_admin: "",
               email: "",
               phone: "",
               city: "",
               postal_code: "",
               profil_image: ""
           })

           router.reload()

       },
       onError: (errors)=>{
           console.log( errors )
       }
   })

    const [UpdateUser, {contain, errors, loading}] = useMutation(UPDATE_USER, {
         onCompleted: (data)=>{
            setSubmit(true)
            SetFormState({
                ...formState,
                name: data.updateUser.name,
                firstname: data.updateUser.firstname,
                password: data.updateUser.password,
                is_admin: data.updateUser.is_admin,
                email: data.updateUser.email,
                phone: data.updateUser.phone,
                city: data.updateUser.city,
                postal_code: data.updateUser.postal_code,
                profil_image: data.updateUser.profil_image
            })

            router.reload()

        },
        onError: (errors)=>{
            console.log( errors )
        }
    })

 const [formState, SetFormState]=useState({
    name: props?.user?.name || "",
    firstname: props?.user?.firstname || "",
    password: props?.user?.password || "",
    is_admin: props?.user?.is_admin || false,
    email: props?.user?.email || "",
    phone: props?.user?.phone || "",
    city: props?.user?.city || "",
    postal_code: props?.user?.postal_code || "",
    profil_image: props?.user?.profil_image || ""
 })
 const [windowReady, SetwindowReady]= useState(false)
    useEffect(() => {
        SetwindowReady( true )
    },[])


    const Add = async(e)=>{
        
        e.preventDefault();	
        await CreateUser({
            variables: {registuser:formState },
            context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
        });
    }

    const Isdamin_Handler = (e)=>{
        SetFormState({
            ...formState,
            is_admin: e.target.value=='on'?true:false
        })


        
    }

    const Update = async(e)=>{
        e.preventDefault();
        //variables:{input:formState},
       //context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}},
       await UpdateUser({
        variables:{
            updtateUserinput: {...formState},
            id: props.user.id
        },
        context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
    })
        
    }

    const Marked_checked = (marked) => {
        if( marked == true)
            return "checked"
    }

    const LoadImage = (e)=>{
     if (e.target.files && e.target.files[0])
        {
            var formdata = new FormData()
            formdata.append("file", e.target.files[0], e.target.value);
            var requestOptions = { method: 'POST',body: formdata,};
            fetch("http://localhost:3005/api/upload", requestOptions)
            .then(response => response.text())
            .then(result =>{
                if( result){ 
                    const data = JSON.parse(result)
                    SetFormState({...formState,profil_image:data.files.originalname })
                }
            })
            .catch(error => console.log('error', error));
        }

           //console.log( formState )
    }

  return (
    
    <div className={styles.project__form} onClick={e=>setSubmit(false)}>
    <div className={styles.title}>{props.title}</div>
        <form id="create-course-form" className={styles.form__data}>

    <div className={styles.First__column}>
        
            <InputForm 
                label="Nom *"
                name="name"
                error={props?.user?.name}
                success={props?.user?.name}
                id="name"
                onChange={(e)=>SetFormState({...formState, name:e.target.value })}
                value={formState.name}
                type="text"
                isAdd={props.isAdd}
            />
            <InputForm 
                label="prenom *"
                type="text"
                name="firstname"
                error={props?.user?.firstname}
                success={props?.user?.firstname}
                value={formState.firstname}
                onChange={(e)=>SetFormState({...formState, firstname:e.target.value })}
                isAdd={props.isAdd}
            />
       

        
            <InputForm 
                label="email *"
                name="email"
                error={props?.user?.email}
                success={props?.user?.email}
                onChange={(e)=>SetFormState({...formState, email:e.target.value })}
                type="email"
                value={formState.email}
                isAdd={props.isAdd}
            />
      
            <InputForm 
                name="password"
                label="mot de passe *"
                error={props?.user?.password}
                success={props?.user?.password}
                onChange={(e)=>SetFormState({...formState, password:e.target.value })}
                type="password"
                value={formState.password}
                isAdd={props.isAdd}
            />
      
        
        
            <InputForm 
            label="numéro de télophone *"
            name="phone"
            id="phone"
            error={props?.user?.phone}
            success={props?.user?.phone}
            value={formState.phone}
            type="number"
            isAdd={props.isAdd}
            onChange={(e)=>SetFormState({...formState, phone:e.target.value })}
            />
        
    </div>


    <div className={styles.second__column}>
        
        <InputForm 
            label="code postal *"
            name="postal_code"
            error={props?.user?.postal_code}
            success={props?.user?.postal_code}
            value={formState.postal_code}
            isAdd={props.isAdd}
            onChange={(e)=>SetFormState({...formState, postal_code:e.target.value })}
            type="text"
        />

        <InputForm 
            label="Ville *"
            name="city"
            error={props?.user?.city}
            success={props?.user?.city}
            value={formState.city}
            onChange={(e)=>SetFormState({...formState, city:e.target.value })}
            type="email"
        />

        
        
        <InputForm 
           
            name="profil_image"
            id="profil_image"
            label={formState.profil_image}
            icon ={faImagePortrait}
            error={props?.user?.profil_image}
            success={props?.user?.profil_image}
            onChange={(e)=>LoadImage(e)}
            type="file"
            customstyle={styles.cunstom__file}
            isAdd={props.isAdd}
            accept="image/jpeg,image/png"
        />


        <div className={styles.is__admin}>
            <div className="pretty p-default p-curve p-thick p-smooth">
                <input 
                    type="checkbox"  
                    name="is_admin"
                    checked={Marked_checked(formState.is_admin)}
                    onChange={(e)=>Isdamin_Handler(e)}
                />
                <div className="state p-success-o">
                    <label>Est administrateur ?</label>
                </div>
            </div>
        </div>

        {
            windowReady?
            <div className={styles.buton__submit}>
                { props.isAdd==1?<Boutonwhite icon={faPlus} name="Ajouter"
                    onClick={(e)=>Add(e)}
                
                />:null}
                {  props.isEdit==1?<Boutonwhite icon={faEdit} name="Confirmer"
                    onClick={(e)=>Update(e)}
                />:null}
            </div>:null
        }
    

    </div>
            </form>

            {isSubmit?<Loader/>:null}
        
     
    </div>)
}
