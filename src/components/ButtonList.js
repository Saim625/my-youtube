import React from 'react'
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
  )
}

export default ButtonList