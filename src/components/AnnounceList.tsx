import React, { useState } from "react";
import { Avatar, List, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const App: React.FC = () => {
    //   const [data, setData] = useState<FakeAnnouncementInterface[]>(FakeAnnouncements);
    const router = useRouter();

    return (
        <div>
            <List
                itemLayout="vertical"
                pagination={{
                    pageSize: 3,
                    align: "center",
                }}
                dataSource={[{
                    id: "1",
                    user: {
                        id: "1",
                        name: "test",
                        email: "ddd1@ku.th",
                        role: "CLUB",
                        image: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                    },
                    announcement: {
                        from: "KU",
                        date: new Date(2022, 10, 23),
                        content: "awdawdawd",
                    },
                }]}
                renderItem={(item) => (
                    <List.Item
                        key={item.id}
                        className="my-3 flex h-fit rounded-lg bg-[#F8F8F8]"
                    >
                        <div
                            className="flex h-[8rem] w-5/6 flex-row gap-3 overflow-hidden px-8 hover:cursor-pointer"
                            onClick={() => {
                                router.push(`/${item.id}`);
                            }}
                        >
                            <div className="flex justify-center">
                                {item.user.image != "" ? (
                                    <Avatar
                                        size={50}
                                        src={item.user.image}
                                        className="border-2 border-primary"
                                    />
                                ) : (
                                    <Avatar
                                        size={50}
                                        icon={<UserOutlined />}
                                        className="border-2 border-primary"
                                    />
                                )}
                            </div>
                            <div className="flex w-full flex-col gap-3 break-all">
                                <div>
                                    <p className="text-2xl font-bold">{item.announcement.from}</p>
                                    <p>{`วันที่ ${item.announcement.date.toLocaleDateString()}`}</p>
                                </div>
                                <div>
                                    <p className="text-lg">{item.announcement.content}</p>
                                </div>
                            </div>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default App;
