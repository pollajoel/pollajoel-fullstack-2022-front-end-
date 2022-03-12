import React from 'react'
import styles from './forgetpass.module.scss'
import logo from '../../public/uploads/logo.jpg'
import Image from 'next/image'
import InputForm from '../../components/form/inputForm/input'
import {faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Boutonblue from '../../components/bouton/boutonblue/boutonblue'
import Boutonwhite from '../../components/bouton/boutonwhite/boutonwhite'
import Link from 'next/link'


export default function index() {
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
                <h1>Mot de passe oublié?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className ={styles.form__container}>
                <form>
                    <InputForm
                        type="text"
                        name="name"
                        id="name"
                        icon={faUser}
                        placeholder=""
                        error={true}
                        erromessage="adresse incorrecte"
                    />

                    <div className={styles.loginButton}>
                        <div className="loginButton__connexion">
                            <Boutonblue name="valider"/>
                        </div>
                        <div className={styles.loginButton__createaccount}>
                            <Link href={"/login"} >
                                <a href="/login">
                                    <Boutonwhite name="page de connexion" icon={faUser}/>
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
