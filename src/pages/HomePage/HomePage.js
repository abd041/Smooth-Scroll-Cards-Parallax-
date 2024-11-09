import React from 'react'
import { projects } from '../../components/data'
import Card from '../../components/Card/Card'

const HomePage = () => {
  return (
    <div className=''>
    {projects.map((project ,index)=>{
     return(<Card {...project} key={index} i={index}/>)
    })}
   </div>
  )
}

export default HomePage