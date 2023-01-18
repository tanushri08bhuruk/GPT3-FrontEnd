import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'GPT-3 Efficiency',
    text: 'GPT-3 is the first-ever generalized language model in the history of natural language processing that can perform equally well on an array of NLP tasks.',
  },
  {
    title: 'OpenAI GPT-3 Architecture',
    text: 'The largest version GPT-3 175B or “GPT-3” has 175 B Parameters, 96 attention layers and 3.2 M batch size.',
  },
  {
    title: 'Creation of apps and layout tools',
    text: 'Jordan Singer tested GPT-3 to create an app by only providing a description for GPT-3 and succesfully created an App. ',
  },
  {
    title: 'Turning Legal text into plain English',
    text: 'We can train GPT-3 to turn legal text into simple and plain English without using a code.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now Here and You Just Need to Realize It. Step into the Future Today & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;