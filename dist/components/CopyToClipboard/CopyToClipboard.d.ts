import { FC } from 'react';
export interface ClipboardProps {
    text: string | number;
    type?: 'visible' | 'hidden' | 'hiddenWithIcon';
    width?: number | string;
    withToolTip?: boolean;
}
declare const CopyToClipboard: FC<ClipboardProps>;
export default CopyToClipboard;
