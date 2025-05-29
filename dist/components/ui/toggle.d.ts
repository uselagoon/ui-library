import { VariantProps } from 'class-variance-authority';
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
declare function Toggle({ className, variant, size, ...props }: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>): import("react/jsx-dev-runtime").JSX.Element;
export { Toggle, toggleVariants };
//# sourceMappingURL=toggle.d.ts.map