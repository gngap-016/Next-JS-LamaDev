import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { 
    cache: 'no-store', 
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>

      {data.map(
        (item) => (
          <Link href={`/blog/${item.id}`} className={styles.container} key={item.id}>
            <div className={styles.imgContainer}>
              <Image 
                className={styles.img}
                src="https://images.pexels.com/photos/16494010/pexels-photo-16494010/free-photo-of-makanan-kopi-minuman-cappuccino.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                width={400}
                height={250}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iusto facilis voluptas recusandae beatae! Molestias minus explicabo quam quidem! Quos eveniet ut, iste eligendi repudiandae magnam aliquam quasi obcaecati consectetur cum, est necessitatibus modi? Ipsa quaerat deleniti molestias id sequi saepe! Laboriosam est quos sint tempora nam, odit deserunt inventore.
              </p>
            </div>
          </Link>
        )
      )}
      
    </div>
  )
}

export default Blog