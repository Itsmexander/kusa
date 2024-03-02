export default interface FakeActivityInterface {
    id: number;
    range: {
        start: Date;
        end: Date;
    };
    name: {
        en: string;
        th: string;
    };
}