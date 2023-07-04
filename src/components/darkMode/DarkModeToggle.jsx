"use client"

import React, { useContext } from 'react'
import styles from './DarkModeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContact'

const DarkModeToggle = () => {

  const { toggle, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>&#9789;</div>
      <div className={styles.icon}>&#9728;</div>
      <div className={styles.ball} style={mode === "light" ? {left: "2px"} : {right: "2px"}} />
    </div>
  )
}

export default DarkModeToggle