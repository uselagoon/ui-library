import React, { forwardRef, ReactNode, useState } from 'react';
import { CardProps as AntCardProps, Skeleton, Tooltip } from 'antd';
import { LinkContainer, LoadingCard, StyledCard, StyledMoreActionsIcon } from './styles';
import { NewCard, NewEnvironmentType } from './partials/NewCard';
import LagoonCardLabel, { LagoonCardLabelProps } from '../CardLabel';
import { EditOutlined, EyeOutlined, FrownOutlined, LinkOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import colors from '../../_util/colors';
import { EnvironmentPartial } from './partials/EnvironmentPartial';
import { ProjectPartial } from './partials/ProjectPartial';
import TreeList from '../TreeList';
import { useLinkComponent } from '../../providers/NextLinkProvider';

export type DefaultCardProps = {
	loading?: boolean;
	title: string;
	showProblemIndicator: boolean;
	status: 'low' | 'medium' | 'high' | 'critical';
	styles?: React.CSSProperties;
	cardClassName?: string;
	navigateTo?: () => void;
	navPath: string;
	quickActions?: {
		sectionTitle: string;
		sectionChildren: ReactNode[];
	}[];
};

// TODO: proper env type (currently unused)
type ProjectCard = {
	type: 'project';
	environments: string[];
};

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
} & NewEnvironmentType;

type LoaderCard = {
	type: 'loaderOnly';
};

export type CardProps = (ProjectCard & DefaultCardProps) | (EnvCard & DefaultCardProps) | NewCard | LoaderCard;

export type InternalCardProps = Pick<AntCardProps, 'bodyStyle' | 'headStyle' | 'bordered' | 'size'> & CardProps;

const InternalCard: React.ForwardRefRenderFunction<HTMLDivElement, InternalCardProps> = (
	props: InternalCardProps,
	ref,
) => {
	const [isSelecting, setIsSelecting] = useState(false);

	const Link = useLinkComponent();

	const [copied, setCopied] = useState(false);
	const toggleCopied = () => {
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 1500);
	};

	const { type: cardType } = props;

	if (cardType === 'new')
		return (
			<NewCard
				requiredFormItems={props.requiredFormItems}
				loading={props.loading}
				renderType={props.renderType}
				steps={props.steps}
				onCreateEnvironment={props.onCreateEnvironment}
			/>
		);

	if (cardType === 'loaderOnly') return <LoadingCard loading={true} />;

	const {
		type,
		loading,
		title,
		cardClassName,
		styles,
		quickActions,
		status = 'low',
		navPath,
		navigateTo,
		...rest
	} = props;

	const getStatusIcon = (status: DefaultCardProps['status']) => {
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

	// card actions and icons
	const CardActions = quickActions && (
		<TreeList data={quickActions}>
			<StyledMoreActionsIcon key="ellipsis" />
		</TreeList>
	);
	const actions = {
		project: [
			<LinkContainer>
				<Link href={navPath}>
					<EditOutlined key="edit" />
				</Link>
			</LinkContainer>,

			CardActions,
		],
		environment: [
			<LinkContainer>
				<Link href={navPath}>
					<EyeOutlined key="view" />
				</Link>
			</LinkContainer>,
			CardActions,
		],
	};

	const extraIcons = [
		props.showProblemIndicator ? (
			<Tooltip placement="top" title="Problem status">
				<LinkContainer>
					<Link href={`${navPath}/problems`}>{getStatusIcon(status)}</Link>
				</LinkContainer>
			</Tooltip>
		) : null,

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
		if (
			!isSelecting &&
			!clickedElement.closest('.ant-card-actions') &&
			!clickedElement.closest('.ant-card-extra') &&
			!clickedElement.closest('.ui-treelink-overlay')
		) {
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
