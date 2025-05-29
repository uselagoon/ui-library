'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import { PanelLeftIcon } from 'lucide-react';

import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

type SidebarContextProps = {
	state: 'expanded' | 'collapsed';
	open: boolean;
	setOpen: (open: boolean) => void;
	openMobile: boolean;
	setOpenMobile: (open: boolean) => void;
	isMobile: boolean;
	toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
	const context = React.useContext(SidebarContext);
	if (!context) {
		throw new Error('useSidebar must be used within a SidebarProvider.');
	}

	return context;
}

function SidebarProvider({
	defaultOpen = true,
	open: openProp,
	onOpenChange: setOpenProp,
	className,
	style,
	children,
	...props
}: React.ComponentProps<'div'> & {
	defaultOpen?: boolean;
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}) {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = React.useState(false);

	// This is the internal state of the sidebar.
	// We use openProp and setOpenProp for control from outside the component.
	const [_open, _setOpen] = React.useState(defaultOpen);
	const open = openProp ?? _open;
	const setOpen = React.useCallback(
		(value: boolean | ((value: boolean) => boolean)) => {
			const openState = typeof value === 'function' ? value(open) : value;
			if (setOpenProp) {
				setOpenProp(openState);
			} else {
				_setOpen(openState);
			}

			// This sets the cookie to keep the sidebar state.
			document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
		},
		[setOpenProp, open],
	);

	// Helper to toggle the sidebar.
	const toggleSidebar = React.useCallback(() => {
		return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
	}, [isMobile, setOpen, setOpenMobile]);

	// Adds a keyboard shortcut to toggle the sidebar.
	React.useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				toggleSidebar();
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [toggleSidebar]);

	// We add a state so that we can do data-state="expanded" or "collapsed".
	// This makes it easier to style the sidebar with Tailwind classes.
	const state = open ? 'expanded' : 'collapsed';

	const contextValue = React.useMemo<SidebarContextProps>(
		() => ({
			state,
			open,
			setOpen,
			isMobile,
			openMobile,
			setOpenMobile,
			toggleSidebar,
		}),
		[state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
	);

	return (
		<SidebarContext.Provider value={contextValue}>
			<TooltipProvider delayDuration={0}>
				<div
					data-slot="sidebar-wrapper"
					style={
						{
							'--sidebar-width': SIDEBAR_WIDTH,
							'--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
							...style,
						} as React.CSSProperties
					}
					className={cn(
						'lib:group/sidebar-wrapper has-data-[variant=inset]:lib:bg-sidebar lib:flex lib:min-h-svh lib:w-full',
						className,
					)}
					{...props}
				>
					{children}
				</div>
			</TooltipProvider>
		</SidebarContext.Provider>
	);
}

