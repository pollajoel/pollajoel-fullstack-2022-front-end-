import React, {useState, useEffect} from 'react'
import styles from './register.module.scss'
import logo from '../../public/uploads/logo.jpg'
import Image from 'next/image'
import InputForm from '../../components/form/inputForm/input'
import {faLock, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Boutonblue from '../../components/bouton/boutonblue/boutonblue'
import Boutonwhite from '../../components/bouton/boutonwhite/boutonwhite'
import Link from 'next/link'
import { useMutation } from "@apollo/client";
import { CREATE_USER } from '../../graphql/mutation'


export default function Index() {

   const [formError, setFormError]= useState({
       nameControl:{
            error: false,
            success: false,
            message:""
            
       },
       firstnameControl:{
        error: false,
        success: false,
        message:""
        
   },
    emailControl:{
        error: false,
        success: false,
        message:""
        
    },
    passwordControl:{
        error: false,
        success: false,
        message:""
        
        }
   })
    
    const [Formstate, SetFormstate] = useState({
        name:"",
        firstname:"",
        email:"",
        password:""

    })

    const [CreateUserMutation, {data, errors, loading}] = useMutation(CREATE_USER, {
        onCompleted: (data)=>{
            var nameError = {error:false, success:true }
            var emailError = {error:false, success:true }
            var passwordError = {error:false, success:true }
            var firstnameError = {error:false, success:true }
            setFormError({
                ...formError,  
                emailControl: emailError,
                passwordControl: passwordError,
                firstnameControl: firstnameError,
                nameControl: nameError,
            });

            SetFormstate({
                ...Formstate,
                name:"",
                firstname:"",
                email:"",
                password:""
            })

        },
        onError: (errors)=>{

            var nameError = {error:false, success:false }
            var emailError = {error:false, success:false }
            var passwordError = {error:false, success:false }
            var firstnameError = {error:false, success:false }
            
            if( Formstate.name=="")
                nameError = {...nameError, error:true, message:"nom obligatoire"}
            if( Formstate.email=="")
                emailError = {...emailError, error:true, message:"email obligatoire"}
            if( Formstate.password=="" )
                passwordError = {...passwordError, error:true, message:"mot de passe obligatoire"}
            if( Formstate.email=="" )
                firstnameError = {...firstnameError, error:true, message:"prenom requis"}

            setFormError({
                ...formError,  
                emailControl: emailError,
                passwordControl: passwordError,
                firstnameControl: firstnameError,
                nameControl: nameError,
            })





        },
        onloading: (data)=>{
            alert
        }
    });
    
    const OnsubmitForm = async(e)=>{
        e.preventDefault();	

    try{
        
        const content =await CreateUserMutation({
            variables: {
                registuser:{
                    email:Formstate.email,
                    firstname: Formstate.firstname,
                    name: Formstate.name,
                    password:Formstate.password,
                    is_admin:false
                }
            }
        });

    }catch(error){
       console.log( error )
    }

       
    }

    



  return (
    <div className={styles.login__wrapper}>
        <div className={styles.login__image}></div>
        <div className={styles.logincontainer}>
            <div className={styles.login__form}>
                <div className={styles.login__logo}>
                <Image
                        src={logo}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div className={styles.login__title}>
                <h1>Créer un compte</h1>
            </div>
            <div className ={styles.form__container}>
                <form>
                    <InputForm
                        label="votre Nom*"
                        type="text"
                        name="name"
                        id="name"
                        icon={faUser}
                        placeholder=""
                        error={formError.nameControl.error}
                        success={formError.nameControl.success}
                        erromessage={formError.nameControl.message}
                        onChange={(e)=>SetFormstate({...Formstate, name:e.target.value})}
                    />

                    <InputForm
                        label="Votre prenom *"
                        type="text"
                        name="firstname"
                        id="firstname"
                        icon={faUser}
                        placeholder=""
                        onChange={(e)=>SetFormstate({...Formstate, firstname:e.target.value})}
                        error={formError.firstnameControl.error}
                        success={formError.firstnameControl.success}
                        erromessage={formError.firstnameControl.message}
                    />



                    <InputForm
                        type="email"
                        name="email"
                        label="email *"
                        id="email"
                        icon={faEnvelope}
                        placeholder=""
                        onChange={(e)=>SetFormstate({...Formstate, email:e.target.value})}
                        error={formError.emailControl.error}
                        success={formError.emailControl.success}
                        erromessage={formError.emailControl.message}
                    />

                    <InputForm
                       label="votre mot de passe*"
                        type="password"
                        name="password"
                        id="password"
                        icon={faLock}
                        placeholder=""
                        onChange={(e)=>SetFormstate({...Formstate, password:e.target.value})}
                        error={formError.passwordControl.error}
                        success={formError.passwordControl.success}
						autocomplete="current-password"
                        erromessage={formError.passwordControl.message}
                    />
            
                    <div className={styles.loginButton}>
                        <div className="loginButton__connexion">
                            <Boutonblue name="Valider"
                            onClick={(e)=>OnsubmitForm(e)}
                            
                            />
                        </div>
                        <div className={styles.loginButton__createaccount}>
                            <Link href="/login" >
                                <a>
                                    <Boutonwhite name="Se connecter" icon={faUser}/>
                                </a>
                            </Link>
                        </div>
                    </div>
                    
                    
                </form>
            </div>

            

        </div>
    </div>
  )
}

