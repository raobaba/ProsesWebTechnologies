import axios from 'axios';

export const handleSubmit = async (formData) => {
  try {
    const response = await axios.post('http://localhost:8000/add', formData);
    console.log(response)
    console.log('Todo added successfully');
    window.location.reload();
  } catch (error) {
    console.error('Failed to add todo', error);
  }
};
export const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getAll');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

// api.js
export const deleteData = async (id) => {
    const response = await fetch(`http://localhost:8000/delete/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error deleting data');
    }
    // Optionally, you can return the response data if needed
    const data = await response.json();
    return data;
  };
  
  export const updateData = async (id, updatedData) => {
    try {
      const response = await fetch(`http://localhost:8000/edit/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });
      
      if (!response.ok) {
        throw new Error('Error updating data');
      }
      
      const updatedItem = await response.json();
      return updatedItem;
    } catch (error) {
      throw new Error(error.message);
    }
  };