import React from "react";
import projectStyle from "./Project.module.css";

//Individual project format

export default function Project({ name, imageSrc, description, sourceCode, id }) {
    // destructuring object props
    // remember to take off or add id props
  return (
    <div>
      <h3>{name}</h3>
      <div className={projectStyle.items_Container}>
        <img src={imageSrc} alt={name} />
        <div>
          <p>{description}</p>
          <a href={sourceCode}>link to source code</a>
          <a href="">view</a> 
        </div>
      </div>
    </div>
  );
}
