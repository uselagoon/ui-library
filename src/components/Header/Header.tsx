import React, { ReactNode, forwardRef } from 'react';
import { StyledHeader, StyledLink, StyledNav, ThemeSwitcher } from './styles';
import genAvatarBackground from './helpers/genAvatarBackground';
import { IconSun, LagoonIcon } from '../Icons';

export type HeaderProps = {
	icon?: React.ReactNode;
	toggleTheme: () => void;
	userInfo: {
		email: string;
		image?: React.ImgHTMLAttributes<HTMLImageElement>['src'];
		firstName?: string;
		lastName?: string;
	};
	navLinks: ReactNode[];
};

const InternalHeader: React.ForwardRefRenderFunction<HTMLElement, HeaderProps> = (
	{ userInfo, navLinks, icon, toggleTheme },
	ref,
) => {
	const { firstName, lastName, image, email } = userInfo;

	const userImageExists = !!image;

	const avatarBg = firstName && lastName ? genAvatarBackground(firstName.charAt(0), lastName.charAt(0)) : null;

	// show img + firstname lastname
	// or avatarbg + firstname lastname
	// or genericImage + user email

	return (
		<StyledHeader ref={ref}>
			<section className="icon-container">{icon ? icon : <LagoonIcon className="icon" />}</section>
			<StyledNav className="navigation">
				{navLinks.map((item) => (
					<StyledLink key={item?.toString()}>{item}</StyledLink>
				))}
			</StyledNav>

			<ThemeSwitcher onClick={toggleTheme}>
				<IconSun className="theme-icon" />
			</ThemeSwitcher>
		</StyledHeader>
	);
};

const LagoonHeader = forwardRef<HTMLElement, HeaderProps>(InternalHeader);

LagoonHeader.displayName = 'LagoonHeader';

export default LagoonHeader;
