import { FakeUserInterface } from "./FakeUserInterface";


export default interface FakeAnnouncementInterface {
    user: FakeUserInterface;
    id: string;
    announcement: {
        from: string;
        date: Date;
        content: string;
    };
}