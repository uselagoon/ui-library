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
    deleteKey: {
        delete: BasicFn;
        data?: any;
        loading: boolean;
        err?: Error;
    };
    updateKey: {
        update: BasicFn;
        data?: any;
        loading: boolean;
        err?: Error;
    };
    addNewKey: {
        add: (keyName: string, keyValue: string) => Promise<any>;
        loading: boolean;
        err?: Error;
    };
};
declare const SshTable: ({ sshKeys, addNewKey: { add, loading }, updateKey, deleteKey, refetch }: SshTableProps) => import("react/jsx-runtime").JSX.Element;
export default SshTable;
