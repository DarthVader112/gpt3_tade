import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p> Because GPT-3 is structurally similar to its predecessors, its higher level of accuracy is attributed to its increased capacity and higher number of parameters. GPT-3's capacity is ten times larger than that of Microsoft's Turing NLG, the next largest NLP model. Sixty percent of the weighted pre-training dataset for GPT-3 comes from a filtered version of Common Crawl consisting of 410 billion byte-pair-encoded tokens.</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility