/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pic 3.png";

const imageAltText = "My name Alphabet to customize it";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Alpha Milestone Certificate 🎉",
    description:
      "Being Selected as an MLSA, and promoted to Alpha Milestone in a day is a big achievement for me.",
    url: "https://www.linkedin.com/posts/warabbasi4_microsoftlearnambassador-alpharank-achievementunlocked-activity-7103690475143913472-sbfI?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: "My MS Learn Profile",
    description:
      "Have learnt and achieved many trophies and Certificates throuh this.",
    url: "https://learn.microsoft.com/en-us/users/wardahabbasi-9756/?source=docs",
  },
  {
    title: "My LinkedIn Profile",
    description:
      "By connecting through LinkedIn, you can get tomknow about My career.",
    url: "https://www.linkedin.com/in/warabbasi4/",
  },
  {
    title: "My GitHub Profile",
    description:
      "Follow me on my GitHub and let's learn together",
    url: "https://github.com/war-abbasi",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
