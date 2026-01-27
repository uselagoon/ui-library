export type AnnouncementCardProps = {
    title?: string;
    description?: string;
    ctaText?: string;
    ctaUrl?: string;
    openInNewTab?: boolean;
    onClose?: () => void;
    className?: string;
    defaultLogo?: boolean;
    disabled?: boolean;
};
export default function AnnouncementCard({ title, description, ctaText, ctaUrl, // hardcoded for now, need a way to make this dynamic in the future
openInNewTab, onClose, className, defaultLogo, disabled }: AnnouncementCardProps): import("react/jsx-dev-runtime").JSX.Element | null;
//# sourceMappingURL=AnnouncementCard.d.ts.map