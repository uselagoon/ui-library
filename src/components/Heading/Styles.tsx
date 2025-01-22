import { Typography } from 'antd';
import styled, { css } from 'styled-components';
import { Heading } from './Heading';

const fontStyles = {
	[1]: css`
		font-size: 42px;
		line-height: 48px;
	`,
	[2]: css`
		font-size: 28px;
		line-height: 32px;
	`,
	[3]: css`
		font-size: 20px;
		line-height: 22px;
	`,
	[4]: css`
		font-size: 16px;
		line-height: 22px;
	`,
	[5]: css`
		font-size: 15px;
		line-height: 22px;
	`,
};

const UITitleElement = styled(Typography.Title)<{ level: Heading }>``;

export default UITitleElement;
