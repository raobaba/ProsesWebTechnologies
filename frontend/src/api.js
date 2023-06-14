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
