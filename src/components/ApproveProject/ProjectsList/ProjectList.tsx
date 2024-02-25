import React from 'react'

import ProjectDetails from '@/interfaces/ProjectDetails'

import ProductDetail from './ProjectDetail'

type Props = {
  data : ProjectDetails[]
}

export default function ProjectList({data}: Props) {
  return (
    <section>
      <ul>
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