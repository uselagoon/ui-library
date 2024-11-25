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
export type NotificationsProps = {
    notifications: Notification;
    newNotificationModal: ReactNode;
    deleteNotificationModal: (notification: NotificationType) => ReactNode;
    editNotificationModal: (notification: NotificationType) => ReactNode;
    skeleton?: false;
};
export type NotificationsSkeleton = {
    skeleton: true;
};
export type NotificationsTableProps = {
    filterString?: string;
    filterNotificationType?: 'slack' | 'webhook' | 'teams' | 'rocketChat' | 'webhook';
} & (NotificationsSkeleton | NotificationsProps);
declare const OrgNotificationsTable: (props: NotificationsTableProps) => import("react/jsx-runtime").JSX.Element;
export default OrgNotificationsTable;
