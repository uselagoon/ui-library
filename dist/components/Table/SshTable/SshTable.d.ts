type Error = {
    message?: string;
};
type sshKey = {
    id: number;
    name: string;
    created: string;
    keyType: string;
    keyValue: string;
    keyFingerprint: string;
    deleteMutation: {
        mutate: () => void;
        loading: boolean;
        called: boolean;
        error?: Error;
    };
    updateMutation: {
        mutate: (name: string, publicKey: string) => void;
        loading: boolean;
        called: boolean;
        error?: Error;
    };
};
type SshTableProps = {
    sshKeys: sshKey[];
    deleteMutation: (variables: {
        input: {
            id: sshKey['id'];
        };
    }) => void;
    updateMutation: (variables: {
        input: {
            id: sshKey['id'];
            patch: {
                name: sshKey['name'];
                publicKey: string;
            };
        };
    }) => void;
};
declare const SshTable: ({ sshKeys, deleteMutation, updateMutation }: SshTableProps) => import("react/jsx-runtime").JSX.Element;
export default SshTable;
