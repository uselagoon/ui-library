import { IconInfoCircle } from '../Icons';
import { StyledEmptyTableDescription } from './styles';

export const EmptyDisplay = (
	<StyledEmptyTableDescription
		image={<IconInfoCircle size={60} />}
		description={<span>Nothing to display</span>}
	></StyledEmptyTableDescription>
);
