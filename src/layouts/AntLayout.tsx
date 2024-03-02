import React from "react";
import { Layout } from "antd";
import { NextPage } from "next";
import {
  AreaChartIcon,
  CalendarDaysIcon,
  HomeIcon,
  ListChecksIcon,
  SendIcon,
  UserIcon,
} from "lucide-react";
import { useRouter } from "next/router";
import HeaderComponent from "@/components/HeaderComponent";
import Footer from "@/components/Footer";
import { ParsedUrlQuery } from "querystring";

interface Props {
  children: React.ReactNode;
}

const replaceSlugWithQuery = (pathname: string, query: ParsedUrlQuery) => {
    return pathname
        .split("/")
        .map((item) => {
        if (item.startsWith("[") && item.endsWith("]")) {
            return `/${query["announcementId" as keyof typeof query]}`;
        }
            return item;
        }).join(" ");
};

const AntLayout: NextPage<Props> = ({ children }) => {
  const { push, pathname } = useRouter();
  const router = useRouter();
  
  const items: MenuInterface[] = [
    {
      key: "/",
      icon: <HomeIcon size={15} />,
      label: "หน้าแรก",
      onClick: () => push("/"),
    },
    // {
    //     key: '/news',
    //     icon: <NewspaperIcon size={15} />,
    //     label: 'ข่าวสาร',
    //     onClick: () => push('/news'),
    // },
    {
      key: "/calendar",
      icon: <CalendarDaysIcon size={15} />,
      label: "ปฏิทิน",
      onClick: () => push("/calendar"),
    },
    // {
    //   key: "/my-project",
    //   icon: <SendIcon size={15} />,
    //   label: "โครงการของฉัน",
    //   onClick: () => push("/my-project"),
    // },
    // {
    //     key: '/dashboard',
    //     icon: <PieChartIcon size={15} />,
    //     label: 'ภาพรวม',
    //     onClick: () => push('/dashboard'),
    // },
    // {
    //     key: '/approve',
    //     icon: <ListChecksIcon size={15} />,
    //     label: 'อนุมัติโครงการ',
    //     onClick: () => push('/approve'),
    // },
    // {
    //   key: "/approve-project",
    //   icon: <ListChecksIcon size={15} />,
    //   label: "โครงการที่ได้รับอนุมัติ",
    //   onClick: () => push("/approve-project"),
    // },
    // {
    //   key: "/profile",
    //   icon: <UserIcon size={15} />,
    //   label: "หน้าโปรไฟล์",
    //   onClick: () => push("/profile"),
    // },
    // {
    //   key: "/statistics",
    //   icon: <AreaChartIcon size={15} />,
    //   label: "สถิติ",
    //   onClick: () => push("/statistics"),
    // },
    // {
    //     key: '/budget',
    //     icon: <SearchIcon size={15} />,
    //     label: 'จัดสรรงบ',
    //     onClick: () => push('/budget'),
    // }
  ];

  const itemSelected = items.find((item) => item.key === pathname) ?? {
    label: replaceSlugWithQuery(pathname, router.query),
  };
  const isCurrentPage = (key: string) => pathname === key;

  return (
    <Layout className="relative flex min-h-screen flex-row bg-bg-base">
      <div className="fixed bottom-0 top-0 z-20 flex w-[15rem] flex-col gap-3 bg-white px-3 pt-5">
        <div>
          <img src="/assets/logo.svg" alt="" />
        </div>
        <div className="flex flex-col gap-2">
          {items.map((item, id) =>
            isCurrentPage(item.key) ? (
              <a
                key={id}
                className="flex items-center justify-start gap-2 rounded-lg bg-primary px-2 text-2xl text-white hover:text-white"
              >
                {item.icon}
                <div>{item.label}</div>
              </a>
            ) : (
              <a
                key={id}
                href={item.key}
                onClick={(e) => {
                  e.preventDefault();
                  push(item.key);
                }}
                className="border-inn flex items-center justify-start gap-2 rounded-lg border border-primary bg-white px-2 text-2xl text-primary hover:text-primary"
              >
                {item.icon}
                <div>{item.label}</div>
              </a>
            ),
          )}
        </div>
      </div>
      <HeaderComponent itemSelected={itemSelected as MenuInterface} />
      <div className="ml-[15rem] mt-[3.5rem] flex w-full flex-col overflow-hidden">
        <div className="h-full p-3 text-2xl">{children}</div>
        <Footer />
      </div>
    </Layout>
  );
};

export default AntLayout;
