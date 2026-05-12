"use client"

import { time } from "console";
import { useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "10:00 AM - 11:00 AM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "10:00 AM - 11:00 AM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "10:00 AM - 11:00 AM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 4,
        title: "this one's real",
        time: "10:00 AM - 11:00 AM",
        description: "and this description is also real",
    },
    {
        id: 5,
        title: "another real one. just a banger, man",
        time: "10:00 AM - 11:00 AM",
        description: "no words, man. just banger after banger"
    },
    {
        id: 6,
        title: "another one",
        time: "10:00 AM - 11:00 AM",
        description: "cant help winning"
    },
    {
        id: 7, 
        title: "yet another one",
        time: "10:00 AM - 11:00 AM",
        description: "probably gotta stop"
    },
    { 
        id: 8,
        title: "ok last one",
        time: "10:00 AM - 11:00 AM",
        description: "i swear"
    },

]

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold my-4">Events</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        <div className="flex flex-col gap-4">
            {events.map(event=>(
                <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-nishanSky even:border-t-nishanPurple" key={event.id}>
                    <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-gray-600">{event.title}</h1>
                    <span className="text-gray-300 text-xs">{event.time}</span>
                </div>
                <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventCalendar