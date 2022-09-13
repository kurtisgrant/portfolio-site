import React from 'react';
import Button from '../components/Button';
import './Thordle.css';
import { ReactComponent as Github } from '../docs/github.svg';
import { ReactComponent as ExternalLink } from '../docs/external-link.svg';

function Thordle() {
  return (
    <main className="project-page">
      <div className="hero">
        <div className="hero-text">
          <h1 className="heading">Thordle</h1>
          <h2 className="sub-heading">An ~exhilarating~ daily word puzzle</h2>
        </div>
        <div className="links">
          <Button href="https://thordle.com">{<><ExternalLink /> thordle.com</>}</Button>
          <Button href="https://github.com/kurtisgrant/thordle">{<Github />} GitHub repo</Button>
        </div>
      </div>
      <div className="tag-container">
        <span>react</span>
        <span>typescript</span>
        <span>unit-testing</span>
        <span>styled-components</span>
        <span>local storage</span>
        <span>animation</span>
        <span>framer-motion</span>
      </div>
      <article>
        <p>Thordle is an adaptation of the popular word puzzle game Wordle. In addition to core gameplay logic, Thordle features complex conditional rendering, state management and CSS animations. It also features user stats stored in local storage.</p>
      </article>
    </main>
  );
}

export default Thordle;