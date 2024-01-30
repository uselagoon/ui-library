import React from "react";
type DefaultProps = {
    text: string;
    count: string | number;
};
type ConditionProps = {
    critical: true;
    high?: never;
    medium?: never;
    low?: never;
} | {
    high: true;
    critical?: never;
    medium?: never;
    low?: never;
} | {
    medium: true;
    critical?: never;
    high?: never;
    low?: never;
} | {
    low: true;
    critical?: never;
    high?: never;
    medium?: never;
};
export type CardProps = (DefaultProps & ConditionProps) | DefaultProps;
declare const UIDataCard: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
export default UIDataCard;
export type { CardProps as UICardProps };
