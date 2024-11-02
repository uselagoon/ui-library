import React, { FC, ReactNode } from 'react';
import { StyledEnvPartial } from '../styles';

export const EnvironmentPartial: FC<{ projectName: string | ReactNode; deployType: string; region?: string }> = ({
	projectName,
	deployType,
	region,
}) => {
	const projectDisplay = (
		<div className="lagooncard-project" key={`project-${projectName}`}>
			<span>PROJECT</span>
			<span className="project-name">{projectName}</span>

			<span>TYPE</span>
			<span className="type">{deployType}</span>

			{region ? (
				<>
					<span>REGION</span>
					<span className="region">{region}</span>
				</>
			) : null}
		</div>
	);

	return <StyledEnvPartial>{projectDisplay}</StyledEnvPartial>;
};
