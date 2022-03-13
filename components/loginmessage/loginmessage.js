import React from 'react'
import Searchbar from '../searchebar/searchbar'
import styles from './loginmessage.module.scss'

export default function Loginmessage(props) {
  return (
    <div className={styles.loginmessage__wrapper}>
        <div className={styles.name__block}>
            <h1>Bienvenu {props.user}!</h1>
            <p>Faisons de notre mieux aujourd'hui</p>
        </div>
        <div>
            <Searchbar></Searchbar>
        </div>
    </div>
  )
}
