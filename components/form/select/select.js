import React from 'react'
import styles from './select.module.scss'
export default function InpuSelect(props) {
  return (
    <div className={styles.select__wrapper}>
        <div className={styles.title}>
            <label>{props.label} : {props.defautValue}</label>
        </div>
        <select name={props.name} className={styles.select__wrapper__list}
          onChange={(event) => props.onChange(event)}
        >

            <option value="" selected disabled hidden>{props.description}</option>
            {props?.Options?.map( (item, index) =>{
            
              if( props.country)
                return <option key={index}
                    default={props.defautValue || ""}
                >{ item.translations.fra.common}</option> 
              if( props.assignto)
                return (<option value={item.id}>{item.name}</option>)
              if( props.statutComp )
                return (<option value={item.id}>{item.name}</option>)
              
            })
            }


        </select>
    </div>
  )
}
