import ActivityList from './ActivityList';

const ActivitySchedule = () => {


    return (
        <div className="bg-white w-full h-full rounded-md flex flex-col p-5 gap-5">
            <div className="h-24 w-full flex flex-col justify-center items-center text-black">
                <div className="text-3xl font-bold text-primary">ปฏิทินกิจกรรม</div>
                <div className="border-b-4 border-b-secondary w-8"></div>
            </div>
            
            <div className="">
                <ActivityList />
            </div>
            
            
        </div>
    )
}

export default ActivitySchedule