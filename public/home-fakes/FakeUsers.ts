import { FakeUserInterface } from "../../src/interfaces/FakeUserInterface";

type FakeUserWithoutEmail = Omit<FakeUserInterface, 'emailVerified'>

export const newUser = ({id, email, name, image}: FakeUserWithoutEmail) => {
    return {
        id,
        email,
        name,
        image,
        emailVerified: new Date(2022, 10, 23)
    }
}


const FakeUsers: FakeUserInterface[] = Array(10).fill(0).map((_, i) => {
    return newUser({
        id: i.toString(),
        email: `ddd${i}@ku.th`,
        name: 'teerut sritongdee',
        image: ''
    });
})

export default FakeUsers