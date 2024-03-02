import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import "dayjs/locale/th";

dayjs.locale("th");

export default function AnnouncementDetail() {
    const { query } = useRouter();
    const announcement = {
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
    }

    //   function findAnnouncement() {
    //     const announcement = FakeAnnouncements.find(
    //       (announcement) => announcement.id === query.announcementId
    //     );
    //     return announcement;
    //   }

    return (
        <div className="flex h-full flex-col gap-3 p-10">
            <div className="flex h-auto min-h-full w-full flex-col rounded-lg bg-white">
                <div className="text-bold flex h-fit w-full flex-row items-center justify-between rounded-lg bg-primary p-5 px-20 text-white">
                    <div className="flex justify-center">
                        <img
                            src="/assets/action_nav.svg"
                            className="mx-3 cursor-pointer bg-center bg-no-repeat object-cover hover:opacity-80"
                            alt=""
                            onClick={() => window.history.back()}
                        />
                        <p className="self-center font-bold">{announcement?.announcement.from}</p>
                    </div>
                    <div className="mx-3 flex h-full w-fit gap-5">
                        {announcement?.user.image != "" ? (
                            <Avatar
                                size={60}
                                src={announcement?.user.image}
                                className="border-2 border-primary"
                            />
                        ) : (
                            <Avatar
                                size={60}
                                icon={<UserOutlined />}
                                className="border-2 border-primary"
                            />
                        )}
                        <div>
                            <div>
                                {announcement?.user.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                {dayjs(announcement?.announcement.date).format("DD MMMM ")}
                                {announcement!?.announcement.date.getFullYear() + 543}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-red w-full gap-3 px-20 py-10">
                    <div className="mb-10 flex justify-center">
                        <img src="/assets/ku_sd_online.svg" alt="" />
                    </div>
                    <div>{announcement?.announcement.content}</div>
                </div>
            </div>
        </div>
    );
}
