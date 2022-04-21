import React from "react";


export default function Education({ achievement, program, date }) {
  return (
    <div> 
      <h3>{achievement}</h3>
      <p>{program}</p>
      <p>{date}</p>
    </div>
  );
}
