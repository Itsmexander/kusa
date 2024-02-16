import React, { useEffect, useState } from 'react';
import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import { UserOutlined } from '@ant-design/icons';
import FakeUserInterface from 'public/home-fakes/FakeUserInterface';
import FakeUsers from 'public/home-fakes/FakeUsers';


const App: React.FC = () => {
  const [data, setData] = useState<FakeUserInterface[]>(FakeUsers);

  return (
    <div>
      <List
        itemLayout="vertical"
        pagination={{
          pageSize: 3,
          align: 'center',
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.email} className='bg-[#F8F8F8] rounded-lg my-3 flex h-fit'>
            <div className='flex flex-row h-32 px-8 gap-3 w-5/6'>
              <div className='flex justify-center'>
                {item.picture.large != '' ? (
                    <Avatar size={50} src={item.picture.large} className='border-primary border-2'/>
                  ) : (
                    <Avatar size={50} icon={<UserOutlined />} className='border-primary border-2'/>
                  )
                }
              </div>
              <div className='w-full flex flex-col gap-3 overflow-ellipsis overflow-hidden ...'>
                <div>
                  <p className='font-bold text-2xl'>{item.announcement.from}</p>
                  <p>{`วันที่ ${item.announcement.date.toLocaleDateString()}`}</p>
                </div>
                <div>
                  <p className='text-lg'>{item.announcement.content}</p>
                </div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </div>
  )
}

export default App;