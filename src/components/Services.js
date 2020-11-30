import React from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default function Services() {
  const state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails ",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, tempore!",
      },
      {
        icon: <FaHiking />,
        title: "free hiking ",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, tempore!",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttlevan ",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, tempore!",
      },
      {
        icon: <FaBeer />,
        title: "free beer ",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, tempore!",
      },
    ],
  };

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {state.services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
