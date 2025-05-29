import { Button } from './button';
import * as React from 'react';
declare function Pagination({ className, ...props }: React.ComponentProps<'nav'>): import("react/jsx-dev-runtime").JSX.Element;
declare function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>): import("react/jsx-dev-runtime").JSX.Element;
declare function PaginationItem({ ...props }: React.ComponentProps<'li'>): import("react/jsx-dev-runtime").JSX.Element;
type PaginationLinkProps = {
    isActive?: boolean;
} & Pick<React.ComponentProps<typeof Button>, 'size'> & React.ComponentProps<'a'>;
declare function PaginationLink({ className, isActive, size, ...props }: PaginationLinkProps): import("react/jsx-dev-runtime").JSX.Element;
declare function PaginationPrevious({ className, ...props }: React.ComponentProps<typeof PaginationLink>): import("react/jsx-dev-runtime").JSX.Element;
declare function PaginationNext({ className, ...props }: React.ComponentProps<typeof PaginationLink>): import("react/jsx-dev-runtime").JSX.Element;
declare function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>): import("react/jsx-dev-runtime").JSX.Element;
export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis, };
//# sourceMappingURL=pagination.d.ts.map