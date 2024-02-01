// BookDetails.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PublieurApi from '../service/api/PublieurApi';
import './cssb/Details.css';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [critique, setCritique] = useState('');
  const [rating, setRating] = useState(0);
  const [critiques, setCritiques] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setCritiques(response.data.critiques || []);
      })
      .catch((error) => {
        console.error('Error fetching book details:', error);
      });
  }, [id]);

  useEffect(() => {
    // Fetch critiques for the specific book by ID
    axios
      .get(`http://localhost:8000/api/critiques/${id}`)
      .then((response) => {
        setCritiques(response.data || []); // Update this line
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching critiques:', error);
      });
  }, [id]);

  useEffect(() => {
    if (!window.localStorage.getItem('access_token')) {
      // Handle the case when the user is not authenticated
    }

    PublieurApi.getUser()
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('User API Error:', error);
      });
  }, []);

  const handleAddCritique = () => {
    if (!critique.trim() || rating < 1 || rating > 5) {
      console.error('Invalid critique or rating');
      return;
    }

    axios
      .post(`http://localhost:8000/api/critiques`, {
        user: user.name,
        book_id: id,
        content: critique,
        rating: rating,
      })
      .then((response) => {
        setCritiques([...critiques, response.data]);
        setCritique('');
        setRating(0);
        console.log('Critique added successfully');
      })
      .catch((error) => {
        console.error('Error adding critique:', error);
        // Provide feedback to the user, e.g., show an error message
      });
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Book Details</h2>
      <strong>{book.name}</strong>
      <p>{book.description}</p>
      {book.image && (
        <img
          src={book.image}
          alt={book.name}
          style={{ maxWidth: '300px', margin: '20px auto', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', transition: 'transform 0.3s ease-in-out' }}
        />
      )}

      <div>
        <h3>Critiques</h3>
        {critiques.length === 0 ? (
          <p>No critiques available.</p>
        ) : (
          <ul>
            {critiques.map((critique, index) => (
              <li key={index}>
                {critique.user}: {critique.content} - Rating: {critique.rating}
              </li>
            ))}
          </ul>
        )}

        <div className="add-critique-container">
          <textarea
            placeholder="Enter your critique..."
            value={critique}
            onChange={(e) => setCritique(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter your rating (1-5)"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value, 10))}
          />
          <button onClick={handleAddCritique}>Add Critique</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
