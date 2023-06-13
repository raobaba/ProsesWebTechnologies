import React from 'react'

export default function buttons() {
  return (
    <div>
       <form  style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Name"
        required
      />
      <input
        type="text"
        placeholder="Description"
        required
      />
      <button type="submit">Add Todo</button>
    </form>
    </div>
  )
}
