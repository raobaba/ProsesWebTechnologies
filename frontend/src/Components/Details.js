import React, { useState, useEffect } from 'react';
import { fetchData, deleteData, updateData } from '../api';

export default function Details() {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [updatedData, setUpdatedData] = useState({
    username: '',
    mobile: '',
    email: '',
    address: ''
  });

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    const newData = await fetchData();
    setData(newData);
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

  const handleDelete = async (id) => {
    try {
      await deleteData(id);
      setData((prevState) => prevState.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setUpdatedData({
      username: data[index].username,
      mobile: data[index].mobile,
      email: data[index].email,
      address: data[index].address
    });
  };

  const handleUpdate = async (index) => {
    try {
      await updateData(data[index]._id, updatedData);

      setData((prevState) => {
        const newData = [...prevState];
        newData[index] = {
          ...newData[index],
          username: updatedData.username,
          mobile: updatedData.mobile,
          email: updatedData.email,
          address: updatedData.address
        };
        return newData;
      });

      setEditIndex(-1);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="details">
      {data.map((item, index) => (
        <div className={`input-data`} key={index}>
          <div className="task">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  name="username"
                  value={updatedData.username}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="mobile"
                  value={updatedData.mobile}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="email"
                  value={updatedData.email}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="address"
                  value={updatedData.address}
                  onChange={handleInputChange}
                />
              </>
            ) : (
              <>
                <p className={item.completed ? 'completed-text' : ''}>{item.username}</p>
                <p className={item.completed ? 'completed-text' : ''}>{item.mobile}</p>
                <p className={item.completed ? 'completed-text' : ''}>{item.email}</p>
                <p className={item.completed ? 'completed-text' : ''}>{item.address}</p>
              </>
            )}
          </div>
          <div className="custom-button">
          <button onClick={() => handleComplete(index)}>
              {item.completed ? 'Completed' : 'Not Complete'}
            </button>
            {editIndex === index ? (
              <button onClick={() => handleUpdate(index)}>Update</button>
            ) : (
              <button onClick={() => handleEdit(index)}>Edit</button>
            )}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
