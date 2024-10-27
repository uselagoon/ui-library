import React, { forwardRef } from 'react';

import { Tag, TagProps } from 'antd';
import colors from '../../_util/colors';
import {
	CheckCircleOutlined,
	PauseCircleOutlined,
	StopOutlined,
	SyncOutlined,
	WarningOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export type UITagProps = Omit<TagProps, 'color' | 'icon'> &
	(
		| {
				type: 'running' | 'complete' | 'failed' | 'error' | 'queued' | 'new';
		  }
		| {
				type: 'custom';
				color: string;
				icon: JSX.Element;
		  }
	);

const InternalTag: React.ForwardRefRenderFunction<HTMLSpanElement, UITagProps> = (
	{ className, children, type, ...props }: UITagProps,
	ref,
) => {
	if (type === 'custom') {
		return (
			<Tag ref={ref} className={className} {...props}>
				{children}
			</Tag>
		);
	}

	const tagColorMap = {
		new: {
			color: colors.purple,
			icon: <PauseCircleOutlined />,
		},
		running: {
			color: colors.blue,
			icon: <SyncOutlined spin />,
		},
		complete: {
			color: colors.green,
			icon: <CheckCircleOutlined />,
		},
		failed: {
			color: colors.orange,
			icon: <WarningOutlined />,
		},
		error: {
			color: colors.pink,
			icon: <StopOutlined />,
		},
		queued: {
			color: colors.yellow,
			icon: <SyncOutlined spin />,
		},
	};

	const currentTag = tagColorMap[type];
	return (
		<StyledTag ref={ref} className={className} color={currentTag.color} {...props}>
			{currentTag.icon} {capitalizeFirstLetter(type)}
		</StyledTag>
	);
};

const StyledTag = styled(Tag)`
	&.ant-tag {
		color: #272822;
		span[role='img'] {
			color: #272822;
		}
	}
`;

const StatusTag = forwardRef<HTMLSpanElement, UITagProps>(InternalTag);

StatusTag.displayName = 'StatusTag';

export default StatusTag;
