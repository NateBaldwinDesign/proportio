import React from 'react';
import { useRecoilState } from 'recoil';
import '../styles/hero.css';

const Home = (props) => {
  return (
    <>
      <div className="hero">
        <div className="hero_content">
          <h1 className="hero_title">
            Proportional scaling and balance for your entire design system.
          </h1>
        </div>
      </div>
      <main className="mainPageContent">
        <article>
          <h2>Proportional, generative design</h2>
          <p>
            Proportio provides you with methods to experiment with proportional
            scaling. The same approach used for creating{' '}
            <strong>modular type scales</strong> is applied to every aspect of
            user interface design:
          </p>
          <ul>
            <li>Typography</li>
            <li>Spacing</li>
            <li>Iconography</li>
            <li>Type & icon pairing</li>
            <li>Border radius</li>
            <li>Elevation (shadows)</li>
            <li>Component sizes</li>
            <li>Component densities</li>
          </ul>
        </article>
        <article>
          <h2>Open-source</h2>
          <p>
            Proportio is an open-source tool, created by design systems
            practitioners looking for better design tools.
          </p>
          <p>Contributions welcome!</p>
        </article>
      </main>
    </>
  );
};

export default Home;
