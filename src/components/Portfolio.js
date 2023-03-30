import React from 'react'
import { Link } from 'react-router-dom';
import { works } from './data/works';

export const Portfolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portfolio</h1>
      
      {
        works.map(work => {
          return (
            <article key={work.id}>
              <span>{work.category}</span>
              <h2><Link to={"/project/" + work.id}>{work.name}</Link></h2>
              <h3>{work.tecnology}</h3>
            </article>
          );
        })
      }
    </div>
  );
}
