import React from 'react'
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section_margin' id='wgpt3'>
    <div className='gpt3__whatgpt3-feature'>
      <Feature title='What is GPT-3?' text='A cutting-edge language processing AI model created by OpenAI. It can produce writing that is human-like and has a variety of uses, including translation services, language modelling, and creating text for chatbots and other applications.' />
    </div>
    <div className='gpt3__whatgpt3-heading'>
      <h1 className='gradient__text'>The Possibilities Are Beyond Your Imagination</h1>
      <p>Explore The Library</p>
    </div>
    <div className='gpt3__whatgpt3-container'>
      <Feature title='Chatbots' text='Launched by OpenAI in November 2022, ChatGPT is a chatbot. The GPT-3 family of enormous language models from OpenAI is the foundation upon which it is constructed, and it is tweaked using both supervised and reinforcement pedagogies.'/>
      <Feature title='Knowledgebase' text='Use an existing dataset that is almost any size and form, or add data gradually based on user input. One API customer was able to raise proper outputs from 83% to 95% with fine-tuning. Another company cut their mistake rates in half by adding fresh data from their product every week.'/>
      <Feature title='Education' text='GPT-3 can be used to address a variety of issues in the educational field. By raising the calibre of the instructors, pupils, and curriculum, it can contribute to better education. By cutting down on the amount of time spent on problem-solving, it can raise educational standards.'/>
    </div>
    </div>
  )
}

export default WhatGPT3