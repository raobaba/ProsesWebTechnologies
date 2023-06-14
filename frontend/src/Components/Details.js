import React from 'react'

export default function Details() {
  return (
    <div className='details'>
      <div className='input-data'>
        <p>username</p>
        <p>mobileNo</p>
        <p>email</p>
        <p>address</p>
      </div>
      <div className='custom-button'>
         <button>comleted</button>
         <button>edit</button>
         <button>delete</button>
      </div>
    </div>
  )
}
