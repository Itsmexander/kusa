import { Button, Modal, Checkbox, Form, Input, Radio, Tag } from 'antd';
import React, { useState } from 'react';
import FormTabs from './FormTabs';
import { ActiveTab, ConfigFormProps } from './Types';

export default function InfoConfig() {

    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };
    
    const handleCancel = () => {
        setOpen(false);
    };
    
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Edit Profile
            </Button>
            <Modal
                open={open}
                title="Configuration"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}
            >
                <div className='flex mt-10 justify-center overflow-auto'>
                    <ConfigForm handleCancel={handleCancel} handleOk={handleOk} loading={loading} />
                </div>
            </Modal>
        </>
    )
}

const ConfigForm: React.FC<ConfigFormProps> = ({ handleOk, handleCancel, loading }) => {

    const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
        <>
            {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
            {label}
        </>
    );

    const [form] = Form.useForm();
    const [activeTab, setActiveTab] = useState<ActiveTab>('Tab1');

    const onRequiredTypeChange = ({ ativeTabValue }: { ativeTabValue: ActiveTab }) => {
        setActiveTab(ativeTabValue);
    };

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                initialValues={{ ativeTabValue: activeTab }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={customizeRequiredMark}
                className='w-full'
            >
                <Form.Item label="Required Mark" name="ativeTabValue">
                    <Radio.Group className='flex justify-center text-center'>
                        <Radio.Button value="Tab1" className='w-full'>Tab1</Radio.Button>
                        <Radio.Button value="Tab2" className='w-full'>Tab2</Radio.Button>
                        <Radio.Button value="Tab3" className='w-full'>Tab3</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                
                <Form.Item>
                    <FormTabs activeTab={activeTab} customizeRequiredMark={customizeRequiredMark} />
                </Form.Item>

                <Form.Item className='flex justify-end'>
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Submit
                    </Button>,
                </Form.Item>
            </Form>
        </>
    )
}