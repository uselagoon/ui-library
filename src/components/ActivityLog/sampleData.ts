import {ActivityLogItemProps} from "@/components/ActivityLog/ActivityLogItem";

export const sampleActivityData: ActivityLogItemProps[] = [
    {
        id: '1',
        date: 'OCTOBER 15',
        title: 'New Autoscaling Features for Production Workloads',
        description: 'We\'ve enhanced our autoscaling capabilities with predictive scaling based on historical traffic patterns. This allows your applications to scale proactively before traffic spikes occur, ensuring consistent performance during high-demand periods.',
        tags: ['New', 'Infrastructure', 'Scaling', 'Performance'],
    },
    {
        id: '2',
        date: 'OCTOBER 10',
        title: 'MongoDB Atlas Integration Now Available',
        description: 'You can now connect your applications directly to MongoDB Atlas with our new first-party integration. This provides seamless authentication, metrics collection, and simplified connection management for your database needs.',
        tags: ['Feature', 'Databases', 'Integrations'],
    },
    {
        id: '3',
        date: 'OCTOBER 5',
        title: 'Enhanced Security with IP Allow-listing',
        description: 'We\'ve added IP allow-listing capabilities to all deployment environments. You can now restrict access to your applications and services based on specific IP addresses or ranges, providing an additional layer of security.',
        tags: ['Security', 'Networking'],
    },
    {
        id: '4',
        date: 'SEPTEMBER 28',
        title: 'Deployment Pipeline Improvements',
        description: '',
        tags: ['Improvement', 'Deployments', 'CI/CD'],
    },
    {
        id: '5',
        date: 'SEPTEMBER 20',
        title: 'New Metrics Dashboard for Application Performance',
        description: '',
        tags: ['Feature', 'Monitoring', 'UI/UX'],
    },
];