import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { ConfigProvider, theme } from "antd";
import StyledComponentsRegistry from "@/lib/AntdRegistry";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <StyledComponentsRegistry>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#006C67",
                        borderRadius: 0,
                    },
                    algorithm: theme.defaultAlgorithm,
                }}
            >
                <SessionProvider session={session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </ConfigProvider>
        </StyledComponentsRegistry>

    );
};

export default api.withTRPC(MyApp);
