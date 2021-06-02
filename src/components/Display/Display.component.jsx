import React from 'react'
import styles from './Display.module.scss'

const Display = props => 
    <div className={styles.display}> {props.value} </div>

export { Display }