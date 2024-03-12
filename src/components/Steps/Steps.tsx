import React, { FC } from 'react';
import { Steps, StepsProps } from 'antd';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

const UISteps: FC<StepsProps> = (props) => {
	const { className, style, ...rest } = props;

	return <StyledSteps size="default" style={style} className={className} {...rest} />;
};

UISteps.displayName = 'Steps';
const StyledSteps = styled(Steps)`
	&.ant-steps {
		max-width: 100%;
		font-family: 'ArabicPro-Regular', sans-serif;

		.ant-steps-item.ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {
			color: ${colors.gray};
		}

		.ant-steps-item.ant-steps-item-finish.ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {
			color: ${colors.lagoonBlue};
		}

		.ant-steps-item .ant-steps-item-content {
			.ant-steps-item-title {
				font-size: 1rem;

				${(props) =>
					props.theme.colorScheme === 'dark' &&
					css`
						color: #fff;

						&::after {
							background-color: ${colors.lagoonBlue};
						}
					`}
			}
			.ant-steps-item-description {
				${(props) =>
					props.theme.colorScheme === 'dark' &&
					css`
						color: ${colors.white};
					`}
			}
		}
	}
`;

export type { StepsProps as UIStepsProps };

export default UISteps;