function Sidebar({
	side = 'left',
	variant = 'sidebar',
	collapsible = 'offcanvas',
	className,
	children,
	...props
}: React.ComponentProps<'div'> & {
	side?: 'left' | 'right';
	variant?: 'sidebar' | 'floating' | 'inset';
	collapsible?: 'offcanvas' | 'icon' | 'none';
}) {
	const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

	if (collapsible === 'none') {
		return (
			<div
				data-slot="sidebar"
				className={cn(
					'lib:bg-sidebar lib:text-sidebar-foreground lib:flex lib:h-full lib:w-(--sidebar-width) lib:flex-col',
					className,
				)}
				{...props}
			>
				{children}
			</div>
		);
	}

	if (isMobile) {
		return (
			<Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
				<SheetContent
					data-sidebar="sidebar"
					data-slot="sidebar"
					data-mobile="true"
					className="lib:bg-sidebar lib:text-sidebar-foreground lib:w-(--sidebar-width) lib:p-0 [&>button]:lib:hidden"
					style={
						{
							'--sidebar-width': SIDEBAR_WIDTH_MOBILE,
						} as React.CSSProperties
					}
					side={side}
				>
					<SheetHeader className="lib:sr-only">
						<SheetTitle>Sidebar</SheetTitle>
						<SheetDescription>Displays the mobile sidebar.</SheetDescription>
					</SheetHeader>
					<div className="lib:flex lib:h-full lib:w-full lib:flex-col">{children}</div>
				</SheetContent>
			</Sheet>
		);
	}

	return (
		<div
			className="lib:group lib:peer lib:text-sidebar-foreground lib:hidden md:lib:block"
			data-state={state}
			data-collapsible={state === 'collapsed' ? collapsible : ''}
			data-variant={variant}
			data-side={side}
			data-slot="sidebar"
		>
			{/* This is what handles the sidebar gap on desktop */}
			<div
				data-slot="sidebar-gap"
				className={cn(
					'lib:relative lib:w-(--sidebar-width) lib:bg-transparent lib:transition-[width] lib:duration-200 lib:ease-linear',
					'group-data-[collapsible=offcanvas]:lib:w-0',
					'group-data-[side=right]:lib:rotate-180',
					variant === 'floating' || variant === 'inset'
						? 'group-data-[collapsible=icon]:lib:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
						: 'group-data-[collapsible=icon]:lib:w-(--sidebar-width-icon)',
				)}
			/>
			<div
				data-slot="sidebar-container"
				className={cn(
					'lib:fixed lib:inset-y-0 lib:z-10 lib:hidden lib:h-svh lib:w-(--sidebar-width) lib:transition-[left,right,width] lib:duration-200 lib:ease-linear md:lib:flex',
					side === 'left'
						? 'lib:left-0 group-data-[collapsible=offcanvas]:lib:left-[calc(var(--sidebar-width)*-1)]'
						: 'lib:right-0 group-data-[collapsible=offcanvas]:lib:right-[calc(var(--sidebar-width)*-1)]',
					// Adjust the padding for floating and inset variants.
					variant === 'floating' || variant === 'inset'
						? 'lib:p-2 group-data-[collapsible=icon]:lib:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
						: 'group-data-[collapsible=icon]:lib:w-(--sidebar-width-icon) group-data-[side=left]:lib:border-r group-data-[side=right]:lib:border-l',
					className,
				)}
				{...props}
			>
				<div
					data-sidebar="sidebar"
					data-slot="sidebar-inner"
					className="lib:bg-sidebar group-data-[variant=floating]:lib:border-sidebar-border lib:flex lib:h-full lib:w-full lib:flex-col group-data-[variant=floating]:lib:rounded-lg group-data-[variant=floating]:lib:border group-data-[variant=floating]:lib:shadow-sm"
				>
					{children}
				</div>
			</div>
		</div>
	);
}

function SidebarTrigger({ className, onClick, ...props }: React.ComponentProps<typeof Button>) {
	const { toggleSidebar } = useSidebar();

	return (
		<Button
			data-sidebar="trigger"
			data-slot="sidebar-trigger"
			variant="ghost"
			size="icon"
			className={cn('lib:size-7', className)}
			onClick={(event) => {
				onClick?.(event);
				toggleSidebar();
			}}
			{...props}
		>
			<PanelLeftIcon />
			<span className="lib:sr-only">Toggle Sidebar</span>
		</Button>
	);
}

function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
	const { toggleSidebar } = useSidebar();

	return (
		<button
			data-sidebar="rail"
			data-slot="sidebar-rail"
			aria-label="Toggle Sidebar"
			tabIndex={-1}
			onClick={toggleSidebar}
			title="Toggle Sidebar"
			className={cn(
				'hover:after:lib:bg-sidebar-border lib:absolute lib:inset-y-0 lib:z-20 lib:hidden lib:w-4 lib:-translate-x-1/2 lib:transition-all lib:ease-linear group-data-[side=left]:lib:-right-4 group-data-[side=right]:lib:left-0 after:lib:absolute after:lib:inset-y-0 after:lib:left-1/2 after:lib:w-[2px] sm:lib:flex',
				'in-data-[side=left]:lib:cursor-w-resize in-data-[side=right]:lib:cursor-e-resize',
				'[[data-side=left][data-state=collapsed]_&]:lib:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:lib:cursor-w-resize',
				'hover:group-data-[collapsible=offcanvas]:lib:bg-sidebar group-data-[collapsible=offcanvas]:lib:translate-x-0 group-data-[collapsible=offcanvas]:after:lib:left-full',
				'[[data-side=left][data-collapsible=offcanvas]_&]:lib:-right-2',
				'[[data-side=right][data-collapsible=offcanvas]_&]:lib:-left-2',
				className,
			)}
			{...props}
		/>
	);
}

