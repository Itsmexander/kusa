import React from 'react'
import { Form, Input } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { ActiveTab } from './Types';

export default function FormTabs({ activeTab, customizeRequiredMark }: { activeTab: ActiveTab, customizeRequiredMark: any }) {
    const Tab1 = () => {
        return (
            <>
                <Form.Item label="Field A" required tooltip="This is a required field">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="Field B"
                    tooltip={{ title: 'a with customize icon', icon: <InfoCircleOutlined /> }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
            </>
        )
    }

    const Tab2 = () => {
        return (
            <>
                <Form.Item label="Field C" required tooltip="This is a required field">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="Field D"
                    tooltip={{ title: 'b with customize icon', icon: <InfoCircleOutlined /> }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
            </>
        )
    }

    const Tab3 = () => {
        return (
            <>
                <Form.Item label="Field E" required tooltip="This is a required field">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="Field F"
                    tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
            </>
        )
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Tab1':
                return <Tab1 />;
            case 'Tab2':
                return <Tab2 />;
            case 'Tab3':
                return <Tab3 />;
            default:
                return null;
        }
    };

    return (
        <Form
            layout="vertical"
            requiredMark={customizeRequiredMark}
        >
            {renderTabContent()}
        </Form>
    )
}