import AntLayout from "@/layouts/AntLayout";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FakeUserInterface } from "@/interfaces/FakeUserInterface";
import axios from "axios";

export default function User() {
  const { data: session } = useSession();

  const user = session?.user as FakeUserInterface;
  const [file, setFile] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files![0];
    if (file && file.type.startsWith('image/')) {
      console.log(file);
    } else {
      alert('Please select a valid image file.');
    }

    setFile(file);
    handleUpload(file);
  };

  const handleUpload = async (selectedFile: File | null) => {
    try {
      if (!selectedFile) return; // Handle case when no file is selected
      const formData = new FormData();
      formData.append('file', selectedFile);
      await axios.post('/api/upload', formData);
      console.log('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  

  const firstname = user?.name?.split(" ")[0] ?? "";
  const lastname = user?.name?.split(" ")[1] ?? "";

  return (
    <>
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
                  handleFileChange(e);
                  
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
