export type ActiveTab = 'Tab1' | 'Tab2' | 'Tab3';

export type ConfigFormProps = {
    handleOk: () => void;
    handleCancel: () => void;
    loading: boolean;
}