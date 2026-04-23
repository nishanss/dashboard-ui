"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import Image from 'next/image';

// #region Sample data
const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 24,
  },
  {
    name: 'Tue',
    present: 30,
    absent: 13,
  },
  {
    name: 'Wed',
    present: 20,
    absent: 15,
  },
  {
    name: 'Thu',
    present: 27,
    absent: 19,
  },
  {
    name: 'Fri',
    present: 18,
    absent: 10,
  },
];

const AttendanceChart = () => {
  return (
  <div className='bg-white rounded-lg p-4 h-full'>
    <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20}/>
    </div>
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      barSize={20}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
      <XAxis dataKey="name" axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false}/>
      <YAxis width="auto" axisLine={false} tick={{fill:'#d1d5db'}} tickLine={false}/>
      <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
      <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
      <Bar dataKey="present" fill="#8884d8" radius={[10, 10, 0, 0]} legendType='circle'/>
      <Bar dataKey="absent" fill="#82ca9d" radius={[10, 10, 0, 0]} legendType='circle' />
      <RechartsDevtools />
    </BarChart>
  </div>
  )
}



export default AttendanceChart