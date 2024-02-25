import AntLayout from "@/layouts/AntLayout";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { useRouter } from "next/router";
import FakeUserInterface from "public/home-fakes/FakeUserInterface";
import FakeUsers from "public/home-fakes/FakeUsers";
import dayjs from "dayjs";
import "dayjs/locale/th";

dayjs.locale("th");

export default function AnnouncementDetail() {
  const { query } = useRouter();
  const user = findUser();

  function findUser() {
    const user = FakeUsers.find(
      (user: FakeUserInterface) => user.uid === query.announcementId,
    );
    return user;
  }

  return (
    <AntLayout>
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
              <p className="self-center font-bold">{user?.announcement.from}</p>
            </div>
            <div className="mx-3 flex h-full w-fit gap-5">
              {user?.picture.large != "" ? (
                <Avatar
                  size={60}
                  src={user?.picture.large}
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
                  {user?.name.first} {user?.name.last}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {dayjs(user?.announcement.date).format("DD MMMM ")}
                  {user!?.announcement.date.getFullYear() + 543}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red w-full gap-3 px-20 py-10">
            <div className="mb-10 flex justify-center">
              <img src="/assets/ku_sd_online.svg" alt="" />
            </div>
            <div>{user?.announcement.content}</div>
          </div>
        </div>
      </div>
    </AntLayout>
  );
}

export const getServerSideProps = async (context: any) => {
  const { announcementId } = context.params;

  if (FakeUsers.find((user) => user.uid === announcementId) === undefined) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      announcementId: context.params.announcementId,
    },
  };
};
