import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  return (
    <>
    <Head>
      <title>My Blog</title>
      <meta keyword="My Blog powered by next js"/>
      <meta contents="practice"/>
    </Head>  
    <div>
      <h1>Welcome to my Blog</h1>
      <ul>
      {posts.map((elem)=>{
        return (
          <>
            <li>
              {elem.userId}
            </li>
            <li>
              {elem.title}
            </li>
            <li>
              {elem.body}
            </li>
          </>
        )
      })}
      </ul>
    </div>
    </>
  )
}

// export const getServerSideProps = async()=>{
//   const res=await fetch('http://localhost:8080/api/posts')
//   const posts = await res.json()
//   return{
//     props:{
//       posts
//     }
//   }
// }

export const getStaticProps = async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
  const posts = await res.json()
  return{
    props:{
      posts
    },
    revalidate:20
  }
}