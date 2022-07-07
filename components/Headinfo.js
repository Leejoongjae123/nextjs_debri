import React from 'react';
import {useEffect, useState} from 'react'
import Head from 'next/head'

export default function Headinfo ({title,keyword,contents}) {
  return (
    <div>
    <Head>
      <title>{title}</title>
      <meta keyword={keyword}/>
      <meta contents={contents}/>
    </Head>      
    </div>
  );
}

Headinfo.defaultProps={
  title:'My Blog',
  keyword:'Blog powered by Next js',
  contents:"practice next js"

}