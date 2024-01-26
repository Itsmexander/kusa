import { Avatar, Dropdown } from 'antd'
import { LogOutIcon } from 'lucide-react'
import { NextPage } from 'next'
import { signOut, useSession } from 'next-auth/react'

interface Props {
    itemSelected: MenuInterface
}

const HeaderComponent: NextPage<Props> = ({ itemSelected }) => {
    const { data: session } = useSession();

    return (
        <div className='w-[100%] bg-primary text-white px-3 py-3 fixed top-0 z-10'>
            <div className='ml-[13rem] flex flex-row justify-between'>
                <div className='font-bold'>{itemSelected?.label}</div>
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
    )
}

export default HeaderComponent