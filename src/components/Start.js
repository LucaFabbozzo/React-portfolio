import React from 'react'
import { Link } from 'react-router-dom';

export const Start = () => {
  return (
    <div>
      <h1>
        Hello, my name is Luca Fabbozzo and I'm a web developer based in Milan.
        I specialize in providing programming and development services for
        various types of web projects.
      </h1>
      <h3>
        Whether it's building a website from scratch, improving an existing
        site, or implementing new features, I have the skills and experience
        necessary to deliver high-quality results. Please feel free to reach out
        to me for any of your web development needs!
        <Link to="/contact">Contact me.</Link>
      </h3>

      <section className="lasts-works">
        <h2>My lasts projects</h2>
        <p>These are some of my web development works</p>
        <div className="works"></div>
      </section>
    </div>
  );
}
