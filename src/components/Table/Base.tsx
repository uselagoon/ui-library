import { ConfigProvider, TableProps } from 'antd';
import { forwardRef } from 'react';
import { StyledBaseTable } from './styles';
import { EmptyDisplay } from './Empty';
import { SshTableProps } from './SshTable/SshTable';
import { DeploymentsTableProps } from './DeploymentsTable/DeploymentsTable';

export interface BaseTableWithComponents
	extends React.ForwardRefExoticComponent<BaseTableProps & React.RefAttributes<HTMLDivElement>> {
	SshTable: React.FC<SshTableProps>;
	DeploymentsTable: React.FC<DeploymentsTableProps>;
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
