import React from 'react'
<<<<<<< HEAD
import { Button } from './Button'

const ButtonList = () => {

  const list = ['All','Live','Cricket','Football','News','Music','Soccer','Politics','Gaming','Science','React']

  return (
    <div className='flex p-2'>
      {
        list.map((button,index)=>(
          <Button key={index} name={button}/>
        ))
      }
    </div>
=======

const ButtonList = () => {
  return (
    <div>ButtonList</div>
>>>>>>> 91a84d1c483a1349bf7512de582a87094ee15c01
  )
}

export default ButtonList