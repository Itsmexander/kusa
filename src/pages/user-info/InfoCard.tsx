import React from 'react';
import { MenuProps } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const createMenuItem = (key: string, label: string, icon?: React.ReactNode, children?: MenuProps['items']) => ({
    key,
    label,
    icon,
    children,
});

export const items: MenuProps['items'] = [
    createMenuItem('1', 'Club Info', <UserOutlined />, [
        createMenuItem('1-2', 'Founded in...'),
        createMenuItem('1-3', 'About us...'),
    ]),
    createMenuItem('2', 'Representative', <LaptopOutlined />, [
        createMenuItem('2-1', 'President:...')
    ]),
    createMenuItem('3', 'Members', <NotificationOutlined />, [
        createMenuItem('3-1', 'Member 1'),
        createMenuItem('3-2', 'Member 2'),
        createMenuItem('3-3', 'Member 3'),
    
    ]),
];