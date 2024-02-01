import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBookForm() {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState({
    name: '',
    description: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setBookData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', bookData.name);
    formData.append('description', bookData.description);

    if (bookData.image) {
      formData.append('image', bookData.image);
    }

    try {
      const response = await axios.post('http://localhost:8000/api/books', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Book added successfully:', response.data);

      // Navigate to the /library route after successful book addition
      navigate('/library');
    } catch (error) {
      console.error('Failed to add book', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 border shadow-lg">
        

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={bookData.name}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={bookData.description}
            onChange={handleChange}
            className="w-full border rounded py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 text-sm font-bold mb-2">
            Image:
          </label>
          <input type="file" id="image" name="image" onChange={handleChange} className="py-2" />
        </div>

        <button type="submit" className="bg-blue-500 text-72c775 py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBookForm;
