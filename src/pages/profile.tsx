import AntLayout from "@/layouts/AntLayout";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import FakeUsers from "public/home-fakes/FakeUsers";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FakeUserInterface } from "@/interfaces/FakeUserInterface";

export default function user() {
  const { data: session } = useSession();

  const user = findUser();

  function findUser() {
    const user = FakeUsers.find(
      (user: FakeUserInterface) => user.email === session?.user.email,
    );
    return user;
  }

  const firstname = user?.name?.split(" ")[0] ?? "";
  const lastname = user?.name?.split(" ")[1] ?? "";

  return (
    <AntLayout>
      <div className="flex h-[60rem] flex-col gap-3 p-10 px-40">
        <div className="flex h-full w-full flex-col gap-5 rounded-xl bg-white p-8">
          <div>
            <p className="w-24 border-b-4 border-secondary text-center font-bold text-primary">
              โปรไฟล์
            </p>
          </div>
          <div className="flex-rows-2 flex h-fit gap-10">
            <div className="h-full w-fit p-5">
              {user?.email != "" ? (
                <Avatar
                  size={130}
                  src={user?.image}
                  className="border-2 border-primary"
                />
              ) : (
                <Avatar
                  size={130}
                  icon={<UserOutlined />}
                  className="border-2 border-primary"
                />
              )}
            </div>
            <div className="flex h-full w-full flex-col justify-center gap-3 font-bold">
              <p>ชื่อ: {firstname}</p>
              <p>นามสกุล: {lastname}</p>
              <p>ตำแหน่ง: ประธานกลุ่มกิจกรรม</p>
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <div
              className="flex h-5/6 w-2/4 cursor-pointer select-none flex-col items-center justify-center bg-[#FAFAFA]"
              onClick={() => {
                document.getElementById("fileInput")!.click();
              }}
            >
              <p className="text-4xl">+</p>
              <p className="text-[#00000073]">อัพโหลดลายเซ็นอิเล็กทรอนิกส์</p>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files![0];
                  if (file && file.type.startsWith('image/')) {
                    console.log(file);
                  } else {
                    alert('Please select a valid image file.');
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </AntLayout>
  );
}
