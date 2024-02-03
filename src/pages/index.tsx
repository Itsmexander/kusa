import AntLayout from "@/layouts/AntLayout";
import Carousel from "@/components/Carousel";
import ActivitySchedule from "@/components/ActivitySchedule";
import Announcement from "@/components/Announcement"

export default function Home() {

    return (
        <AntLayout>
            <div className="flex flex-col px-28 p-10 gap-10 h-full">
                <div className="w-full h-fit">
                    <Carousel />
                </div>
                <div className="flex flex-col 2xl:flex-row min-h-[45rem] h-full w-full gap-5 ">
                    <ActivitySchedule />
                    <Announcement />
                </div>
            </div>
        </AntLayout>
    );
}