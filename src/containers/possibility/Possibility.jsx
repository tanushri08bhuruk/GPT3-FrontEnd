import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>GPT-3 is beginning to trend and take center stage in the internet world. What makes it even more interesting is the fact that it can do a wide range of things and tasks using the same algorithm. It can code, chat, write applications, create content, write an email or blog post, play chess with you, and can even chit chat with you.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;