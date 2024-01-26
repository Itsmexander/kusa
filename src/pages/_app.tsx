import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import router from "next/router";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { ConfigProvider, theme } from "antd";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { useEffect } from "react";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {

    useEffect(() => {
        const handleRouteStart = () => nprogress.start();
        const handleRouteDone = () => nprogress.done();
    
        router.events.on("routeChangeStart", handleRouteStart);
        router.events.on("routeChangeComplete", handleRouteDone);
        router.events.on("routeChangeError", handleRouteDone);
    
        return () => {
          router.events.off("routeChangeStart", handleRouteStart);
          router.events.off("routeChangeComplete", handleRouteDone);
          router.events.off("routeChangeError", handleRouteDone);
        };
      }, []);

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
