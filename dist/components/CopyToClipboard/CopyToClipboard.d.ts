import { FC } from "react";
export interface ClipboardProps {
    text: string | number;
    type?: "visible" | "hidden";
    width?: number;
}
declare const CopyToClipBoard: FC<ClipboardProps>;
export default CopyToClipBoard;
