import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import AntLayout from "@/layouts/AntLayout";
import { Card } from 'antd';

const { Meta } = Card;

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <AntLayout>
      <div className="overflow-x-hidden w-[100%] h-[100vh]">
        <Hero />
        <div className="grid p-10 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <CardItem title={'ชมรม'} description={'desc'} img={""} />
          <CardItem title={'อบก.'} description={'desc'} img={""} />
          <CardItem title={'กนส.'} description={'desc'} img={""} />
        </div>
      </div>
    </AntLayout>
  );
}

interface CardItemProps {
  title: string
  description: string
  img: string
}

const CardItem: React.FC<CardItemProps> = ({ title, description, img }) => {
  return (
    <>
      <Card
        hoverable
        cover={<img alt="example" src={img} className="bg-[#3D8F8C] h-[15rem] xl:h-[20rem]" />}
        className="shadow-xl"
      >
        <Meta title={title} description={description} />
      </Card>
    </>
  )
}

const Hero = () => {
  return (
    <>
      <div className="h-[60%] w-full flex justify-evenly items-center bg-gradient-to-r from-[#2a5d5b] to-[#8c9216]">
        <div className="grid gird-cols-2 shadow-2xl p-4 pb-7 bg-[#3D8F8C] rounded-tr-2xl rounded-bl-2xl">
          <h1 className="font-bold text-9xl text-[#006C67] pb-2 text-center">KU</h1>
          <h1 className="text-white text-center text-sm font-mono">KASETSART UNIVERSITY</h1>
        </div>
      </div>
    </>
  )
}
