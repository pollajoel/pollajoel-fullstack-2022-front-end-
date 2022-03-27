import React, {useState} from 'react'
import styles from './login.module.scss'
import logo from '../../public/uploads/logo.jpg'
import Image from 'next/image'
import InputForm from '../../components/form/inputForm/input'
import {faLock, faUser, faUserEdit} from '@fortawesome/free-solid-svg-icons';
import Boutonblue from '../../components/bouton/boutonblue/boutonblue'
import Boutonwhite from '../../components/bouton/boutonwhite/boutonwhite'
import Link from 'next/link'
import { useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from '../../graphql/mutation'
import { useRouter } from 'next/router'

export default function index() {
    const router = useRouter()
    const [Formstate, SetFormstate] = useState({
        email:"",
        password:""
    })

    const [LoginMutation, {data, errors, loading}] = useMutation(AUTHENTICATE_USER, {
        onCompleted: (data)=>{
            //console.log( "Token: "+data )
            localStorage.setItem("Token",data.authentification.token )
            router.push("/")
        },
        onError: (errors)=>{
            alert( errors )
            console.log( errors )
        }
    })

    const OnsubmitForm = async(e)=>{
        e.preventDefault();	
        await LoginMutation({
            variables:{
                email:Formstate.email,
                password: Formstate.password
            }
        })
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
                <h1>Bienvenu!</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
            <div className ={styles.form__container}>
                <form>
                    <InputForm
                        label="Login *"
                        type="email"
                        name="email"
                        id="email"
                        icon={faUser}
                        placeholder=""
                        error={true}
                        erromessage=""
                        onChange={(e)=>SetFormstate({...Formstate, email:e.target.value})}
                    />

                    <InputForm
                        type="password"
                        name="password"
                        id="password"
                        icon={faLock}
                        success={true}
                        placeholder=""
                        label="mot de passe *"
                        onChange={(e)=>SetFormstate({...Formstate, password:e.target.value})}
                    />

                    <div className={styles.remenber__me}>

                        <div className="pretty p-default p-round">
                            <input type="checkbox" />
                            <div className="state p-success-o">
                                <label>Se souvenir de moi?</label>
                            </div>
                        </div>

                        <div className={styles.forgetpass}>
                            <p>
                                <Link href="/forgetpass">
                                    <a className={styles.link}>Mot de passe oublié?</a>
                                </Link>
                            </p>
                        </div>


                    </div>

                    <div className={styles.loginButton}>
                        <div className="loginButton__connexion">
                            <Boutonblue name="Connexion"
                                onClick={(e)=>OnsubmitForm(e)}
                            />
                        </div>
                        <div className={styles.loginButton__createaccount}>
                            <Link href="/register">
                                <a href="/register">
                                <Boutonwhite name="Créer un compte" icon={faUserEdit}/>
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
