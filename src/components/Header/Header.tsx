import React, { ReactNode, forwardRef, useEffect, useRef, useState } from 'react';
import {
	StyledAvatarBubble,
	StyledAvatarImage,
	StyledHeader,
	StyledLine,
	StyledLink,
	StyledNav,
	StyledNavWrapper,
	StyledUserDropdown,
	StyledUserInfo,
	ThemeSwitcher,
} from './styles';
import genAvatarBackground from './helpers/genAvatarBackground';
import { IconSun, LagoonIcon } from '../Icons';
import { MenuProps } from 'antd';
import { getCurrentPathIndex } from './helpers/getCurrentPathIndex';
import { useLinkComponent } from '../../providers/NextLinkProvider';

export type HeaderProps = {
	logo?: React.ReactNode;
	toggleTheme: () => void;
	userInfo: {
		email: string;
		image?: React.ImgHTMLAttributes<HTMLImageElement>['src'];
		firstName?: string;
		lastName?: string;
	};
	userDropdownMenu: MenuProps['items'];
	navLinks: ReactNode[];
	currentPath?: string;
};

const InternalHeader: React.ForwardRefRenderFunction<HTMLElement, HeaderProps> = (
	{ userInfo, navLinks, logo, toggleTheme, userDropdownMenu, currentPath },
	ref,
) => {
	const { firstName, lastName, image, email } = userInfo;

	const userImageExists = !!image;

	const firstLastProvided = !!(firstName && lastName);

	const avatarBg = firstLastProvided
		? genAvatarBackground(firstName.charAt(0), lastName.charAt(0))
		: genAvatarBackground(email.charAt(0), email.charAt(1));

	const avatarInitials = firstLastProvided
		? firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
		: email.charAt(0).toUpperCase();

	// show img + firstname lastname
	// or avatarbg + firstname lastname
	// or genericImage + user email

	const avatarToUse = userImageExists ? (
		<StyledAvatarImage src={image} alt="user_avatar" />
	) : (
		<StyledAvatarBubble $bgColor={avatarBg.bgColor} $textColor={avatarBg.textColor}>
			{avatarInitials}
		</StyledAvatarBubble>
	);

	const userDisplayName = firstLastProvided ? (
		<span className="user-name">{`${firstName} ${lastName}`}</span>
	) : (
		<span className="user-name">{email}</span>
	);

	const navRef = useRef<HTMLDivElement>(null);

	const [underlineStyle, setUnderlineStyle] = useState<{ width: string | number; left: string | number }>({
		width: 'initial',
		left: 'initial',
	});

	const updateActiveIndex = (current?: string) => getCurrentPathIndex(navLinks, current || '');

	const [activeIdx, setActiveIdx] = useState(updateActiveIndex(currentPath));

	useEffect(() => {
		setActiveIdx(updateActiveIndex(currentPath));
	}, [currentPath]);

	useEffect(() => {
		setTimeout(() => {
			if (navRef.current && activeIdx !== undefined) {
				const activeNav = navRef.current.children[activeIdx];
				if (activeNav) {
					const rect = activeNav.getBoundingClientRect();
					const parentRect = navRef.current.getBoundingClientRect();

					setUnderlineStyle({
						width: rect.width - 40,
						left: rect.x - parentRect.x + 20,
					});
				}
			}
		}, 50);
	}, [activeIdx]);

	const handleActiveUnderline = (num: number) => {
		setActiveIdx(num);
	};

	const shouldUnderlineRender = !!(activeIdx !== undefined && activeIdx >= 0 && activeIdx < navLinks.length);

	const Link = useLinkComponent();

	return (
		<StyledHeader ref={ref}>
			<section className="icon-container">
				<Link href="/projects">{logo ? logo : <LagoonIcon className="icon" />}</Link>
			</section>
			<StyledNav className="navigation">
				<StyledNavWrapper ref={navRef}>
					{navLinks.map((item, idx) => (
						<StyledLink
							className={`${idx === activeIdx ? 'active' : ''}`}
							onClick={() => handleActiveUnderline(idx)}
							key={`nav-${idx}`}
						>
							{item}
						</StyledLink>
					))}
				</StyledNavWrapper>

				{shouldUnderlineRender ? (
					<StyledLine
						style={{
							width: `${underlineStyle.width}px`,
							left: `${underlineStyle.left}px`,
						}}
					/>
				) : null}
			</StyledNav>

			<StyledUserDropdown
				getPopupContainer={() => document.getElementById('user_dropdown_container') as HTMLElement}
				menu={{ items: userDropdownMenu }}
				trigger={['hover']}
			>
				<StyledUserInfo>
					{avatarToUse}
					{userDisplayName}
				</StyledUserInfo>
			</StyledUserDropdown>

			<section id="user_dropdown_container"></section>

			<ThemeSwitcher onClick={toggleTheme}>
				<IconSun className="theme-icon" />
			</ThemeSwitcher>
		</StyledHeader>
	);
};

const LagoonHeader = forwardRef<HTMLElement, HeaderProps>(InternalHeader);

LagoonHeader.displayName = 'LagoonHeader';

export default LagoonHeader;
