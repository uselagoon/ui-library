import { ReactNode, useMemo } from 'react';
import type { RenderedCell } from 'rc-table/lib/interface';
import { ActionWrap, TableSummary } from '../../styles';
import { highlightTextInElement } from '../../../../_util/helpers';
import BaseTable from '../../Base';
import OrgNotificationsSkeleton from './OrgNotificationsSkeleton';
import { Badge } from '../styles';
import { LinkContainer } from '../../DeploymentsTable/styles';
import { EyeOutlined } from '@ant-design/icons';
import { useLinkComponent } from '../../../../providers/NextLinkProvider';

type SlackNotification = {
	id?: number;
	name: string;
	webhook: string;
	channel: string;
};

type RocketChatNotification = {
	id?: number;
	name: string;
	webhook: string;
	channel: string;
};

type TeamNotification = {
	id?: number;
	name: string;
	webhook: string;
};

type EmailNotification = {
	id?: number;
	name: string;
	emailAddress: string;
};

type WebhookNotification = {
	id?: number;
	name: string;
	webhook: string;
};

export type NotificationType =
	| SlackNotification
	| RocketChatNotification
	| TeamNotification
	| EmailNotification
	| WebhookNotification;

export type NotificationWithType = NotificationType & {
	type: 'slack' | 'webhook' | 'teams' | 'rocketChat' | 'webhook';
};

export type Notification = {
	slacks?: SlackNotification[];
	rocketChats?: RocketChatNotification[];
	teams?: TeamNotification[];
	emails?: EmailNotification[];
	webhooks?: WebhookNotification[];
};

export type SubTableNotification = {
	slacks?: Partial<SlackNotification>[];
	rocketChats?: Partial<RocketChatNotification>[];
	teams?: Partial<TeamNotification>[];
	emails?: Partial<EmailNotification>[];
	webhooks?: Partial<WebhookNotification>[];
};

export type NotificationsProps = { orgName: string; newNotificationModal: ReactNode; skeleton?: false } & (
	| {
			type?: 'standalone';
			notifications: Notification;
			deleteNotificationModal: (notification: Notification) => ReactNode;
			editNotificationModal: (notification: Notification) => ReactNode;
	  }
	| {
			type?: 'subTable';
			notifications: SubTableNotification;
			unlinkNotificationModal: (notification: SubTableNotification) => ReactNode;
	  }
);

export type NotificationsSkeleton = {
	skeleton: true;
	type: 'standalone' | 'subTable';
};

export type NotificationsTableProps = {
	filterString?: string;
	filterNotificationType?: 'slack' | 'webhook' | 'teams' | 'rocketChat' | 'email';
} & (NotificationsSkeleton | NotificationsProps);

/*
 * Notifications table - used in organizations/orgName/notifications as type `standalone` OR organizations/orgName/projects/projectName as type `subTable`
 */
