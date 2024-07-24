'use client'
import React from 'react';


const HomePage = () => {
  const testData = [
    {
      test_name: "test1",
      test_id: 1,
      test_status: "live"
    },
    {
      test_name: "test2",
      test_id: 2,
      test_status: "pending"
    },
    {
      test_name: "test3",
      test_id: 3,
      test_status: "draft"
    },
    {
      test_name: "test4",
      test_id: 4,
      test_status: "completed"
    },
    {
      test_name: "test5",
      test_id: 5,
      test_status: "draft"
    }
  ];

  return (
    <>   
    <div className='container mx-auto p-10 flex flex-col items-center inline-block '>      
      <UserData data={testData} />
    </div>
    
    </>
  );
};
export default HomePage;

const UserData = ({ data }) => {   
  return (
    <>        
        <div className=" overflow-x-auto container mx-auto px-6 py-7 "> 
            <table className="min-w-full border-separate ">
                <thead className="border-separate bg-gray-400">
                    <tr>
                        <th className="px-6 py-3  text-xl  font-bold underline uppercase tracking-wider w-1/2">
                            Tests
                        </th>
                        <th className="px-6 py-3  text-xl font-bold underline  uppercase tracking-wider w-1/4">
                            Test IDs
                        </th>
                        <th className="px-6 py-3  text-xl font-bold  underline uppercase tracking-wider w-1/4">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-gray-200 ">
                    {data.map((test) => (
                        <tr key={test.test_id} className='border-separate  text-xl font-bold bg-grey-200 divide-y divide-gray-200'>
                            <td className="px-6 py-4 whitespace-nowrap w-1/2"><a href='#' className='text-blue-500'>{test.test_name}</a></td>
                            <td className="px-6 py-4 whitespace-nowrap w-1/4">{test.test_id}</td>
                            <td className="px-6 py-4 whitespace-nowrap w-1/4">{test.test_status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </>  
  );
};

