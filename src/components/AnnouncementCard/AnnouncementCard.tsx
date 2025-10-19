import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BotMessageSquare, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type AnnouncementCardProps = {
	brand?: string;
	title: string;
	description: string;
	ctaText: string;
	ctaUrl: string;
	openInNewTab?: boolean;
	onClose?: () => void;
	className?: string;
};

export default function AnnouncementCard({
	brand,
	title,
	description,
	ctaText,
	ctaUrl,
	openInNewTab = true,
	onClose,
	className,
}: AnnouncementCardProps) {
	const [isVisible, setIsVisible] = useState(true);

	const handleClose = () => {
		setIsVisible(false);
		onClose?.();
	};

	if (!isVisible) {
		return null;
	}

	return (
		<Card className={cn('m-2 w-auto bg-[#737373]/20 gap-0', className)}>
			<CardHeader className="relative pb-0">
				<div className="flex flex-row items-center gap-2">
					<BotMessageSquare className="h-5 w-5 flex-shrink-0" />
					{brand && <p className="text-sm font-bold leading-[1.4]">{brand}</p>}
				</div>
				<button
					onClick={handleClose}
					className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
					aria-label="Close announcement"
				>
					<X className="h-4 w-4" />
				</button>
			</CardHeader>
			<CardContent className="space-y-2 pt-2">
				<p className="text-sm font-normal leading-[1.4]">
					{title} {description}
				</p>
				<a
					href={ctaUrl}
					target={openInNewTab ? '_blank' : undefined}
					rel={openInNewTab ? 'noopener noreferrer' : undefined}
					className="text-sm font-normal underline hover:no-underline"
				>
					{ctaText}
				</a>
			</CardContent>
		</Card>
	);
}
