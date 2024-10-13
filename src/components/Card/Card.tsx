import React, { forwardRef, ReactNode, useState } from 'react';
import { CardProps as AntCardProps, Skeleton } from 'antd';
import { LoadingCard, StyledCard } from './styles';
import { NewCard } from './partials/NewCard';
import LagoonCardLabel, { LagoonCardLabelProps } from '../CardLabel';
import {
	EditOutlined,
	EllipsisOutlined,
	EyeOutlined,
	FrownOutlined,
	LinkOutlined,
	MehOutlined,
	SettingOutlined,
	SmileOutlined,
} from '@ant-design/icons';
import colors from '../../_util/colors';
import { EnvironmentPartial } from './partials/EnvironmentPartial';
import { ProjectPartial } from './partials/ProjectPartial';

type DefaultProps = {
	loading?: boolean;
	title: string;
	status: 'low' | 'medium' | 'high';
	styles?: React.CSSProperties;
	cardClassName?: string;
	navigateTo?: () => void;
	isProd?: boolean;
};

// TODO: proper env type
type ProjectCard = {
	type: 'project';
	environments: string[];
};

// TODO: proper project type
type EnvCard = {
	type: 'environment';
	envType: LagoonCardLabelProps['type'];
	projectName: string | ReactNode;
	deployType: string;
	region?: string;
};

type NewCard = {
	type: 'new';
};

type LoaderCard = {
	type: 'loaderOnly';
};

export type CardProps = (ProjectCard & DefaultProps) | (EnvCard & DefaultProps) | NewCard | LoaderCard;

export type InternalCardProps = Pick<AntCardProps, 'bodyStyle' | 'headStyle' | 'bordered' | 'size'> & CardProps;

const InternalCard: React.ForwardRefRenderFunction<HTMLDivElement, InternalCardProps> = (
	props: InternalCardProps,
	ref,
) => {
	const [isSelecting, setIsSelecting] = useState(false);
	const { type: cardType } = props;

	if (cardType === 'new') return <NewCard ref={ref} />;

	if (cardType === 'loaderOnly') return <LoadingCard loading={true} />;

	const { type, loading, title, cardClassName, styles, status = 'low', navigateTo, isProd, ...rest } = props;

	const getStatusIcon = (status: DefaultProps['status']) => {
		switch (status) {
			case 'high':
				return <FrownOutlined style={{ color: colors.pink }} />;

			case 'medium':
				return <MehOutlined style={{ color: colors.orange }} />;

			case 'low':
				return <SmileOutlined style={{ color: colors.green2 }} />;

			default:
				return <></>;
		}
	};

	const cardLabelType = type === 'project' ? 'project' : props.envType;

	const navigatorFn = navigateTo ? navigateTo : () => {};

	// TODO: click handlers
	const actions = {
		project: [
			<SettingOutlined key="setting" />,
			<EditOutlined key="edit" onClick={navigatorFn} />,
			<EllipsisOutlined key="ellipsis" />,
		],
		environment: [
			<SettingOutlined key="setting" />,
			<EyeOutlined key="view" onClick={navigatorFn} />,
			<EllipsisOutlined key="ellipsis" />,
		],
	};

	// TODO: associated actions
	const extraIcons = [<LinkOutlined key="link" />, getStatusIcon(status)];

	const computedCardType = (
		<Skeleton loading={loading} active>
			<LagoonCardLabel type={cardLabelType} />
			{type === 'environment' ? (
				<EnvironmentPartial projectName={props.projectName} deployType={props.deployType} region={props.region} />
			) : (
				<ProjectPartial environments={props.environments} />
			)}
		</Skeleton>
	);

	// for better UX lets only register nav click if the user is not selecting a text or using action buttons
	const handleMouseDown = () => {
		setIsSelecting(false);
	};

	const handleMouseUp = () => {
		const selectedText = window.getSelection()?.toString();
		if (selectedText) {
			setIsSelecting(true);
		}
	};

	const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const clickedElement = e.target as HTMLElement;

		// check if the clicked element or its ancestors have the class 'ant-card-actions'
		if (!isSelecting && !clickedElement.closest('.ant-card-actions')) {
			navigatorFn();
		}
	};

	return (
		<StyledCard
			$isMain={isProd}
			onClick={handleCardClick}
			onMouseDown={handleMouseDown}
			onMouseUp={handleMouseUp}
			hoverable
			ref={ref}
			style={styles}
			className={cardClassName ?? 'ui-lagooncard'}
			title={title}
			extra={extraIcons}
			actions={actions[type]}
			{...rest}
		>
			{computedCardType}
		</StyledCard>
	);
};

const LagoonCard = forwardRef<HTMLDivElement, InternalCardProps>(InternalCard);

LagoonCard.displayName = 'LagoonCard';

export default LagoonCard;
