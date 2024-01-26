// import HeaderComponent from '@/components/HeaderComponent';
import React, { useState } from 'react';
import { Layout, Menu, Button, theme, Breadcrumb, Avatar, Dropdown } from 'antd';
import { NextPage } from 'next';
import { HomeIcon, LogOutIcon, PaperclipIcon, PieChartIcon, SearchIcon, SendIcon } from 'lucide-react';
import { ItemType, MenuItemType } from 'antd/es/menu/hooks/useItems';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { signOut, useSession } from 'next-auth/react';
const { Header, Sider, Content } = Layout;

const HeaderComponent = dynamic(() => import('@/components/HeaderComponent'), { ssr: false })

interface Props {
    children: React.ReactNode;
}

const AntLayout: NextPage<Props> = ({ children }) => {
    const { push, pathname, asPath } = useRouter()
    const { data: session } = useSession();

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const items = [
        {
            key: '/',
            icon: <HomeIcon size={15} />,
            label: 'หน้าแรก',
            onClick: () => push('/'),
        },
        {
            key: '/dashboard',
            icon: <PieChartIcon size={15} />,
            label: 'ภาพรวม',
            onClick: () => push('/dashboard'),
        },
        {
            key: '/approve',
            icon: <PaperclipIcon size={15} />,
            label: 'อนุมัติโครงการ',
            onClick: () => push('/approve'),
        },
        {
            key: '/budget',
            icon: <SearchIcon size={15} />,
            label: 'จัดสรรงบ',
            onClick: () => push('/budget'),
        }
    ]

    const itemSelected = items.find((item) => item.key === pathname) ?? { label: pathname }
    const isCurrentPage = (key: string) => pathname === key

    return (
        <Layout className='min-h-screen w-screen relative flex flex-row bg-bg-base'>
            <div className='flex flex-col gap-3 bg-white w-[13rem] px-3 pt-5 fixed top-0 bottom-0 z-20'>
                <div>
                    <img src="/assets/logo.svg" alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                    {items.map((item, id) => isCurrentPage(item.key) ? (
                        <a key={id} className='bg-primary hover:text-white text-white rounded-lg flex justify-start items-center px-2 gap-2'>
                            {item.icon}
                            <div>{item.label}</div>
                        </a>
                    ) :
                        <a key={id} href={item.key}
                            onClick={(e) => {
                                e.preventDefault()
                                push(item.key)
                            }}
                            className='bg-white border-primary hover:text-primary border border-inn text-primary rounded-lg flex justify-start items-center px-2 gap-2'>
                            {item.icon}
                            <div>{item.label}</div>
                        </a>)}
                </div>
            </div>
            <div className='w-[100%] bg-primary text-white px-3 py-3 fixed top-0 z-10'>
                <div className='ml-[13rem] flex flex-row justify-between'>
                    <div>{itemSelected?.label}</div>
                    <Dropdown
                        menu={{
                            items: [
                                {
                                    key: "1",
                                    icon: <LogOutIcon />,
                                    label: (
                                        <div
                                            onClick={() =>
                                                signOut({
                                                    callbackUrl: "/",
                                                })
                                            }
                                        >
                                            Sign Out
                                        </div>
                                    ),
                                    danger: true,
                                },
                            ],
                        }}
                    >
                        <a
                            onClick={(e) => e.preventDefault()}
                            className="flex items-center gap-2"
                        >
                            <Avatar
                                shape="circle"
                                size="default"
                                src={session?.user.image}
                                className="cursor-pointer"
                            />
                        </a>
                    </Dropdown>
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <div className='p-2 ml-[13rem] mt-[3.5rem]'>{children}</div>
            </div>
        </Layout>
    );
}

export default AntLayout;