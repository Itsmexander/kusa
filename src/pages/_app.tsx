import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import router, { useRouter } from "next/router";
import { api } from "@/utils/api";
import "@/styles/globals.css";
import { ConfigProvider, theme } from "antd";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { useEffect } from "react";
import AntLayout from "@/layouts/AntLayout";
import CLUBLayout from "@/layouts/CLUBLayout";
import SABLayout from "@/layouts/SABLayout";
import SCLayout from "@/layouts/SCLayout";
import SDLayout from "@/layouts/SDLayout";

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {

    const { asPath } = useRouter()

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

    const RenderLayout = (path: string, children: JSX.Element) => {
        const exceptGlobal = ["/sign-in","/404"]
        const mapLayout = [
            {
                startSlug: "/CLUB",
                except: [...exceptGlobal],
                layout: (children: JSX.Element) => {
                    return (<CLUBLayout>{children}</CLUBLayout>)
                }
            },
            {
                startSlug: "/SAB",
                except: [...exceptGlobal],
                layout: (children: JSX.Element) => {
                    return (<SABLayout>{children}</SABLayout>)
                }
            },
            {
                startSlug: "/SC",
                except: [...exceptGlobal],
                layout: (children: JSX.Element) => {
                    return (<SCLayout>{children}</SCLayout>)
                }
            },
            {
                startSlug: "/SD",
                except: [...exceptGlobal],
                layout: (children: JSX.Element) => {
                    return (<SDLayout>{children}</SDLayout>)
                }
            },
            {
                startSlug: "/",
                except: [...exceptGlobal],
                layout: (children: JSX.Element) => {
                    return (<AntLayout>{children}</AntLayout>)
                }
            },
        ]


        for (const layout of mapLayout) {
            // console.log(layout.startSlug, path);
            // console.log(path.startsWith(layout.startSlug));

            if (path.startsWith(layout.startSlug)) {
                let isRenderNull = false

                if (layout.except) {
                    for (const except of layout.except) {
                        if (path.startsWith(except)) {
                            isRenderNull = true
                            break
                        }
                    }
                }

                if (!isRenderNull) {
                    return layout.layout(children)
                }

                return <>{children}</>
            }
        }

    }

    return (
        <StyledComponentsRegistry>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#006C67",
                        // borderRadius: 0,
                        colorBorder: "#006C67",
                    },
                    algorithm: theme.defaultAlgorithm,
                }}
            >
                <SessionProvider session={session}>
                    {RenderLayout(asPath, <Component {...pageProps} />)}
                </SessionProvider>
            </ConfigProvider>
        </StyledComponentsRegistry>

    );
};

export default api.withTRPC(MyApp);
