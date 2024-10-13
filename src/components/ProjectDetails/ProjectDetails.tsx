import React, { FC } from 'react';

import UIDetails from '../Details';

export interface ProjectDetailsType {
	created: React.ReactNode;
	origin: React.ReactNode;
	gitUrl: React.ReactNode;
	devEnvsInUse: React.ReactNode;
	branchesEnabled: React.ReactNode;
	prsEnabled: React.ReactNode;
	deployKey: React.ReactNode;
}

const mapToLabel = (propName: string) => {
	enum labelMap {
		created = 'CREATED',
		origin = 'ORIGIN',
		gitUrl = 'GIT URL',
		devEnvsInUse = 'DEVELOPMENT ENVIRONMENTS IN USE',
		branchesEnabled = 'BRANCHES ENABLED',
		prsEnabled = 'PULL REQUESTS ENABLED',
		deployKey = 'DEPLOY KEY',
	}

	return labelMap[propName as keyof typeof labelMap] || propName;
};

const LagoonProjectDetails: FC<ProjectDetailsType> = (props) => {
	const { created, origin, gitUrl, devEnvsInUse, branchesEnabled, prsEnabled, deployKey } = props;
	const items = Object.keys({
		created,
		origin,
		gitUrl,
		devEnvsInUse,
		branchesEnabled,
		prsEnabled,
		deployKey,
	}).map((propName) => {
		return {
			key: propName,
			label: mapToLabel(propName),
			//@ts-ignore
			children: props[propName] === true ? 'True' : props[propName],
		};
	});

	return <UIDetails bordered items={items} />;
};

LagoonProjectDetails.displayName = 'LagoonProjectDetails';

export default LagoonProjectDetails;
