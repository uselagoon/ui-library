import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BotMessageSquare, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getLocalStorage, setLocalStorage } from '@/_util/helpers';
import { cva, type VariantProps } from 'class-variance-authority';

const announcementCardVariants = cva(
	'm-2 w-auto gap-0 !p-4',
	{
		variants: {
			variant: {
				marketing: 'bg-[#737373]/20',
				changelog: '[background:#dae8fd] ![color:#387eda] [box-shadow:var(--badge-ring)]',
			},
		},
		defaultVariants: {
			variant: 'changelog',
		},
	}
);

export type AnnouncementCardProps = VariantProps<typeof announcementCardVariants> & {
	id?: string;
	icon?: React.ComponentType<{ className?: string }>;
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

const OLD_STORAGE_KEY = 'promo-card-dismissed';

function getStorageKey(id?: string): string {
	return id ? `announcement-dismissed-${id}` : OLD_STORAGE_KEY;
}

export default function AnnouncementCard({
	id,
	variant,
	icon: IconComponent,
	title = "Latest Changes",
	description,
	ctaText = "See What's New",
	ctaUrl = 'https://docs.lagoon.sh/releases/2.30.0/',
	openInNewTab = true,
	onClose,
	className,
	defaultLogo = false,
	disabled = false
}: AnnouncementCardProps) {
	const [isVisible, setIsVisible] = useState(false);

	// Handle localStorage check and migration on mount (client-side only)
	useEffect(() => {
		const storageKey = getStorageKey(id);

		// Migration: if using new id-based key, check for old key and migrate
		if (id && getLocalStorage(OLD_STORAGE_KEY) === true) {
			// Only migrate if this is the 'whats-new' card (changelog variant)
			if (id === 'whats-new') {
				setLocalStorage(storageKey, true, 30);
				localStorage.removeItem(OLD_STORAGE_KEY);
			}
		}

		const isDismissed = getLocalStorage(storageKey) === true;
		setIsVisible(!isDismissed);
	}, [id]);

	const handleClose = () => {
		setIsVisible(false);
		onClose?.(id);
		setLocalStorage(getStorageKey(id), true, 30);
	};

	if (!isVisible || disabled) {
		return null;
	}

	// Determine which icon to show: explicit icon prop > defaultLogo (deprecated) > changelog default
	const showIcon = IconComponent || defaultLogo || variant === 'changelog';
	const IconToRender = IconComponent || BotMessageSquare;

	return (
		<Card className={cn(announcementCardVariants({ variant }), className)}>
			<CardHeader className="relative pb-0 !px-3">
				<div className="flex flex-row items-center gap-2">
					{showIcon && <IconToRender className="h-5 w-5 flex-shrink-0" />}
					{title && <p className="text-sm font-bold leading-[1.4] flex-1">{title}</p>}
					<button
						onClick={handleClose}
						className="rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2 disabled:pointer-events-none flex-shrink-0 -mr-1 -mt-1"
						aria-label="Close announcement"
					>
						<X className="h-4 w-4" />
					</button>
				</div>
			</CardHeader>
			<CardContent className={`!px-3 ${description ? 'pt-2 space-y-2' : ''}`}>
				<p className="text-sm font-normal leading-[1.4]">
					{description}
				</p>
				<a
					href={ctaUrl}
					target={openInNewTab ? '_blank' : undefined}
					rel={openInNewTab ? 'noopener noreferrer' : undefined}
					className="text-sm font-normal underline hover:no-underline promo-link__ai"
				>
					{ctaText}
				</a>
			</CardContent>
		</Card>
	);
}
