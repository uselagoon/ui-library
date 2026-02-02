import React, { useState, useEffect, useCallback } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from '@/components/ui/carousel';
import AnnouncementCard, { type AnnouncementCardProps } from '@/components/AnnouncementCard/AnnouncementCard';
import { getLocalStorage, setLocalStorage } from '@/_util/helpers';
import { cn } from '@/lib/utils';

export type AnnouncementCarouselProps = {
	cards: AnnouncementCardProps[];
	showDots?: boolean;
	expiryDays?: number;
	className?: string;
};

const OLD_STORAGE_KEY = 'promo-card-dismissed';

function getStorageKey(id?: string): string {
	return id ? `announcement-dismissed-${id}` : OLD_STORAGE_KEY;
}

function isDismissed(id?: string): boolean {
	return getLocalStorage(getStorageKey(id)) === true;
}

export default function AnnouncementCarousel({
	cards,
	showDots = true,
	expiryDays = 30,
	className,
}: AnnouncementCarouselProps) {
	const [api, setApi] = useState<CarouselApi>();
	const [visibleCards, setVisibleCards] = useState<AnnouncementCardProps[]>([]);
	const [mounted, setMounted] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Initialize visible cards on mount (client-side only)
	useEffect(() => {
		// Migration: check old key and migrate to 'whats-new' if needed
		if (getLocalStorage(OLD_STORAGE_KEY) === true) {
			const whatsNewCard = cards.find(c => c.id === 'whats-new');
			if (whatsNewCard) {
				setLocalStorage(getStorageKey('whats-new'), true, expiryDays);
				localStorage.removeItem(OLD_STORAGE_KEY);
			}
		}

		const filtered = cards.filter(card => !isDismissed(card.id));
		setVisibleCards(filtered);
		setMounted(true);
	}, [cards, expiryDays]);

	// Track current slide index
	useEffect(() => {
		if (!api) return;

		const onSelect = () => {
			setCurrentIndex(api.selectedScrollSnap());
		};

		api.on('select', onSelect);
		onSelect(); // Set initial index

		return () => {
			api.off('select', onSelect);
		};
	}, [api]);

	const handleDismiss = useCallback((id?: string) => {
		if (id) {
			setLocalStorage(getStorageKey(id), true, expiryDays);
		}

		// Get current index before removing the card
		const dismissedIndex = api?.selectedScrollSnap() ?? 0;

		setVisibleCards(prev => {
			const newCards = prev.filter(card => card.id !== id);

			// After state update, scroll to the next card if available
			if (api && newCards.length > 0) {
				// If we dismissed the last card, scroll to the previous one
				const newIndex = dismissedIndex >= newCards.length ? newCards.length - 1 : dismissedIndex;
				setTimeout(() => {
					api.scrollTo(newIndex);
				}, 0);
			}

			return newCards;
		});
	}, [api, expiryDays]);

	const handleDotClick = (index: number) => {
		api?.scrollTo(index);
	};

	// Don't render anything until mounted (avoids hydration mismatch)
	if (!mounted) {
		return null;
	}

	// Hide carousel if all cards are dismissed
	if (visibleCards.length === 0) {
		return null;
	}

	const shouldShowDots = showDots && visibleCards.length > 1;

	return (
		<div className={cn('w-full', className)}>
			<Carousel
				setApi={setApi}
				opts={{
					align: 'start',
					loop: false,
				}}
			>
				<CarouselContent className="-ml-0">
					{visibleCards.map((card) => (
						<CarouselItem key={card.id || 'default'} className="pl-0 flex items-end">
							<AnnouncementCard
								{...card}
								onClose={handleDismiss}
								// Disable internal visibility management since carousel handles it
								disabled={false}
								className={cn('w-full', card.className)}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
			</Carousel>
			{shouldShowDots && (
				<div className="flex justify-center gap-1.5 mt-0.5">
					{visibleCards.map((card, index) => (
						<button
							key={card.id || index}
							onClick={() => handleDotClick(index)}
							className={cn(
								'h-1.5 w-1.5 rounded-full transition-colors',
								index === currentIndex
									? 'bg-foreground'
									: 'bg-foreground/30 hover:bg-foreground/50'
							)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}
