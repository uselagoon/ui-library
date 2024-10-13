import React from 'react';
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
export type LagoonTimelineProps = {
    type: 'deployment';
    items: DeploymentItems[];
} | {
    type: 'task';
    items: TaskItems[];
};
declare const LagoonTimeline: React.ForwardRefExoticComponent<LagoonTimelineProps & React.RefAttributes<HTMLElement>>;
export default LagoonTimeline;
