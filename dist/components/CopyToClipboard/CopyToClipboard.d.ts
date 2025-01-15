import { FC } from 'react';
export interface ClipboardProps {
    text: string | number;
    type?: 'visible' | 'hidden' | 'hiddenWithIcon' | 'alwaysHidden';
    width?: number | string;
    fontSize?: string;
    withToolTip?: boolean;
}
declare const CopyToClipboard: FC<ClipboardProps>;
export default CopyToClipboard;
