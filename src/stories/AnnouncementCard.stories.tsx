import { Meta, StoryObj } from '@storybook/react';
import { Controls, Primary, Stories, Title } from '@storybook/addon-docs/blocks';
import { Megaphone, BotMessageSquare } from 'lucide-react';

import AnnouncementCard from '../components/AnnouncementCard';
import AnnouncementCarousel from '../components/AnnouncementCarousel';

const meta: Meta<typeof AnnouncementCard> = {
	component: AnnouncementCard,
	title: 'Components/AnnouncementCard',
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<p>
						Announcement card with close functionality. Displays promotional content with an icon, description,
						and call-to-action link.
					</p>
					<Primary />
					<Controls />
					<Stories />
				</>
			),
		},
	},
};

type Story = StoryObj<typeof AnnouncementCard>;

export const Default: Story = {
	args: {
		id: 'default-story',
		variant: 'changelog',
		title: 'Latest Changes',
		description: 'Check out the newest features and improvements.',
		ctaText: "SEE WHAT'S NEW",
		ctaUrl: 'https://docs.lagoon.sh/releases/2.30.0/',
		openInNewTab: true,
	},
};

export const MarketingVariant: Story = {
	args: {
		id: 'marketing-story',
		variant: 'marketing',
		icon: Megaphone,
		title: 'Announcing the Private AI Assistant now available in beta!',
		description: 'Secure, Private, Compliant.',
		ctaText: 'Sign up today for a free 14-day trial',
		ctaUrl: 'https://amazee.ai/private-ai-assistant#trial-signup',
		openInNewTab: true,
	},
};

export const ChangelogVariant: Story = {
	args: {
		id: 'changelog-story',
		variant: 'changelog',
		title: 'Latest Changes',
		description: 'New deployment features available.',
		ctaText: "SEE WHAT'S NEW",
		ctaUrl: 'https://docs.lagoon.sh/releases/2.30.0/',
		openInNewTab: true,
	},
};

export const CustomIcon: Story = {
	args: {
		id: 'custom-icon-story',
		variant: 'marketing',
		icon: Megaphone,
		title: 'New Feature Available',
		description: 'Try our latest updates.',
		ctaText: 'Learn more',
		ctaUrl: 'https://example.com',
		openInNewTab: true,
	},
};

export const SameTab: Story = {
	args: {
		id: 'same-tab-story',
		variant: 'changelog',
		title: 'Announcing the Private AI Assistant now available in beta!',
		description: 'Secure, Private, Compliant.',
		ctaText: 'Sign up today for a free 14-day trial',
		ctaUrl: 'https://amazee.ai/private-ai-assistant#trial-signup',
		openInNewTab: false,
	},
};

// Carousel stories
export const Carousel: StoryObj<typeof AnnouncementCarousel> = {
	render: () => (
		<div className="w-[280px]">
			<AnnouncementCarousel
				cards={[
					{
						id: 'marketing-promo',
						variant: 'marketing',
						icon: Megaphone,
						title: 'Private AI Assistant',
						description: 'Secure, Private, Compliant.',
						ctaText: 'Sign up for free trial',
						ctaUrl: 'https://amazee.ai/private-ai-assistant#trial-signup',
						openInNewTab: true,
					},
					{
						id: 'whats-new',
						variant: 'changelog',
						icon: BotMessageSquare,
						title: 'Latest Changes',
						description: 'New deployment features available.',
						ctaText: "SEE WHAT'S NEW",
						ctaUrl: 'https://docs.lagoon.sh/releases/2.30.0/',
						openInNewTab: true,
					},
				]}
			/>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'A carousel displaying multiple announcement cards. Use the arrows to navigate between cards. Dismissing a card advances to the next one.',
			},
		},
	},
};

export const CarouselNoDots: StoryObj<typeof AnnouncementCarousel> = {
	render: () => (
		<div className="w-[280px]">
			<AnnouncementCarousel
				showDots={false}
				cards={[
					{
						id: 'marketing-promo-no-dots',
						variant: 'marketing',
						icon: Megaphone,
						title: 'Private AI Assistant',
						description: 'Secure, Private, Compliant.',
						ctaText: 'Sign up for free trial',
						ctaUrl: 'https://amazee.ai/private-ai-assistant#trial-signup',
						openInNewTab: true,
					},
					{
						id: 'whats-new-no-dots',
						variant: 'changelog',
						title: 'Latest Changes',
						description: 'New deployment features available.',
						ctaText: "SEE WHAT'S NEW",
						ctaUrl: 'https://docs.lagoon.sh/releases/2.30.0/',
						openInNewTab: true,
					},
				]}
			/>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Carousel with dots hidden. Users can still swipe/drag to navigate.',
			},
		},
	},
};

export const SingleCardCarousel: StoryObj<typeof AnnouncementCarousel> = {
	render: () => (
		<div className="w-[280px]">
			<AnnouncementCarousel
				cards={[
					{
						id: 'single-card',
						variant: 'changelog',
						title: 'Latest Changes',
						description: 'New deployment features available.',
						ctaText: "SEE WHAT'S NEW",
						ctaUrl: 'https://docs.lagoon.sh/releases/2.30.0/',
						openInNewTab: true,
					},
				]}
			/>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'Carousel with a single card. Navigation arrows are hidden when only one card is present.',
			},
		},
	},
};

export default meta;
