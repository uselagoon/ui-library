interface ActionButtonProps {
    selected: boolean;
    onSelect: () => void;
    icon: React.ReactNode;
    title: string;
    description: string;
    disabled?: boolean;
    type?: string;
}
export default function ActionButton({ selected, onSelect, icon, title, description, disabled, type }: ActionButtonProps): import("react/jsx-dev-runtime").JSX.Element;
export {};
//# sourceMappingURL=ActionButton.d.ts.map