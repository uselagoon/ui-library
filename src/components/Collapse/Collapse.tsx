import { Collapse, CollapseProps } from 'antd';
import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

export type UICollapseProps = CollapseProps & {
	type: 'highlightPanels' | 'default';
};

const UICollapse = forwardRef<HTMLDivElement, UICollapseProps>((props, ref) => {
	const { className, items, style, type = 'default', ...rest } = props;
	return <StyledCollapse $type={type} ref={ref} items={items} {...rest} />;
});
UICollapse.displayName = 'Collapse';

const StyledCollapse = styled(Collapse)<{ $type?: UICollapseProps['type'] }>`
	&.ant-collapse {
		font-family: 'ArabicPro-Regular', sans-serif;
		font-size: 14px;
		line-height: 22px;
		overflow: hidden;
		${(props) =>
			props.theme.colorScheme === 'dark' &&
			css`
				&.ant-collapse > .ant-collapse-item > .ant-collapse-header {
					background-color: ${colors.darkGray};
					color: ${colors.white};
				}
				.ant-collapse-content-box {
					background-color: ${colors.gray};
					${props.$type === 'default' &&
					css`
						background-color: ${colors.darkGray};
					`}
				}
			`}
	}
`;
export default UICollapse;
