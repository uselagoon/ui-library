import React, { useState } from 'react';
import {
	Pagination,
	PaginationEllipsis,
	PaginationContent,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	PaginationItem,
} from '../ui/pagination';

type PaginationProps = React.ComponentProps<typeof Pagination> & {
	allItems: number;
	itemsPerPage: number;
	initialPage?: number;
};

export default function UIPagination({ allItems, itemsPerPage, initialPage = 1, ...rest }: PaginationProps) {
	const totalPages = Math.ceil(allItems / itemsPerPage);
	const [currentPage, setCurrentPage] = useState(initialPage);

	const handlePrevious = () => {
		setCurrentPage((prev) => Math.max(1, prev - 1));
	};

	const handleNext = () => {
		setCurrentPage((prev) => Math.min(totalPages, prev + 1));
	};

	const renderPageNumbers = () => {
		const pageNumbers = [];

		let startPage = Math.max(1, currentPage - 1);
		let endPage = startPage + 2;

		if (endPage > totalPages) {
			endPage = totalPages;
			startPage = Math.max(1, endPage - 2);
		}

		if (startPage > 1) {
			pageNumbers.push(
				<PaginationItem key="start-ellipsis">
					<PaginationEllipsis />
				</PaginationItem>,
			);
		}

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(
				<PaginationItem key={i}>
					<PaginationLink
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setCurrentPage(i);
						}}
						isActive={i === currentPage}
					>
						{i}
					</PaginationLink>
				</PaginationItem>,
			);
		}

		if (endPage < totalPages) {
			pageNumbers.push(
				<PaginationItem key="end-ellipsis">
					<PaginationEllipsis />
				</PaginationItem>,
			);
		}

		return pageNumbers;
	};

	return (
		<Pagination {...rest}>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" onClick={handlePrevious} />
				</PaginationItem>

				{renderPageNumbers()}

				<PaginationItem>
					<PaginationNext href="#" onClick={handleNext} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
