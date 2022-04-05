import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="It is the third-generation language prediction model in the GPT-n series (and the successor to GPT-2) created by OpenAI, a San Francisco-based artificial intelligence research laboratory. GPT-3's full version has a capacity of 175 billion machine learning parameters. GPT-3, which was introduced in May 2020, and was in beta testing as of July 2020,is part of a trend in natural language processing (NLP) systems of pre-trained language representations." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="With Gpt3, you can chat directly with its Artificial Intelligence" />
      <Feature title="Knowledgebase" text="Increase your knowledgebase with GPT-3 as you get live updates within seconds of all the events happening around you, it could also be customized to just show your personal preference " />
      <Feature title="Education" text="GPT-3 can generate news articles which human evaluators have difficulty distinguishing from articles written by humans, GPT-3 has the potential to advance both the beneficial and harmful applications of language models." />
    </div>
  </div>
);

export default WhatGPT3