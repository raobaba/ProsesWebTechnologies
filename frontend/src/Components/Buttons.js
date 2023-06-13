import React from 'react';
import '../App.css'
export default function Buttons() {
  return (
    <div className='button'>
      <form className="todo-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter name" required />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Enter description"
            required
          />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}


