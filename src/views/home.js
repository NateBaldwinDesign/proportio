import React from "react";

const Home = (props) => {
  return (
    <>
      <main className="mainPageContent">
        <article>
          <h1 className="display1">Give your system the Midas' touch.</h1>
          <p className="body1">
            Proportional systems-design tool for mature design systems.
          </p>
        </article>
        <article>
          <h2>Proportional, generative design</h2>
          <p>
            Midas provides you with methods to experiment with proportional
            scaling. The same approach used for creating{" "}
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
            Midas is an open-source tool, created by design systems
            practitioners looking for better design tools.
          </p>
          <p>Contributions welcome!</p>
        </article>
      </main>
    </>
  );
};

export default Home;
