import React from 'react'
import styles from './register.module.scss'
import logo from '../../public/uploads/logo.jpg'
import Image from 'next/image'
import InputForm from '../../components/form/inputForm/input'
import {faLock, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons';
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
                <h1>Créer un compte</h1>
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

                    <InputForm
                        type="text"
                        name="firstname"
                        id="firstname"
                        icon={faUser}
                        success={true}
                        placeholder=""
                    />



                    <InputForm
                        type="email"
                        name="email"
                        id="email"
                        icon={faEnvelope}
                        success={true}
                        placeholder=""
                    />

                    <InputForm
                        type="password"
                        name="password"
                        id="password"
                        icon={faLock}
                        success={true}
                        placeholder=""
                    />


                    <div className={styles.loginButton}>
                        <div className="loginButton__connexion">
                            <Boutonblue name="Enregister"/>
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
