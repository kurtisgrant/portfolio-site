import React from 'react';
import './Home.css';
import profileImg from '../docs/profile.jpg';

function Home() {
  return (
    <main>
      <div className="hero">
        <div className="hero-text">
          <div>
            <h2 className="heading">Kurtis Grant</h2>
            <h3 className="sub-heading">Full Stack Developer from Ottawa,&nbsp;ON</h3>
          </div>
        </div>
        <div className="profile">
          <img src={profileImg} alt="Profile photo" />
        </div>
      </div>
      <div className="bio">

        <p>Hi there, I’m Kurtis! I’m an avid problem solver with endless curiosity and a broad range of interests, including business, economics, psychology and computer science. I’ve worked with many small businesses and love building creative solutions that solve their problems while considering design, user experience and accessibility.</p>

        <p>My software development journey began after spending two years in my small rural hometown of Bancroft, building simple websites and setting up SAAS products for several non-profits and small businesses. During this time, I discovered my love of diagnosing and coming up with solutions to problems organizations face when they don’t have the right digital tools to do their jobs efficiently.</p>

        <p>In 2019, I began experimenting with a no-code online database called Knack, which I used to help a few non-profits replace the frustrating, messy spreadsheet systems they had used for years. This work ultimately led to my wanting to build more robust applications better tailored to the needs of the businesses I serve.</p>

        <p>In the years following, I studied web development independently for two years, gaining a solid understanding of HTML, CSS and JavaScript through online courses and the highly regarded “Eloquent JavaScript” textbook. After this, I completed Harvard University’s “CS50 - Intro to Computer Science” course, cementing my understanding of programming principles and introducing me to the Python programming language.</p>

        <p>As I was preparing to begin my job search, I came across an opportunity to attend Canada’s Lighthouse Labs, a rigorous three-month full-time web development bootcamp. I took this opportunity and gained additional experience building numerous projects with JavaScript, React and Ruby on Rails. I also got valuable team collaboration experience with Git, something I previously lacked as a self-taught developer.</p>

        <p>At Lighthouse Labs, I pushed myself to go above and beyond the course’s expectations, completing additional course work, reading independently about the intricacies of the technologies we used and taking advantage of the expertise of my lecturers by staying late to discuss advanced topics.</p>

        <p>My next immediate goal is to find a role within a company where I can continue to apply myself, be challenged daily and continue learning at an accelerated pace.</p>

      </div>

    </main>


  );
}

export default Home;