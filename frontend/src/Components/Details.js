import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Details() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getAll');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='details'>
      {data.map((item, index) => (
        <div className='input-data' key={index}>
          <div className='task'>
            <p>{item.username}</p>
            <p>{item.mobile}</p>
            <p>{item.email}</p>
            <p>{item.address}</p>
          </div>
          <div className='custom-button'>
            <button>Completed</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
