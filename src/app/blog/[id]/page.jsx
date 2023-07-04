import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
    cache: 'no-store', 
  });
  
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()
}

export async function generateMetadata({params}) {
  const post = await getData(params.id);

  return {
    title: post.title,
    description: "Desc",
  }
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nesciunt dolorem odit corporis quibusdam facere iusto! Consequatur perferendis ipsa iure deserunt odio commodi omnis autem quod necessitatibus obcaecati, blanditiis possimus illum fugiat, nihil sit debitis corrupti veritatis error reprehenderit aliquid!
          </p>
          <div className={styles.author}>
            <Image 
              src="https://images.pexels.com/photos/16977812/pexels-photo-16977812/free-photo-of-mode-pria-orang-orang-gelap.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/13046592/pexels-photo-13046592.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium molestias pariatur ea deleniti magni rem facere soluta, consequatur quibusdam recusandae illum voluptates excepturi voluptas libero unde. Sint quas eveniet consectetur molestias possimus? Temporibus quo doloremque adipisci ea est saepe autem perferendis quod suscipit eveniet placeat dolorem expedita, exercitationem quas magni a, voluptas, beatae iure quisquam officia cumque pariatur voluptatibus corporis? Facere minus doloribus aliquid numquam architecto est doloremque libero harum, impedit neque fugiat explicabo, sit eos sequi natus beatae molestiae?
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae ipsam nobis sint libero asperiores, ipsum nesciunt quos neque dolor quod, expedita in esse, est dignissimos aspernatur eius. Doloremque maiores, eum quibusdam amet at voluptatum ipsa voluptate voluptates magni fugiat commodi quod consectetur soluta velit, nemo illum nostrum eligendi placeat animi voluptas atque! Unde explicabo accusantium quod inventore molestiae temporibus corporis ea tempora, voluptates quibusdam, velit excepturi eveniet iusto id obcaecati, rerum dolor dolore quam quaerat tenetur tempore. Unde voluptates excepturi quisquam, numquam, iste illum, praesentium laborum hic exercitationem totam vero id. Adipisci molestias aspernatur accusamus esse laudantium soluta debitis aperiam!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur! Ratione voluptates voluptatum earum, sit ipsum eligendi magni tenetur corrupti nobis. Natus, iste illum eaque id facere ut modi veniam cum possimus, nostrum distinctio consequuntur, non voluptas vero tempora unde voluptatem ea? Ea architecto unde, nulla commodi, labore, esse et voluptate nemo id facere iure modi explicabo ipsa consectetur pariatur!
        </p>
      </div>
    </div>
  )
}

export default BlogPost