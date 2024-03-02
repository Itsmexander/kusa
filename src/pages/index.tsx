import AntLayout from "@/layouts/AntLayout";
import Carousel from "@/components/Carousel";
import ActivitySchedule from "@/components/ActivitySchedule";
import Announcement from "@/components/Announcement";

export default function Home() {
  return (
      <div className="flex h-full flex-col gap-3">
        <div className="z-0 h-fit w-full">
          <Carousel />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <ActivitySchedule />
          <Announcement />
        </div>
      </div>
  );
}
