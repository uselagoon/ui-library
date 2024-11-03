import React, { forwardRef, ReactNode } from 'react';
import { StyledTip, TipContent, TipIcon } from './styles';
import { IconLagoonOnly } from '../Icons';

type TipProps = {
	content: ReactNode;
};

const InternalTip: React.ForwardRefRenderFunction<any, TipProps> = ({ content }, ref) => {
	return (
		<StyledTip ref={ref} className="lagoon-tip">
			<TipIcon>
				<IconLagoonOnly />
			</TipIcon>
			<TipContent> {content} </TipContent>
		</StyledTip>
	);
};

const Tip = forwardRef<HTMLElement, TipProps>(InternalTip);

Tip.displayName = 'Tip';

export type { TipProps };
export default Tip;
