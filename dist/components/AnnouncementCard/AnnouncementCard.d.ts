import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const announcementCardVariants: (props?: ({
    variant?: "marketing" | "changelog" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
export type AnnouncementCardProps = VariantProps<typeof announcementCardVariants> & {
    id?: string;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    title?: string;
    description?: string;
    ctaText?: string;
    ctaUrl?: string;
    openInNewTab?: boolean;
    onClose?: (id?: string) => void;
    className?: string;
    disabled?: boolean;
    /** @deprecated Use `icon` prop instead */
    defaultLogo?: boolean;
};
export default function AnnouncementCard({ id, variant, icon: IconComponent, title, description, ctaText, ctaUrl, openInNewTab, onClose, className, defaultLogo, disabled }: AnnouncementCardProps): import("react/jsx-dev-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=AnnouncementCard.d.ts.map