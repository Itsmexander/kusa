import { FakeUserInterface } from '@/interfaces/FakeUserInterface';
import FakeAnnouncementInterface from "@/interfaces/FakeAnnouncementInterface";
import { newUser } from './FakeUsers';

const FakeAnnouncements: FakeAnnouncementInterface[] = Array(10).fill(0).map((_, i) => {
    return {
        user: newUser({
            id: i.toString(),
            email: `ddd${i}gmail.com`,
            name: 'awdawd',
            image: 'https://m.media-amazon.com/images/I/51aF0z7-V3L._AC_UF894,1000_QL80_.jpg',
        }),
        id: i.toString(),
        announcement: {
            from: 'KU',
            date: new Date(2022, 10, 23),
            content: 'awdawdawd'
        }
    }
});

export default FakeAnnouncements;