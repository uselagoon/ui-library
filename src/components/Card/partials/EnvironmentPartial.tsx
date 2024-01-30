import React, { FC } from "react";
import { StyledEnvPartial } from "../styles";

export const EnvironmentPartial: FC<{ projects: { name: string }[] }> = ({
  projects,
}) => {
  const mappedProjects = projects.map((project) => {
    return (
      <div className="lagooncard-project">
        <span>Project</span>
        <span>{project.name}</span>
      </div>
    );
  });
  return <StyledEnvPartial>{mappedProjects}</StyledEnvPartial>;
};
