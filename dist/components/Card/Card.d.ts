import React from 'react';
import { CardProps as AntCardProps } from 'antd';
import { NewCard } from './partials/NewCard';
import { LagoonCardLabelProps } from '../CardLabel';
type DefaultProps = {
    loading?: boolean;
    title: string;
    status: 'low' | 'medium' | 'high' | 'critical';
    styles?: React.CSSProperties;
    cardClassName?: string;
    navigateTo?: () => void;
};
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
};
type LoaderCard = {
    type: 'loaderOnly';
};
export type CardProps = (ProjectCard & DefaultProps) | (EnvCard & DefaultProps) | NewCard | LoaderCard;
export type InternalCardProps = Pick<AntCardProps, 'bodyStyle' | 'headStyle' | 'bordered' | 'size'> & CardProps;
declare const LagoonCard: React.ForwardRefExoticComponent<InternalCardProps & React.RefAttributes<HTMLDivElement>>;
export default LagoonCard;
