import React from 'react'
import { BallTriangle, Oval, Circle} from  'react-loader-spinner'
import  styles from './loader.module.scss'
export default function Loader() {
  return (
      <div className={styles.loader__container}>
    <Oval
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
      </div>
  )
}