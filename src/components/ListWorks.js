import React from "react";
import { Link } from "react-router-dom";
import { works } from "./data/works";

export const ListWorks = ({limit = 10}) => {
  return (
      <section className="works">
        {works.slice(0, limit).map((work) => {
          return (
            <article key={work.id} className="work-item">
              <div className="mask">
                <img src={"/images/" + work.id + ".png"} alt={work.name} />
              </div>
              <span>{work.category}</span>
              <h2>
                <Link to={"/project/" + work.id}>{work.name}</Link>
              </h2>
              <h3>{work.tecnology}</h3>
            </article>
          );
        })}
      </section>
  );
};
