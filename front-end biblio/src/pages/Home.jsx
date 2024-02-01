import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { userStateContext } from "../context/UserContext";
import './css/bStyle.css';

function Home() {
  const [books, setBooks] = useState([]);
  const context = useContext(userStateContext);

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

  const getRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * books.length);
    return books[randomIndex];
  };

  const randomBook = getRandomBook();

  const sectionStyle = {
    background: `url(/images/cover.jpg) no-repeat center center`,
    backgroundSize: 'cover',
    padding: '1.5rem 9%',
  };

  return (
    <section className="home" id="home" style={sectionStyle}>
      {context.user.name}
      <div className="row">
        {randomBook && (
          <div className="content">
            <h3>{randomBook.name}</h3>
            <p>{randomBook.description}</p>
            <a href="#" className="btn">reading</a>
          </div>
        )}
        <div className="book">
          {randomBook && (
            <div className="container">
              <div className="book">
                <div className="front">
                  <div className="cover">
                    <img className="img2" src={randomBook.image} alt={randomBook.name} />
                  </div>
                </div>
                <div className="left-side">
                  <h2>
                    <span>{randomBook.name}</span>
                    <span>{randomBook.created_at}</span>
                  </h2>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