function SidebarInset({ className, ...props }: React.ComponentProps<'main'>) {
	return (
		<main
			data-slot="sidebar-inset"
			className={cn(
				'lib:bg-background lib:relative lib:flex lib:w-full lib:flex-1 lib:flex-col',
				'md:peer-data-[variant=inset]:lib:m-2 md:peer-data-[variant=inset]:lib:ml-0 md:peer-data-[variant=inset]:lib:rounded-xl md:peer-data-[variant=inset]:lib:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:lib:ml-2',
				className,
			)}
			{...props}
		/>
	);
}

function SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>) {
	return (
		<Input
			data-slot="sidebar-input"
			data-sidebar="input"
			className={cn('lib:bg-background lib:h-8 lib:w-full lib:shadow-none', className)}
			{...props}
		/>
	);
}

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="sidebar-header"
			data-sidebar="header"
			className={cn('lib:flex lib:flex-col lib:gap-2 lib:p-2', className)}
			{...props}
		/>
	);
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="sidebar-footer"
			data-sidebar="footer"
			className={cn('lib:flex lib:flex-col lib:gap-2 lib:p-2', className)}
			{...props}
		/>
	);
}

function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
	return (
		<Separator
			data-slot="sidebar-separator"
			data-sidebar="separator"
			className={cn('lib:bg-sidebar-border lib:mx-2 lib:w-auto', className)}
			{...props}
		/>
	);
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="sidebar-content"
			data-sidebar="content"
			className={cn(
				'lib:flex lib:min-h-0 lib:flex-1 lib:flex-col lib:gap-2 lib:overflow-auto group-data-[collapsible=icon]:lib:overflow-hidden',
				className,
			)}
			{...props}
		/>
	);
}

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="sidebar-group"
			data-sidebar="group"
			className={cn('lib:relative lib:flex lib:w-full lib:min-w-0 lib:flex-col lib:p-2', className)}
			{...props}
		/>
	);
}

function SidebarGroupLabel({
	className,
	asChild = false,
	...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : 'div';

	return (
		<Comp
			data-slot="sidebar-group-label"
			data-sidebar="group-label"
			className={cn(
				'lib:text-sidebar-foreground/70 lib:ring-sidebar-ring lib:flex lib:h-8 lib:shrink-0 lib:items-center lib:rounded-md lib:px-2 lib:text-xs lib:font-medium lib:outline-hidden lib:transition-[margin,opacity] lib:duration-200 lib:ease-linear focus-visible:lib:ring-2 [&>svg]:lib:size-4 [&>svg]:lib:shrink-0',
				'group-data-[collapsible=icon]:lib:-mt-8 group-data-[collapsible=icon]:lib:opacity-0',
				className,
			)}
			{...props}
		/>
	);
}

function SidebarGroupAction({
	className,
	asChild = false,
	...props
}: React.ComponentProps<'button'> & { asChild?: boolean }) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="sidebar-group-action"
			data-sidebar="group-action"
			className={cn(
				'lib:text-sidebar-foreground lib:ring-sidebar-ring hover:lib:bg-sidebar-accent hover:lib:text-sidebar-accent-foreground lib:absolute lib:top-3.5 lib:right-3 lib:flex lib:aspect-square lib:w-5 lib:items-center lib:justify-center lib:rounded-md lib:p-0 lib:outline-hidden lib:transition-transform focus-visible:lib:ring-2 [&>svg]:lib:size-4 [&>svg]:lib:shrink-0',
				// Increases the hit area of the button on mobile.
				'after:lib:absolute after:lib:-inset-2 md:after:lib:hidden',
				'group-data-[collapsible=icon]:lib:hidden',
				className,
			)}
			{...props}
		/>
	);
}

function SidebarGroupContent({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="sidebar-group-content"
			data-sidebar="group-content"
			className={cn('lib:w-full lib:text-sm', className)}
			{...props}
		/>
	);
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
	return (
		<ul
			data-slot="sidebar-menu"
			data-sidebar="menu"
			className={cn('lib:flex lib:w-full lib:min-w-0 lib:flex-col lib:gap-1', className)}
			{...props}
		/>
	);
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>) {
	return (
		<li
			data-slot="sidebar-menu-item"
			data-sidebar="menu-item"
			className={cn('lib:group/menu-item lib:relative', className)}
			{...props}
		/>
	);
}

