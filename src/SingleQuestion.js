import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// 2 here we set our props
const SingleQuestion = ({title,info}) => {
// here we will set or state for the info props which will be false
  const [showinfo , setShowinfo] = useState(false)
  return (
    <article className ='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=>{
          setShowinfo(!showinfo)
        }}>
          {showinfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
          
        </button>
                
      </header>
      {showinfo && <p>{info}</p>}
    </article>
  )
};

export default SingleQuestion;
