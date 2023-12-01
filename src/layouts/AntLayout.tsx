// import HeaderComponent from '@/components/HeaderComponent';
import React, { useState } from 'react';
import { Layout, Menu, Button, theme, Breadcrumb } from 'antd';
import { NextPage } from 'next';
import { HomeIcon, PieChartIcon, SendIcon } from 'lucide-react';
import { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const { Header, Sider, Content } = Layout;

const HeaderComponent = dynamic(() => import('@/components/HeaderComponent'), { ssr: false })

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
                <HeaderComponent setCollapsed={(v) => setCollapsed(v)} collapsed={collapsed} />        
                <div className='truncate'>
                    {children}
                </div>

            </Layout>
        </Layout>
    );
}

export default AntLayout;