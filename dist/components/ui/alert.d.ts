import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const alertVariants: (props?: ({
    variant?: "default" | "destructive" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
declare function Alert({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>): import("react/jsx-dev-runtime").JSX.Element;
declare function AlertTitle({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-dev-runtime").JSX.Element;
declare function AlertDescription({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-dev-runtime").JSX.Element;
export { Alert, AlertTitle, AlertDescription };
//# sourceMappingURL=alert.d.ts.map