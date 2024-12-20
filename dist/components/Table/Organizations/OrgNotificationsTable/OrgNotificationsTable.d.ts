import { ReactNode } from 'react';
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
export type NotificationType = SlackNotification | RocketChatNotification | TeamNotification | EmailNotification | WebhookNotification;
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
export type NotificationsProps = {
    orgName: string;
    newNotificationModal: ReactNode;
    skeleton?: false;
} & ({
    type?: 'standalone';
    notifications: Notification;
    deleteNotificationModal: (notification: Notification) => ReactNode;
    editNotificationModal: (notification: Notification) => ReactNode;
} | {
    type?: 'subTable';
    notifications: SubTableNotification;
    unlinkNotificationModal: (notification: SubTableNotification) => ReactNode;
});
export type NotificationsSkeleton = {
    skeleton: true;
    type: 'standalone' | 'subTable';
};
export type NotificationsTableProps = {
    filterString?: string;
    filterNotificationType?: 'slack' | 'webhook' | 'teams' | 'rocketChat' | 'email';
} & (NotificationsSkeleton | NotificationsProps);
declare const OrgNotificationsTable: (props: NotificationsTableProps) => import("react/jsx-runtime").JSX.Element;
export default OrgNotificationsTable;
