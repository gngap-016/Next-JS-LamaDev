import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
  title: 'Contact | Gilang Ap',
  description: 'This is contact page',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
        <div className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea cols="30" rows="10" placeholder="message" className={styles.textArea}></textarea>
          <Button url="#" text="Send" />
        </div>
      </div>
    </div>
  )
}

export default Contact