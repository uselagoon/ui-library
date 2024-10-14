import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import colors from '../../_util/colors';

type ItemType = {
	prefixCls?: string;
	className?: string;
	style?: React.CSSProperties;
	label?: React.ReactNode;
	labelStyle?: React.CSSProperties;
	contentStyle?: React.CSSProperties;
	children: React.ReactNode;
	key?: React.Key;
};

export type DetailsType = Omit<DescriptionsProps, 'items'> &
	(
		| {
				type: 'topToBottom';
				items?: ItemType[];
		  }
		| {
				type?: 'default';
				items?: DescriptionsProps['items'];
		  }
	);

const UIDetails: FC<DetailsType> = (props) => {
	const { className, items, type = 'default', style, ...rest } = props;

	if (type === 'topToBottom') {
		// max span
		const itemsToUse = items?.map((item) => ({
			...item,
			span: 24,
		}));

		return <StyledDetails $type={type} items={itemsToUse} {...rest} />;
	}

	return <StyledDetails items={items} {...rest} />;
};
UIDetails.displayName = 'Details';

const StyledDetails = styled(Descriptions)<{ $type?: 'topToBottom' }>`
	&.ant-descriptions {
		${(props) =>
			props.$type === 'topToBottom' &&
			css`
				table {
					padding-top: 1px;
					display: grid;
					border-collapse: collapse !important;
					tbody {
						display: grid;
					}
				}
				tr,
				td {
					margin-top: -1px;
				}
				table {
				}
				.ant-descriptions-view {
					border: none !important;
				}
			`}

		font-family: 'ArabicPro-Regular', sans-serif;
		font-size: 14px;
		line-height: 22px;
		overflow: hidden;
		.ant-descriptions-row .ant-descriptions-item-label {
			text-transform: uppercase;
		}

		${(props) =>
			props.theme.colorScheme === 'dark' &&
			css`
				& .ant-descriptions-header > .ant-descriptions-title {
					color: #fff;
				}

				&:not(.ant-descriptions-bordered) .ant-descriptions-view {
					border-radius: 0;
					overflow: hidden;
					.ant-descriptions-row {
						.ant-descriptions-item-label {
							background-color: ${colors.lighterGray};
							color: #fff;
						}
						.ant-descriptions-item-content {
							color: ${colors.white};
							background-color: #75715e00;
						}
					}
				}
				&.ant-descriptions-bordered .ant-descriptions-view {
					border: 1px solid #fff;
					border-radius: 0;
					overflow: hidden;
					.ant-descriptions-row {
						.ant-descriptions-item-label {
							background-color: ${colors.lighterGray};
							color: #fff;
							text-transform: uppercase;
							border: 1px solid #fff;
						}
						.ant-descriptions-item-content {
							color: ${colors.white};
							background-color: #272822;
							&:not(:last-of-type) {
								border: 1px solid #fff;
							}
							border: 1px solid #fff;
						}
					}
				}
				.ant-collapse-content-box {
					background-color: ${colors.gray};
				}
			`}
	}
`;
export default UIDetails;
