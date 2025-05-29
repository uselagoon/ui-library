import { Command as CommandPrimitive } from 'cmdk';
import { Dialog } from './dialog';
import * as React from "react";
declare function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>): import("react/jsx-dev-runtime").JSX.Element;
declare function CommandDialog({ title, description, children, ...props }: React.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
}): import("react/jsx-dev-runtime").JSX.Element;
declare function CommandInput({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Input>): import("react/jsx-dev-runtime").JSX.Element;
declare function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>): import("react/jsx-dev-runtime").JSX.Element;
declare function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>): import("react/jsx-dev-runtime").JSX.Element;
declare function CommandGroup({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Group>): import("react/jsx-dev-runtime").JSX.Element;
declare function CommandSeparator({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Separator>): import("react/jsx-dev-runtime").JSX.Element;
declare function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>): import("react/jsx-dev-runtime").JSX.Element;
declare function CommandShortcut({ className, ...props }: React.ComponentProps<"span">): import("react/jsx-dev-runtime").JSX.Element;
export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator, };
//# sourceMappingURL=command.d.ts.map