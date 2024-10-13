import React, { forwardRef } from 'react';
import { LagoonIcon } from '../Icons';
import { BgColorsOutlined } from '@ant-design/icons';
import { StyledFooter, ThemeSwitcher } from './styles';

export type FooterProps = {
	icon?: React.ReactNode;
	toggleTheme?: () => void;
};
const InternalFooter: React.ForwardRefRenderFunction<HTMLElement, FooterProps> = ({ icon, toggleTheme }, ref) => {
	return (
		<StyledFooter ref={ref}>
			<section className="icon-container">{icon ? icon : <LagoonIcon className="icon" />}</section>
			<ThemeSwitcher onClick={toggleTheme}>
				<BgColorsOutlined className="theme-icon" />
			</ThemeSwitcher>
		</StyledFooter>
	);
};

const LagoonFooter = forwardRef<HTMLElement, FooterProps>(InternalFooter);

LagoonFooter.displayName = 'LagoonFooter';

export default LagoonFooter;
