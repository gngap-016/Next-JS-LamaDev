import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Gilang. All rights reserved.</div>
      <div>
        <div className={styles.social}>
          <Image src="/1.png" width={14} height={14} className={styles.icon} alt="Gilang Facebook" />
          <Image src="/2.png" width={14} height={14} className={styles.icon} alt="Gilang Instagram" />
          <Image src="/3.png" width={14} height={14} className={styles.icon} alt="Gilang Twitter" />
          <Image src="/4.png" width={14} height={14} className={styles.icon} alt="Gilang Youtube" />
        </div>
      </div>
    </div>
  )
}

export default Footer