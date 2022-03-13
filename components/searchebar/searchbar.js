import React from 'react'
import styles from './searchbar.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export default function Searchbar() {
  return (
    <div className={styles.searchbar__container}>
      <div className={styles.SearchForm__container}>
        <form>
          <div className={styles.form__container}>
            <div> 
              <label htmlFor="searchvalue">
                <FontAwesomeIcon 
                  icon={faSearch}
                  
                  size="2x"
                />  
              </label>
            </div>
            <div><input type="text" id="searchvalue" placeholder='Recherchez ici ...'></input></div>
           <div></div>
          </div>
        </form>
      </div>  
    </div>
  )
}
