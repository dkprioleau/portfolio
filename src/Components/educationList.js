import React from "react";
import { educationDataList } from "./educationData";
import Education from "./Education";
import educationStyle from "./Education.module.css";

export default function educationList() {
  return (
    <section id="Education">
      <div>
        <h1 className={educationStyle.education}>Education</h1>
        <div className={educationStyle.education_Container}>
          <ul className={educationStyle.flex_Boxes}>
            {educationDataList.map((education) => {
              return (
                <div>
                  <li className={educationStyle.education_Li}>
                    <Education
                      achievement={education.achievement}
                      program={education.program}
                      date={education.date}
                    />
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
