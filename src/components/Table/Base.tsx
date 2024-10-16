import { ConfigProvider, TableProps } from 'antd';
import { forwardRef } from 'react';
import { StyledBaseTable } from './styles';
import { EmptyDisplay } from './Empty';

export interface BaseTableWithComponents
	extends React.ForwardRefExoticComponent<BaseTableProps & React.RefAttributes<HTMLDivElement>> {
	SshTable: React.FC<any>;
}

type BaseTableProps = Omit<TableProps, 'locale'>;

const InternalTable: React.ForwardRefRenderFunction<HTMLDivElement, BaseTableProps> = (
	{ columns, dataSource, children, ...props }: BaseTableProps,
	_,
) => {
	return (
		<>
			<ConfigProvider renderEmpty={() => EmptyDisplay}>
				<StyledBaseTable dataSource={dataSource} columns={columns} ref={null} pagination={false} {...props} />
			</ConfigProvider>
		</>
	);
};

const BaseTable = forwardRef<HTMLDivElement, BaseTableProps>(InternalTable) as BaseTableWithComponents;

BaseTable.displayName = 'Table';

export default BaseTable;

export type { BaseTableProps };
