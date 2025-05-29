import React, { ReactNode } from 'react';
import Highlighter from 'react-highlight-words';

export const highlightTextInElement = (element: ReactNode, searchString: string, key: string | number): any => {
	// recursively apply highlighting to all text nodes
	if (typeof element === 'string') {
		return (
			<Highlighter highlightClassName="highlighted" searchWords={[searchString]} autoEscape textToHighlight={element} />
		);
	}

	if (React.isValidElement(element)) {
		return React.cloneElement(
			element,
			//@ts-ignore
			{ ...element.props, key: `item-${key}` },
			//@ts-ignore
			React.Children.map(element.props.children, (child, index) =>
				highlightTextInElement(child, searchString, `${index}-${key}`),
			),
		);
	}

	return element;
};
