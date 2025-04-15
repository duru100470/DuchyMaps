interface ModalProps {
    title: string;
    open: boolean;
    children?: any;
    onClose?: () => void;
}

type OmittedModelProps = Omit<ModalProps, "open">;

export type {
    ModalProps,
    OmittedModelProps
};