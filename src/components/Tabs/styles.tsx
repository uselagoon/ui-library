import { Tabs } from 'antd';
import styled, { css } from 'styled-components';

export const StyledTabs = styled(Tabs)<{ $type: 'navigation' | 'default' }>`
	.ant-tabs-nav {
		margin-bottom: 0;
		> div {
			background-color: ${(props) => (props.theme.colorScheme === 'light' ? '#fff' : 'initial')};
		}
	}
`;

export const StyledTabChildren = styled.section`
	box-shadow: 2px 2px 4px 0px #69696933;
	background-color: ${(props) => (props.theme.colorScheme === 'light' ? props.theme.UI.texts.primary : 'initial')};
	padding-top: 1.5rem;
	padding-inline: 1rem;
	min-height: 27.1875rem;
	max-height: max-content;
	padding-bottom: 2.5rem;
	background-color: ${(props) => (props.theme.colorScheme === 'light' ? '#fff' : 'initial')};
`;
