import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Breadcrumb } from 'antd';
import { NextPage } from 'next';
import { HomeIcon, PieChartIcon, SendIcon } from 'lucide-react';
import { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems';
import { useRouter } from 'next/router';

const { Header, Sider, Content } = Layout;

interface Props {
    children: React.ReactNode;
}

const AntLayout: NextPage<Props> = ({ children }) => {
    const { push, pathname, asPath } = useRouter()


    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const Items: ItemType<MenuItemType>[] = [
        {
            key: '/',
            icon: <HomeIcon size={15} />,
            label: 'Home',
            onClick: () => push('/'),
        },
        {
            key: '/dashboard',
            icon: <PieChartIcon size={15} />,
            label: 'Dashboard',
            onClick: () => push('/dashboard'),

        },
        {
            key: '3',
            icon: <SendIcon size={15} />,
            label: 'Form',
            children: [
                {
                    key: '/form/1',
                    icon: <SendIcon size={15} />,
                    label: 'กนส. 1',
                    onClick: () => push('/form/1'),
                },
                {
                    key: '/form/2',
                    icon: <SendIcon size={15} />,
                    label: 'กนส. 2',
                    onClick: () => push('/form/2'),
                },
            ]
        },
    ]

    return (
        <Layout className='min-h-screen'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className='text-2xl text-white py-2 pl-6'>
                    {collapsed ? 'KU' : 'KUSA'}
                </div>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[pathname]}
                    defaultOpenKeys={['3']}
                    items={Items}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                {/* <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {children}
                </Content> */}
                <div className=''>

                </div>
                <Breadcrumb
                    items={[
                        {
                            title: 'Home',
                        },
                        {
                            title: <a href="">Application Center</a>,
                        },
                        {
                            title: <a href="">Application List</a>,
                        },
                        {
                            title: 'An Application',
                        },
                    ]}
                />
                <div className='truncate'>
                    {children}asdfasdfasdf
                </div>

            </Layout>
        </Layout>
    );
}

export default AntLayout;