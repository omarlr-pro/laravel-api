import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import PublieurApi from '../service/api/PublieurApi';

function Userinfo() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [newBook, setNewBook] = useState({
    name: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    if (!window.localStorage.getItem('access_token')) {
      navigate(Login);
    }
    PublieurApi.getUser().then(response => {
      setUser(response.data);
    }).catch(error => {
      console.error('User API Error:', error);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddBook = () => {
    // Call your API or perform actions to add the new book
    console.log('Adding new book:', newBook);
    // Reset the newBook state after adding
    setNewBook({
      name: '',
      image: '',
      description: '',
    });
  };

  return (
    <>
      <h1>hey {user.name}</h1>
      <ul>
        {/* ... existing content ... */}
      </ul>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Add a New Book</h2>
        <div className="flex flex-col">
          <label className="mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={newBook.name}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-2">Image URL:</label>
          <input
            type="text"
            name="image"
            value={newBook.image}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="mb-2">Description:</label>
          <textarea
            name="description"
            value={newBook.description}
            onChange={handleInputChange}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleAddBook}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
        >
          Add Book
        </button>
      </div>
    </>
  );
}

export default Userinfo;
