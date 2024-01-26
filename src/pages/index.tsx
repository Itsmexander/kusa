
import { signIn, signOut, useSession } from "next-auth/react";
"use client";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { Pie } from "react-chartjs-2";
import dynamic from "next/dynamic";
import { ArcElement, Chart } from "chart.js";
import { Card, Timeline } from "antd";

Chart.register(ArcElement);

const AntLayout = dynamic(() => import('@/layouts/AntLayout'), { ssr: false })

export default function Home() {
    const hello = api.example.hello.useQuery({ text: "from tRPC" });

    return (
        <AntLayout title="Dashboard">
            asdf
        </AntLayout>
    );
}