import React, { forwardRef, ReactNode, useState } from 'react';
import { CardProps as AntCardProps, Skeleton, Tooltip } from 'antd';
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
	SmileOutlined,
} from '@ant-design/icons';
import colors from '../../_util/colors';
import { EnvironmentPartial } from './partials/EnvironmentPartial';
import { ProjectPartial } from './partials/ProjectPartial';

type DefaultProps = {
	loading?: boolean;
	title: string;
	status: 'low' | 'medium' | 'high' | 'critical';
	styles?: React.CSSProperties;
	cardClassName?: string;
	navigateTo?: () => void;
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
	projectName: string;
	environmentName: string;
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

	const [copied, setCopied] = useState(false);
	const toggleCopied = () => {
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 1500);
	};

	const { type: cardType } = props;

	if (cardType === 'new') return <NewCard ref={ref} />;

	if (cardType === 'loaderOnly') return <LoadingCard loading={true} />;

	const { type, loading, title, cardClassName, styles, status = 'low', navigateTo, ...rest } = props;

	const getStatusIcon = (status: DefaultProps['status']) => {
		switch (status) {
			case 'critical':
				return <FrownOutlined style={{ color: colors.pink }} />;

			case 'high':
				return <MehOutlined style={{ color: colors.orange }} />;

			case 'medium':
				return <SmileOutlined style={{ color: colors.green2 }} />;

			case 'low':
			default:
				return <SmileOutlined style={{ color: colors.green2 }} />;
		}
	};

	const cardLabelType = type === 'project' ? 'project' : props.envType;

	const navigatorFn = navigateTo ? navigateTo : () => {};

	const actions = {
		project: [<EditOutlined key="edit" onClick={navigatorFn} />, <EllipsisOutlined key="ellipsis" />],
		environment: [<EyeOutlined key="view" onClick={navigatorFn} />, <EllipsisOutlined key="ellipsis" />],
	};

	const extraIcons = [
		getStatusIcon(status),

		<Tooltip placement="right" title={copied ? 'Copied!' : 'Copy'}>
			<LinkOutlined
				key="link"
				onClick={() => {
					if (copied) return;
					const currentUrl = window.location.href;
					const environmentUrl = type === 'environment' ? `${currentUrl}/${props.environmentName}` : '';
					navigator.clipboard.writeText(environmentUrl as string);
					toggleCopied();
				}}
			/>
		</Tooltip>,
	];

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
		if (!isSelecting && !clickedElement.closest('.ant-card-actions') && !clickedElement.closest('.ant-card-extra')) {
			navigatorFn();
		}
	};

	return (
		<StyledCard
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
