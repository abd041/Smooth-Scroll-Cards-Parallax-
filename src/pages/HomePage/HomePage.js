import React from 'react'
import { projects } from '../../components/data'
import Card from '../../components/Card/Card'
import { Inner } from '../../components/animation/Inner'

const HomePage = () => {
  return (
    <Inner>
    {projects.map((project ,index)=>{
     return(<Card {...project} key={index} i={index}/>)
    })}
   </Inner>
  )
}

export default HomePage