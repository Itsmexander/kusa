import FakeActivityInterface from "public/home-fakes/FakeActivityInterface"

const thaiMonthNames = ['มค', 'กพ', 'มีค', 'เมย', 'พค', 'มิย', 'กค', 'สค', 'กย', 'ตค', 'พย', 'ธค'];

const ActivityCard = (details: FakeActivityInterface) => {

    const s_month_name = thaiMonthNames[details.range.start.getMonth()];
    const e_month_name = thaiMonthNames[details.range.end.getMonth()];

    return (
        <div className="flex flex-row border-2 border-primary h-32 w-full rounded-md">
            <div className="flex flex-col h-full w-2/5 bg-primary rounded-md justify-center items-center text-white">
                <p className="text-4xl font-bold">{details.range.start.getDate()}-{details.range.end.getDate()}</p>
                <p className="text-lg">{s_month_name == e_month_name? s_month_name: s_month_name + '-' + e_month_name}</p>
            </div>
            <div className="flex flex-col h-full w-full rounded-md justify-center items-start text-black px-3">
                <p className="text-3xl font-bold">{details.name.th}</p>
                <p className="text-lg">{details.name.en}</p>
            </div>
        </div>
    )
    
}

export default ActivityCard