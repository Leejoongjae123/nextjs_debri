import React from 'react';
import {useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'
import Headinfo from '../components/Headinfo';
import Image from 'next/image'

export default function photos ({photos}) {
  console.log(photos)
  return (
    <>
    <Headinfo title="My Blog Photos"></Headinfo>
    <div className={styles.container}>
      <h1>My Photos</h1>
      <Image src={photos[0].thumbnailUrl} width={100} height={100}></Image>
      <ul>
        {photos.map((photo)=>{
          return (
            <>
            <li key={photo.id}>
              <Image src={photo.thumbnailUrl} width={100} height={100} alt={photo.title}></Image>
            </li>
            <li>
              {photo.thumbnailUrl}
            </li>
            </>
          )
        })}
      </ul>
    </div>
    </>
  );
}

export const getStaticProps = async()=>{
  const res=await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_end=10')
  const photos = await res.json()
  return{
    props:{
      photos
    },
    revalidate:20
  }
}