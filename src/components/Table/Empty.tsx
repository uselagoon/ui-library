import { Empty } from 'antd';
import { IconInfoCircle } from '../Icons';

export const EmptyDisplay = (
	<Empty image={<IconInfoCircle size={60} />} description={<span>Nothing to display</span>}></Empty>
);
