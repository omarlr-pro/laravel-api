import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext';

function BookForm() {
  const { user } = useUserContext();
  const [bookData, setBookData] = useState({
    name: '',
    text: '', // Change 'image' to 'text'
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { addBook } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, text, description } = bookData;

    const addedBook = await addBook({ name, text, description });

    if (addedBook) {
      console.log('Book added successfully:', addedBook);
    } else {
      console.log('Failed to add book',addedBook);
    }
    setBookData({
      name: '',
      text: '', // Change 'image' to 'text'
      description: '',
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Book Name Input */}
        <div>
          <label htmlFor="bookName" className="block mb-2 text-sm font-medium text-gray-900">
            Book Name
          </label>
          <input
            type="text"
            id="bookName"
            name="name"
            value={bookData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Text Input (replacing Image Input) */}
        <div>
          <label htmlFor="bookText" className="block mb-2 text-sm font-medium text-gray-900">
            Text
          </label>
          <input
            type="text"
            id="bookText"
            name="text" // Change 'image' to 'text'
            value={bookData.text}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="bookDescription" className="block mb-2 text-sm font-medium text-gray-900">
            Description
          </label>
          <textarea
            id="bookDescription"
            name="description"
            value={bookData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default BookForm;
