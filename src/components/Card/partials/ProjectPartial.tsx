import React, { FC } from 'react';
import { StyledProjectPartial } from '../styles';
import UITextLabel from '../../TextLabel';

export const ProjectPartial: FC<{ environments: string[] }> = ({ environments }) => {
	const mappedEnvs = environments.map((env) => (
		<div key={env}>
			<UITextLabel link href="#">
				{env}
			</UITextLabel>
		</div>
	));
	return (
		<StyledProjectPartial>
			{mappedEnvs}
			<UITextLabel link href="#">
				View all
			</UITextLabel>
		</StyledProjectPartial>
	);
};
