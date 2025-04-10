import React from "react";

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github} target="_blank" rel="noreferrer">
        {github}
      </a>
      <br />
      <a href={linkedin} target="_blank" rel="noreferrer">
        {linkedin}
      </a>
    </div>
  );
}

export default Links;