import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditionally render bio */}
      {bio && bio.trim() && <p>{bio}</p>}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* Pass github and linkedin props down to the Links component */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;