import { useState, useEffect } from 'react';
import { Space, Table } from 'antd';
import { getAllData, updateData } from '../../lib/http_services';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 

const List = () => {
 const [applicationList, setApplicationList] = useState([])
 const navigate = useNavigate();

 useEffect(() => {
    getApplicationList();
 }, []);

 const getApplicationList = async() => {
    const response = await getAllData('bike_leases');
    if (response.status === 200){
        const listData = response.data?.data.map(item => {
            return {
                key: item.attributes.id,
                id: item.attributes.id,
                dealer_name: item.attributes.dealer_name,
                bike: item.attributes.bike,
                down_payment: item.attributes.down_payment,
                leasee: item.attributes.leese.name,
                closee: item.attributes.closee.name,
                lease_status: item.attributes.lease_status,
            }
    });
        setApplicationList(listData);
    }
 };

 const approveReq = async(data) => {
    const params = {
        id: data.id
    }
    const response = await updateData('bike_leases/approve', params);
    if (response.status === 200){
        toast.success('Request is approved successfully');
        getApplicationList();
    }
    else if (response.status === 401){
        navigate('/sign-in', { replace: true});
    }  
    else {
        toast.success('Request is denied. Please try again');
    }
 }

 const columns = [
        {
            title: 'Req #',
            dataIndex: 'id',
            key: 'id',
        },
        {
          title: 'Dealer Name',
          dataIndex: 'dealer_name',
          key: 'dealer_name',
        },
        {
          title: 'Bike',
          dataIndex: 'bike',
          key: 'bike',
        },
        {
            title: 'Down Payment',
            dataIndex: 'down_payment',
            key: 'down_payment',
        },
        {
          title: 'Leasee',
          dataIndex: 'leasee',
          key: 'leasee',
        },
        {
          title: 'Closee',
          key: 'closee',
          dataIndex: 'closee',
          key: 'closee',
        },
        {
            title: 'Status',
            key: 'lease_status',
            dataIndex: 'lease_status',
            key: 'lease_status',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              {
                record.lease_status === 'awaiting' ? (
                    <button onClick={() => approveReq(record)}
                        className='border-2 p-2 rounded hover:border-sky-400 hover:bg-sky-400 hover:text-white'>
                        Approve
                    </button>
                ) : (<button className='p-2 rounded disabled bg-emerald-700 text-white cursor-no-drop'>
                        Approved
                    </button>)
              }
            </Space>
          ),
        },
      ]

  return (
     <div className='flex flex-col justify-center'>
        <h1 className='my-2 text-lg text-center'>
            Lease Application List
        </h1>
        <div className='mx-auto mb-4 p-4 flex justify-center border-2 border-sky-500'>
            <Table
            columns={columns}
            dataSource={applicationList} 
            // bordered
            />
        </div>
     </div>
  )
}

export default List;
