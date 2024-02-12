import React, { FC } from "react";
import { StyledEnvPartial } from "../styles";

export const EnvironmentPartial: FC<{ projects: { name: string }[] }> = ({
  projects,
}) => {
  const mappedProjects = projects.map((project,idx) => {
    return (
      <div className="lagooncard-project" key={`project-${idx}-${project.name}`}>
        <span>Project</span>
        <span>{project.name}</span>
      </div>
    );
  });
  return <StyledEnvPartial>{mappedProjects}</StyledEnvPartial>;
};
