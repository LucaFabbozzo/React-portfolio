import React from 'react'
import { works } from './data/works';

export const Portfolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portfolio</h1>
      
      {
        works.map(work => {
          {console.log(work)}
          <article>
            <h2>{work.name}</h2>
          </article>
        })
      }
    </div>
  );
}
