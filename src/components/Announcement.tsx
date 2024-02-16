import AnnounceList from './AnnounceList'

const Announcement = () => {
    return (
        <div className="bg-white w-full 2xl:w-7/12 h-full rounded-md flex flex-col p-5 gap-5">
            <div className="h-24 w-full flex flex-col justify-center items-center text-black">
                <div className="text-3xl font-bold text-primary">ประกาศ</div>
                <div className="border-b-4 border-b-secondary w-8"></div>
            </div>
            <div className="">
                <AnnounceList />
            </div>
        </div>
    )
}

export default Announcement