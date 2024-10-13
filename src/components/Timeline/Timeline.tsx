import React, { forwardRef } from 'react';
import { Timeline } from 'antd';
import styled from 'styled-components';
import { CarryOutOutlined, CloudUploadOutlined, EyeOutlined, RightOutlined } from '@ant-design/icons';
import UIStatusTag from '../StatusTag';
import colors from '../../_util/colors';

type Status = 'complete' | 'error' | 'failed' | 'queued' | 'running';

type DeploymentItems = {
	environment: string;
	deployName: string;
	status: Status;
	date: string;
};

type TaskItems = {
	environment: string;
	taskName: string;
	status: Status;
	navigationFunction: () => void;
};

export type LagoonTimelineProps =
	| {
			type: 'deployment';
			items: DeploymentItems[];
	  }
	| {
			type: 'task';
			items: TaskItems[];
	  };

const mapItems = (type: 'task' | 'deployment', items: DeploymentItems[] | TaskItems[], dot: JSX.Element) => {
	if (type === 'deployment') {
		return (items as DeploymentItems[]).map((deployment) => {
			const { environment, deployName, status, date } = deployment;
			return {
				dot,
				children: (
					<StyledItems>
						<span className="deploy-env">{environment}</span>
						<RightOutlined />
						<span className="deploy-name">{deployName}</span>
						<UIStatusTag type={status} />
						<span className="deploy-date">{date}</span>
					</StyledItems>
				),
			};
		});
	}

	return (items as TaskItems[]).map((task) => {
		const { taskName, environment, status, navigationFunction } = task;
		return {
			dot,
			children: (
				<StyledItems>
					<span className="task-env">{environment}</span>
					<RightOutlined />
					<span className="task-name">{taskName}</span>

					<UIStatusTag type={status} />

					<EyeOutlined className="task-link" onClick={() => navigationFunction} />
				</StyledItems>
			),
		};
	});
};

const InternalTimeline: React.ForwardRefRenderFunction<HTMLElement, LagoonTimelineProps> = ({ items, type }, ref) => {
	const iconToUse = type === 'deployment' ? <CloudUploadOutlined /> : <CarryOutOutlined />;

	const timelineItems = mapItems(type, items, iconToUse);

	return (
		<StyledTimelineContainer ref={ref}>
			<Timeline mode="left" items={timelineItems} />
		</StyledTimelineContainer>
	);
};

const StyledTimelineContainer = styled.section`
	.ant-timeline {
		background-color: transparent;
		padding-top: 0.5rem;
		.ant-timeline-item {
			color: ${(props) => props.theme.UI.texts.primary};
			.ant-timeline-item-tail {
				transform: translate(1rem, 5px);
				height: calc(100% - 20px);
				background: ${(props) => props.theme.UI.texts.timeline};
			}
			.ant-timeline-item-head {
				background-color: transparent;
				span[role='img'] {
					transform: translate(1rem, 0);
					color: ${(props) => props.theme.UI.texts.timeline};
				}
			}
		}
	}
`;

const StyledItems = styled.div`
	padding-bottom: 24px;
	padding-left: 26px;
	display: flex;
	gap: 8px;

	span.deploy-env,
	span.task-env {
		font-family: 'AmericaMono-Regular', sans-serif;
	}
	span {
		font-family: 'ArabicPro-Regular', sans-serif;
		color: ${(props) => (props.theme.colorScheme === 'dark' ? '#fff' : '#222')};
	}
	span.deploy-date {
		display: inline-block;
		margin-left: auto;
		color: #808080;
	}
	.task-link {
		color: ${colors.lagoonBlue};
		font-size: 22px;
	}
`;

const LagoonTimeline = forwardRef<HTMLElement, LagoonTimelineProps>(InternalTimeline);

LagoonTimeline.displayName = 'LagoonTimeline';

export default LagoonTimeline;
