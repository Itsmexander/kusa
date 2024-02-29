import React from 'react'

import ProjectDetails from '@/interfaces/ProjectDetails'

import ProductDetail from './ProjectDetail'

type Props = {
  data : ProjectDetails[]
}

export default function ProjectList({data}: Props) {
  return (
    <section className='h-full w-full '>
      <ul className='flex flex-col h-full w-full gap-y-[2vh]'>
        {data.map(( e : ProjectDetails) => { 
          return (
            <li key={e.name}>
              <ProductDetail details={e}/>
            </li>
          ) 
        })}
      </ul>
    </section>
  )
}