const OrgNotificationsTable = (props: NotificationsTableProps) => {
	if ('skeleton' in props && props.skeleton) {
		return <OrgNotificationsSkeleton type={props.type} />;
	}

	const Link = useLinkComponent();

	const {
		notifications: rawNotifications,
		orgName,
		filterNotificationType,
		newNotificationModal,
		type = 'standalone',
		filterString = '',
	} = props;

	// combine all notifications with their distinctive types.
	const notifications = [
		...(rawNotifications.slacks?.map(({ id, name, webhook, channel }) => ({
			id,
			name,
			webhook,
			channel,
			type: 'slack',
		})) ?? []),
		...(rawNotifications.rocketChats?.map(({ id, name, channel, webhook }) => ({
			id,
			name,
			webhook,
			channel,
			type: 'rocketchat',
		})) ?? []),
		...(rawNotifications.teams?.map(({ id, name, webhook }) => ({
			id,
			name,
			webhook,
			type: 'teams',
		})) ?? []),
		...(rawNotifications.emails?.map(({ id, name, emailAddress }) => ({
			id,
			name,
			emailAddress,
			type: 'email',
		})) ?? []),
		...(rawNotifications.webhooks?.map(({ id, name, webhook }) => ({
			id,
			name,
			webhook,
			type: 'webhook',
		})) ?? []),
	];

	const filteredNotifications = notifications
		? notifications.filter((notification) => {
				const fieldsToCheck = [notification.name];

				return fieldsToCheck.some((fieldValue) =>
					String(fieldValue).toLowerCase().includes(filterString.toLowerCase()),
				);
			})
		: [];

	// show ones only by type
	const sortedNotifications = useMemo(() => {
		return filteredNotifications
			? filteredNotifications.filter((item) => {
					const statusMatches = filterNotificationType ? item.type === filterNotificationType : true;
					return statusMatches;
				})
			: [];
	}, [notifications, filterNotificationType]);

	const notifColumns = [
		{
			title: 'Notification Name',
			dataIndex: 'name',
			key: 'name',
			width: '19.56%',
			sorter: (a: NotificationType, b: NotificationType) => a.name.localeCompare(b.name),
			render: (_: string, notification: { name: string; type: string }) => {
				return <>{notification.name}</>;
			},
		},
		{
			title: 'Service',
			dataIndex: 'type',
			key: 'type',
			width: type === 'standalone' ? '17.4%' : '67.4%',
			sorter: (a: any, b: any) => a.type.localeCompare(b.type),
			render: (_: string, notification: { name: string; type: string }) => {
				return (
					<Badge $type={notification.type as 'slack' | 'webhook' | 'teams' | 'rocketchat' | 'webhook'}>
						{notification.type}
					</Badge>
				);
			},
		},

		...(type === 'standalone'
			? [
					{
						title: 'Webhook or Channel Details',
						dataIndex: 'details',
						key: 'details',
						width: '50%',
						render: (_: string, notification: any) => {
							if (notification.type === 'slack' || notification.type === 'rocketchat') {
								return (
									<>
										<p>Webhook: {notification.webhook}</p>
										<p>channel: {notification.channel}</p>
									</>
								);
							}

							if (notification.type === 'webhook' || notification.type === 'teams') {
								return (
									<>
										<p>Webhook: {notification.webhook}</p>
									</>
								);
							}

							if (notification.type === 'email') {
								return (
									<>
										<p>Address: {notification.emailAddress}</p>
									</>
								);
							}
							return null;
						},
					},
				]
			: []),

		,
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
		},
	];

	const renderDeleteOrUnlink = (notification: Notification | SubTableNotification) => {
		if (type === 'standalone' && 'deleteNotificationModal' in props) {
			return props.deleteNotificationModal(notification as Notification);
		} else if (type === 'subTable' && 'unlinkNotificationModal' in props) {
			return props.unlinkNotificationModal(notification as SubTableNotification);
		}
		return null;
	};

	const renderEditOrLink = (notification: Notification | SubTableNotification) => {
		if (type === 'standalone' && 'editNotificationModal' in props) {
			return props.editNotificationModal(notification as Notification);
		} else if (type === 'subTable') {
			return (
				<LinkContainer>
					{/* @ts-ignore */}
					<Link href={`/organizations/${orgName}/notifications?search=${notification.name}`}>
						<EyeOutlined />
					</Link>
				</LinkContainer>
			);
		}

		return null;
	};

	const notificationsWithActions =
		sortedNotifications &&
		sortedNotifications.map((notification) => {
			return {
				...notification,
				actions: (
					<ActionWrap>
						{renderEditOrLink(notification as SubTableNotification | Notification)}

						{renderDeleteOrUnlink(notification as SubTableNotification | Notification)}
					</ActionWrap>
				),
			};
		});

	// highlight found text (only certain fields)
	const fieldsToCheck = ['name'];

	const highlightedColumns =
		notifColumns &&
		notifColumns.map((col) => {
			return {
				...col,
				render: (renderElement: any, record: any, index: number): React.ReactNode | RenderedCell<any> => {
					// @ts-ignore
					const renderedContent = col.render ? col.render(renderElement, record) : renderElement;

					// @ts-ignore
					const shouldHighlight = fieldsToCheck.includes(col.dataIndex);
					if (shouldHighlight) {
						// RenderedCell or ReactNode
						if (typeof renderedContent === 'object' && 'children' in renderedContent) {
							return {
								...renderedContent,
								children: highlightTextInElement(renderedContent.children, filterString, index),
							};
						}

						return highlightTextInElement(renderedContent, filterString, index);
					}
					return renderedContent;
				},
			};
		});

	return (
		<>
			<BaseTable
				dataSource={notificationsWithActions}
				columns={highlightedColumns}
				rowKey={(record) => record.id ?? record.name}
				hasSummary
			/>
			<TableSummary>{newNotificationModal}</TableSummary>
		</>
	);
};

export default OrgNotificationsTable;
