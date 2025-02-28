import React, { useEffect, useState } from "react";
import { Avatar, Button, List, message } from "antd";
import VirtualList from "rc-virtual-list";
import FakeActivityInterface from "@/interfaces/FakeActivityInterface";
import ActivityCard from "./ActivityCard";

const ContainerHeight = 500;
const ItemsPerLoad = 3;

const App = () => {
    const [data, setData] = useState<FakeActivityInterface[]>([{
        id: 1,
        range: {
            start: new Date(),
            end: new Date(),
        },
        name: {
            en: "test",
            th: "test",
        },
    }]);
    const [loadedItems, setLoadedItems] = useState<number>(ItemsPerLoad);
    const [expansion, setExpansion] = useState(false);

    //   const appendData = () => {
    //     //Todo: replace with fetching
    //     setLoadedItems(loadedItems + ItemsPerLoad);
    //     setData(newData);
    //   };

    //   useEffect(() => {
    //     appendData();
    //   }, []);

    const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
        if (
            Math.abs(
                e.currentTarget.scrollHeight -
                e.currentTarget.scrollTop -
                ContainerHeight,
            ) <= 1
        ) {
            // appendData();
        }
    };

    return (
        <>
            <List>
                <VirtualList
                    data={data}
                    height={expansion ? 0 : ContainerHeight}
                    itemHeight={47}
                    itemKey="id"
                    onScroll={onScroll}
                >
                    {(item: FakeActivityInterface) => (
                        <List.Item key={item.id}>
                            <ActivityCard
                                id={item.id}
                                range={{
                                    start: item.range.start,
                                    end: item.range.end,
                                }}
                                name={{
                                    en: item.name.en,
                                    th: item.name.th,
                                }}
                            />
                        </List.Item>
                    )}
                </VirtualList>
            </List>
            <div className="flex w-full items-center justify-center p-5">
                <Button
                    type="primary"
                    shape="round"
                    className="w-2/6"
                    onClick={() => { }}
                >
                    ทั้งหมด
                </Button>
            </div>
        </>
    );
};

export default App;
