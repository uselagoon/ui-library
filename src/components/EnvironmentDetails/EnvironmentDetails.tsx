import React, { FC } from 'react';

import UIDetails from '../Details';

export interface EnvironmentDetailsType {
	environmentType: React.ReactNode;
	deploymentType: React.ReactNode;
	created: React.ReactNode;
	source: React.ReactNode;
	standbyRoutes: React.ReactNode;
	routes: React.ReactNode[];
	deployKey: React.ReactNode;
}

const mapToLabel = (propName: string) => {
	enum labelMap {
		environmentType = 'ENVIRONMENT TYPE',
		deploymentType = 'DEPLOYMENT TYPE',
		created = 'CREATED',
		source = 'SOURCE',
		standbyRoutes = 'STANDBY ENVIRONMENT ROUTES',
		deployKey = 'DEPLOY KEY',
	}

	return labelMap[propName as keyof typeof labelMap] || propName;
};

const LagoonEnvironmentDetails: FC<EnvironmentDetailsType> = (props) => {
	let routeCount = 0;

	const { environmentType, deploymentType, created, source, standbyRoutes, routes, deployKey } = props;
	const items = Object.keys({
		environmentType,
		deploymentType,
		created,
		source,
		standbyRoutes,
		routes,
		deployKey,
	})
		.map((propName) => {
			if (propName === 'routes') {
				return props[propName].map((route, idx) => {
					return {
						key: `${propName}-${idx}`,
						label: `Route ${++routeCount}`,
						children: route,
					};
				});
			}

			return {
				key: propName,
				span: 1,
				label: mapToLabel(propName),
				//@ts-ignore
				children: props[propName],
			};
		})
		.flat();

	return <UIDetails bordered items={items} />;
};

LagoonEnvironmentDetails.displayName = 'LagoonEnv';

export default LagoonEnvironmentDetails;
