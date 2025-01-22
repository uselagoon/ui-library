import React, { FC } from 'react';
import { Steps, StepsProps } from 'antd';
import styled from 'styled-components';

const UISteps: FC<StepsProps> = (props) => {
	const { className, style, ...rest } = props;

	return <StyledSteps size="default" style={style} className={className} {...rest} />;
};

UISteps.displayName = 'Steps';
const StyledSteps = styled(Steps)``;

export type { StepsProps as UIStepsProps };

export default UISteps;
