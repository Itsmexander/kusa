import React from 'react';
import { MenuProps } from 'antd';
import { FaUser, FaUsers, FaInfoCircle } from "react-icons/fa";

const createMenuItem = (key: string, label: string, icon?: React.ReactNode, children?: MenuProps['items']) => ({
    key,
    label,
    icon,
    children,
});

export const Items: MenuProps['items'] = [
    createMenuItem('1', 'Club Info', <FaInfoCircle />, [
        createMenuItem('1-2', 'Founded in...'),
        createMenuItem('1-3', 'About us...'),
    ]),
    createMenuItem('2', 'Representative', <FaUser />, [
        createMenuItem('2-1', 'President:...')
    ]),
    createMenuItem('3', 'Members', <FaUsers />, [
        createMenuItem('3-1', 'Member 1'),
        createMenuItem('3-2', 'Member 2'),
        createMenuItem('3-3', 'Member 3'),
    
    ]),
];