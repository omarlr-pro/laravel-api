import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './cssb/Affiche.css';

function AfficheBook() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch books from the API
    axios.get('http://localhost:8000/api/books')
      .then(response => {
        const booksWithAbsoluteImagePaths = response.data.map(book => ({
          ...book,
          // Assuming 'image' is the correct property name
          image: `http://localhost:8000/storage/${book.image}`
        }));
        setBooks(booksWithAbsoluteImagePaths);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  const handleShowDetails = (bookId) => {
    window.location.href = `/book/${bookId}`;
  };

  // Filter books based on search term
  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lctoba">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search books by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border rounded py-2 px-3"
        />
      </div>

      {filteredBooks.map(book => (
        <div key={book.id} className="container1 mt-4">
          <div className="book1">
            <div className="front">
              <div className="cover1">
                <img className="img1" src={book.image} alt={book.name} />
              </div>
            </div>
            <div className="left-side1">
              <h2>
                <span className="text-lg font-semibold">{book.name}</span>
                <span className="text-sm text-gray-500">{book.created_at}</span>
              </h2>
            </div>
          </div>
          <div className="mt-2 text-center">
            <span className="text-lg font-semibold">{book.name}</span>
          </div>
          <div className="botona mt-2">
            <button className="reading" onClick={() => handleShowDetails(book.id)}>
              Reading
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AfficheBook;
