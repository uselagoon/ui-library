import { default as React } from 'react';
export interface ClipboardProps {
    text: string | number;
    type?: 'visible' | 'hidden' | 'hiddenWithIcon' | 'alwaysHidden';
    width?: number | string;
    fontSize?: string;
    withToolTip?: boolean;
    iconOnly?: boolean;
}
declare const CopyToClipboard: React.FC<ClipboardProps>;
export default CopyToClipboard;
//# sourceMappingURL=CopyToClipboard.d.ts.map