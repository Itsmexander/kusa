import { Avatar, Button, Dropdown } from 'antd'
import { LogOutIcon } from 'lucide-react'
import { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'
import ButtonSD from './ButtonSD'

interface Props {
    itemSelected: MenuInterface
}

const HeaderComponent: NextPage<Props> = ({ itemSelected }) => {
    const { data: session, status } = useSession();

    return (
        <div className='w-[100%] bg-primary text-white px-3 py-3 fixed top-0 z-10'>
            <div className='ml-[15rem] flex flex-row justify-between'>
                <div className='font-bold text-2xl'>{itemSelected?.label}</div>
                {status === "loading" ? "loading..." : <>
                    {status === "authenticated" ? <Dropdown
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
                            <div className='flex flex-col text-white'>
                                <div>{session.user.name}</div>
                                <div>{session.user.role}</div>
                            </div>
                        </a>
                    </Dropdown> : <div className="flex gap-2">
                        <ButtonSD to='/sign-in' color='secondary'>ลงชื่อเข้าใช้</ButtonSD>
                    </div>
                    }
                </>
                }
            </div>
        </div>
    )
}

export default HeaderComponent