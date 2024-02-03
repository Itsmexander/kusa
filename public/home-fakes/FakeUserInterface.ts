export default interface FakeUserInterface {
    email: string;
    gender: string;
    name: {
      first: string;
      last: string;
      title: string;
    };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    announcement: {
      from: string;
      date: Date;
      content: string;
    };
  }