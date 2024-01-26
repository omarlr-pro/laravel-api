import React, { useContext } from "react";
import './css/bStyle.css'
import {  userStateContext } from "../context/UserContext";
function Home() {
  const randomImageId = Math.floor(Math.random() * 1000) + 1;

  const randomImageUrl = `https://picsum.photos/300/200?random=${randomImageId}`;

  const sectionStyle = {
    background: `url(/images/cover.jpg) no-repeat center center`,
    backgroundSize: 'cover',
    padding: '1.5rem 9%',
  };
  const context = useContext(userStateContext);

  return (
    
    <section className="home" id="home" style={sectionStyle}>
      {context.user.name }
      <div className="row">
        <div className="content">
          <h3>NEW BOOK</h3>
          <p>A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.</p>
          <a href="#" className="btn">reading</a>
        </div>
        <div className="book">
          <div className="container">
            <div className="book">
              <div className="front">
                <div className="cover">
                  <img className="img2" src={randomImageUrl} alt="" />
                </div>
              </div>
              <div className="left-side">
                <h2>
                  <span>omaaaaaar</span>
                  <span>2024</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Home;
  