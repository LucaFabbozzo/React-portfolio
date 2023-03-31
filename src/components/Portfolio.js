import React from 'react'
import { Link } from 'react-router-dom';
import { ListWorks } from './ListWorks';

export const Portfolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portfolio</h1>

      <ListWorks />

    </div>
  );
}
