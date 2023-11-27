import { Card } from 'antd';

const { Meta } = Card;

export default function Profilecard() {
    return (
        <>
            <Card
                hoverable
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                className='w-full bg-white'
            >
                <Meta title="Club: Ku Tech" description="desc" />
            </Card>
        </>
    )
}