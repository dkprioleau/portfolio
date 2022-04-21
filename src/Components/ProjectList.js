import React from "react";
import { projectDataList } from "./projectData";
import Project from "./Project";
import projectStyle from "./Project.module.css";

// Displaying projects in list format
export default function ProjectList() {
  return (
    <section id="Projects">
      <div>
        <h1 className={projectStyle.projects}>Projects</h1>

        <ul className={projectStyle.project_Container}>
          {projectDataList.map((project) => {
            return (
              <div>
                {/* div is placed to prevent fragment error */}
                <li className={projectStyle.project_Li} key={project.id}></li>
                <Project
                  id={project.id}
                  name={project.name}
                  description={project.description}
                  sourceCode={project.sourceCode}
                  imageSrc={project.imageSrc}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
