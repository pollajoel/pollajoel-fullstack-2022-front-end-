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


export default function index() {

   const [formError, setFormError]= useState({
       nameControl:{
            error: false,
            success: false
            
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
            console.log( data )
        },
        onError: (error)=>{
            alert( error )
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
                    is_admin:"true"
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
                        label="votre Nom"
                        type="text"
                        name="name"
                        id="name"
                        icon={faUser}
                        placeholder=""
                        error={formError.nameControl.error}
                        success={formError.nameControl.success}
                        erromessage="adresse incorrecte"
                        onChange={(e)=>SetFormstate({...Formstate, name:e.target.value})}
                    />

                    <InputForm
                        label="Votre prenom"
                        type="text"
                        name="firstname"
                        id="firstname"
                        icon={faUser}
                        success={true}
                        placeholder=""
                        onChange={(e)=>SetFormstate({...Formstate, firstname:e.target.value})}
                    />



                    <InputForm
                        type="email"
                        name="email"
                        label="email"
                        id="email"
                        icon={faEnvelope}
                        success={true}
                        placeholder=""
                        onChange={(e)=>SetFormstate({...Formstate, email:e.target.value})}
                    />

                    <InputForm
                       label="votre mot de passe*"
                        type="password"
                        name="password"
                        id="password"
                        icon={faLock}
                        success={true}
                        placeholder=""
                        onChange={(e)=>SetFormstate({...Formstate, password:e.target.value})}
                    />
                    {Formstate.name}

                    <div className={styles.loginButton}>
                        <div className="loginButton__connexion">
                            <Boutonblue name="Valider"
                            onClick={(e)=>OnsubmitForm(e)}
                            
                            />
                        </div>
                        <div className={styles.loginButton__createaccount}>
                            <Link href={"/login"} >
                                <a href="/login">
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


index.getInitialProps = async (ctx) => {

    return {}
}