const sidebarMenuButtonVariants = cva(
	'lib:peer/menu-button lib:flex lib:w-full lib:items-center lib:gap-2 lib:overflow-hidden lib:rounded-md lib:p-2 lib:text-left lib:text-sm lib:outline-hidden lib:ring-sidebar-ring lib:transition-[width,height,padding] hover:lib:bg-sidebar-accent hover:lib:text-sidebar-accent-foreground focus-visible:lib:ring-2 active:lib:bg-sidebar-accent active:lib:text-sidebar-accent-foreground disabled:lib:pointer-events-none disabled:lib:opacity-50 lib:group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:lib:pointer-events-none aria-disabled:lib:opacity-50 data-[active=true]:lib:bg-sidebar-accent data-[active=true]:lib:font-medium data-[active=true]:lib:text-sidebar-accent-foreground data-[state=open]:hover:lib:bg-sidebar-accent data-[state=open]:hover:lib:text-sidebar-accent-foreground group-data-[collapsible=icon]:lib:size-8! group-data-[collapsible=icon]:lib:p-2! [&>span:last-child]:lib:truncate [&>svg]:lib:size-4 [&>svg]:lib:shrink-0',
	{
		variants: {
			variant: {
				default: 'hover:lib:bg-sidebar-accent hover:lib:text-sidebar-accent-foreground',
				outline:
					'lib:bg-background lib:shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:lib:bg-sidebar-accent hover:lib:text-sidebar-accent-foreground hover:lib:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
			},
			size: {
				default: 'lib:h-8 lib:text-sm',
				sm: 'lib:h-7 lib:text-xs',
				lg: 'lib:h-12 lib:text-sm group-data-[collapsible=icon]:lib:p-0!',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

function SidebarMenuButton({
	asChild = false,
	isActive = false,
	variant = 'default',
	size = 'default',
	tooltip,
	className,
	...props
}: React.ComponentProps<'button'> & {
	asChild?: boolean;
	isActive?: boolean;
	tooltip?: string | React.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>) {
	const Comp = asChild ? Slot : 'button';
	const { isMobile, state } = useSidebar();

	const button = (
		<Comp
			data-slot="sidebar-menu-button"
			data-sidebar="menu-button"
			data-size={size}
			data-active={isActive}
			className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
			{...props}
		/>
	);

	if (!tooltip) {
		return button;
	}

	if (typeof tooltip === 'string') {
		tooltip = {
			children: tooltip,
		};
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>{button}</TooltipTrigger>
			<TooltipContent side="right" align="center" hidden={state !== 'collapsed' || isMobile} {...tooltip} />
		</Tooltip>
	);
}

function SidebarMenuAction({
	className,
	asChild = false,
	showOnHover = false,
	...props
}: React.ComponentProps<'button'> & {
	asChild?: boolean;
	showOnHover?: boolean;
}) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="sidebar-menu-action"
			data-sidebar="menu-action"
			className={cn(
				'lib:text-sidebar-foreground lib:ring-sidebar-ring hover:lib:bg-sidebar-accent hover:lib:text-sidebar-accent-foreground lib:peer-hover/menu-button:text-sidebar-accent-foreground lib:absolute lib:top-1.5 lib:right-1 lib:flex lib:aspect-square lib:w-5 lib:items-center lib:justify-center lib:rounded-md lib:p-0 lib:outline-hidden lib:transition-transform focus-visible:lib:ring-2 [&>svg]:lib:size-4 [&>svg]:lib:shrink-0',
				// Increases the hit area of the button on mobile.
				'after:lib:absolute after:lib:-inset-2 md:after:lib:hidden',
				'lib:peer-data-[size=sm]/menu-button:top-1',
				'lib:peer-data-[size=default]/menu-button:top-1.5',
				'lib:peer-data-[size=lg]/menu-button:top-2.5',
				'group-data-[collapsible=icon]:lib:hidden',
				showOnHover &&
					'lib:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground lib:group-focus-within/menu-item:opacity-100 lib:group-hover/menu-item:opacity-100 data-[state=open]:lib:opacity-100 md:lib:opacity-0',
				className,
			)}
			{...props}
		/>
	);
}

function SidebarMenuBadge({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			data-slot="sidebar-menu-badge"
			data-sidebar="menu-badge"
			className={cn(
				'lib:text-sidebar-foreground lib:pointer-events-none lib:absolute lib:right-1 lib:flex lib:h-5 lib:min-w-5 lib:items-center lib:justify-center lib:rounded-md lib:px-1 lib:text-xs lib:font-medium lib:tabular-nums lib:select-none',
				'lib:peer-hover/menu-button:text-sidebar-accent-foreground lib:peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
				'lib:peer-data-[size=sm]/menu-button:top-1',
				'lib:peer-data-[size=default]/menu-button:top-1.5',
				'lib:peer-data-[size=lg]/menu-button:top-2.5',
				'group-data-[collapsible=icon]:lib:hidden',
				className,
			)}
			{...props}
		/>
	);
}

function SidebarMenuSkeleton({
	className,
	showIcon = false,
	...props
}: React.ComponentProps<'div'> & {
	showIcon?: boolean;
}) {
	// Random width between 50 to 90%.
	const width = React.useMemo(() => {
		return `${Math.floor(Math.random() * 40) + 50}%`;
	}, []);

	return (
		<div
			data-slot="sidebar-menu-skeleton"
			data-sidebar="menu-skeleton"
			className={cn('lib:flex lib:h-8 lib:items-center lib:gap-2 lib:rounded-md lib:px-2', className)}
			{...props}
		>
			{showIcon && <Skeleton className="lib:size-4 lib:rounded-md" data-sidebar="menu-skeleton-icon" />}
			<Skeleton
				className="lib:h-4 lib:max-w-(--skeleton-width) lib:flex-1"
				data-sidebar="menu-skeleton-text"
				style={
					{
						'--skeleton-width': width,
					} as React.CSSProperties
				}
			/>
		</div>
	);
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>) {
	return (
		<ul
			data-slot="sidebar-menu-sub"
			data-sidebar="menu-sub"
			className={cn(
				'lib:border-sidebar-border lib:mx-3.5 lib:flex lib:min-w-0 lib:translate-x-px lib:flex-col lib:gap-1 lib:border-l lib:px-2.5 lib:py-0.5',
				'group-data-[collapsible=icon]:lib:hidden',
				className,
			)}
			{...props}
		/>
	);
}

function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<'li'>) {
	return (
		<li
			data-slot="sidebar-menu-sub-item"
			data-sidebar="menu-sub-item"
			className={cn('lib:group/menu-sub-item lib:relative', className)}
			{...props}
		/>
	);
}

function SidebarMenuSubButton({
	asChild = false,
	size = 'md',
	isActive = false,
	className,
	...props
}: React.ComponentProps<'a'> & {
	asChild?: boolean;
	size?: 'sm' | 'md';
	isActive?: boolean;
}) {
	const Comp = asChild ? Slot : 'a';

	return (
		<Comp
			data-slot="sidebar-menu-sub-button"
			data-sidebar="menu-sub-button"
			data-size={size}
			data-active={isActive}
			className={cn(
				'lib:text-sidebar-foreground lib:ring-sidebar-ring hover:lib:bg-sidebar-accent hover:lib:text-sidebar-accent-foreground active:lib:bg-sidebar-accent active:lib:text-sidebar-accent-foreground [&>svg]:lib:text-sidebar-accent-foreground lib:flex lib:h-7 lib:min-w-0 lib:-translate-x-px lib:items-center lib:gap-2 lib:overflow-hidden lib:rounded-md lib:px-2 lib:outline-hidden focus-visible:lib:ring-2 disabled:lib:pointer-events-none disabled:lib:opacity-50 aria-disabled:lib:pointer-events-none aria-disabled:lib:opacity-50 [&>span:last-child]:lib:truncate [&>svg]:lib:size-4 [&>svg]:lib:shrink-0',
				'data-[active=true]:lib:bg-sidebar-accent data-[active=true]:lib:text-sidebar-accent-foreground',
				size === 'sm' && 'lib:text-xs',
				size === 'md' && 'lib:text-sm',
				'group-data-[collapsible=icon]:lib:hidden',
				className,
			)}
			{...props}
		/>
	);
}

export {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSkeleton,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarSeparator,
	SidebarTrigger,
	useSidebar,
};
