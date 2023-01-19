import React from 'react';
import './Home.css';
import profileImg from '../docs/profile.jpg';

function Home() {
  return (
    <main className="home-page">
      <div className="hero">
        <div className="hero-text">
          <div>
            <h1 className="heading">Kurtis Grant</h1>
            <h2 className="sub-heading">Full Stack Developer from Ottawa,&nbsp;ON</h2>
          </div>
        </div>
        <div className="profile">
          <img src={profileImg} alt="Profile photo" />
        </div>
      </div>
      <div className="bio">

        <p>I am Kurtis, a full stack developer currently seeking a new role within a company where I can continue to apply myself and be challenged daily. I have a broad range of interests including business, economics, psychology and computer science and have a proven track record of delivering high-quality products and solving problems for businesses.</p>

        <p>As a full stack developer at U-Rite, a cutting-edge startup providing commercial underwriting software, I’ve honed my skills in JavaScript, React, and Redux on the frontend as well as C# on the backend. I played a key role in the implementation and configuration of AG-Grid, a JavaScript library that is now widely used throughout our product. This helped our team to deliver a high-quality, user-friendly application, with a focus on maintainable code.</p>

        <p>In my earlier years, I have worked with many small businesses and nonprofits, helping them to build creative solutions that solve their problems while considering design, user experience, and accessibility. My software development journey began after spending two years in my hometown of Bancroft, building simple websites and setting up SAAS products for several non-profits and small businesses. I have a solid understanding of HTML, CSS and JavaScript, and also studied web development independently for two years. Additionally, I completed Harvard University’s “CS50 - Intro to Computer Science” course, cemented my understanding of programming principles and introduced me to the Python programming language. I also took the opportunity to attend Canada’s Lighthouse Labs, a rigorous three-month full-time web development bootcamp, where I gained additional experience building numerous projects with JavaScript, React, and Ruby on Rails and got valuable team collaboration experience with Git.</p>

      </div>

    </main>


  );
}

export default Home;
