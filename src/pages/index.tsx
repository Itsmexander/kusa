import AntLayout from "@/layouts/AntLayout";
import Carousel from "@/components/Carousel";
import ActivitySchedule from "@/components/ActivitySchedule";
import Announcement from "@/components/Announcement"

export default function Home() {

    return (
        <AntLayout>
            <div className="flex flex-col gap-3 h-full">
                <div className="w-full h-fit">
                    <Carousel />
                </div>
                <div className="grid grid-cols-3 gap-5">
                    <ActivitySchedule />
                    <Announcement />
                </div>
                {/* <div className="flex flex-col md:flex-row min-h-[45rem] h-full w-full gap-5 ">
                    
                </div> */}
            </div>
        </AntLayout>
    );
}