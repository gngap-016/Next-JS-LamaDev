import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/17255021/pexels-photo-17255021/free-photo-of-cinta-kamera-bunga-bunga-musim-panas.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
          fill={true} 
          alt="" 
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nam inventore hic ea a rem sunt obcaecati aspernatur vero magni? Totam aliquam soluta labore, voluptatibus explicabo accusantium officia quisquam culpa!
            <br /><br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sit error at, alias magni soluta quas maxime minima delectus? Quo voluptatum officia in deleniti fugit numquam porro a delectus atque!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rerum enim, voluptatibus eligendi facere assumenda similique dolor neque quisquam vitae animi quia, excepturi ipsa doloribus, rem minus sint quibusdam possimus.
            <br /><br />
            - Creative Illustrations
            <br /><br />
            - Dynamic Websites
            <br /><br />
            - Fast and Handy Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About