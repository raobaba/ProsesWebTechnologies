import React from 'react';
import '../App.css'
export default function Buttons() {
  return (
    <div className='button'>
      <form className="todo-form">
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" placeholder="Enter username" required />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNo">Mobile No</label>
          <input
            type="number" id="mobileNo" maxLength={10} minLength={10} placeholder="Enter mobileNo" required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Enter address" required />
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}


