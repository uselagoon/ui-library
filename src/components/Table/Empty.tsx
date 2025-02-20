import { IconInfoCircle } from '../Icons';
import { StyledEmptyTableDescription } from './styles';

export const EmptyDisplay = (
	<StyledEmptyTableDescription
		image={<IconInfoCircle size={60} />}
		description={<span data-cy="empty">Nothing to display</span>}
	></StyledEmptyTableDescription>
);
