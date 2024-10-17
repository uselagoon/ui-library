type Error = {
    message?: string;
};
type BasicFn = (...args: any[]) => any;
type sshKey = {
    id: number;
    name: string;
    created: string;
    keyType: string;
    keyValue: string;
    keyFingerprint: string;
};
export type SshTableProps = {
    sshKeys: sshKey[];
    refetch: BasicFn;
    deleteOptions?: {
        deleteFunction: BasicFn;
        deleteData?: any;
        deleteLoading: boolean;
        deleteErr?: Error;
    };
    updateOptions?: {
        updateFunction: BasicFn;
        updateData?: any;
        updateLoading: boolean;
        updateErr?: Error;
    };
    addNewKey: {
        addMutation: (keyName: string, keyValue: string) => Promise<any>;
        addLoading: boolean;
    };
};
declare const SshTable: ({ sshKeys, addNewKey: { addMutation, addLoading }, refetch }: SshTableProps) => import("react/jsx-runtime").JSX.Element;
export default SshTable;
