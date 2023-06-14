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

  const handleComplete = (index) => {
    setData((prevState) => {
      const newData = [...prevState];
      newData[index] = {
        ...newData[index],
        completed: !newData[index].completed
      };
      return newData;
    });
  };
  return (
    <div className="details">
      {data.map((item, index) => (
        <div className={`input-data`} key={index}>
          <div className="task">
            <p className={item.completed ? 'completed-text' : ''}>{item.username}</p>
            <p className={item.completed ? 'completed-text' : ''}>{item.mobile}</p>
            <p className={item.completed ? 'completed-text' : ''}>{item.email}</p>
            <p className={item.completed ? 'completed-text' : ''}>{item.address}</p>
          </div>
          <div className="custom-button">
            <button onClick={() => handleComplete(index)}> {item.completed ? 'Completed' : 'Not Complete'}</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
