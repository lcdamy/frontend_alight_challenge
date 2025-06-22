import React from 'react'
import { Meetings } from '@/lib/constants'


function MeetingsSchedule() {
  return (
    <div className="lg:w-1/5 w-full bg-[#F3F8FF] p-2 sm:p-4 rounded-sm">
      <h1 className="font-[600] text-[#071C50] text-[16px]"> Upcoming Meetings </h1>
      <div className="mt-4 sm:mt-6">
        <h1 className="font-[600] text-xs text-[#071C50] opacity-50 mb-2 sm:mb-4">Today</h1>
        {Meetings.today.map((meeting) => (
          <div
            key={meeting.id}
            className={`flex flex-row justify-between items-center gap-x-1 ${meeting.status === "passed"
              ? "bg-[#B0F1B65C]/36 text-[#2B5708] border-r-4 border-[#2B5708]/50 hover:bg-green-300 hover:cursor-pointer"
              : "bg-[#A0DBF457]/34 text-[#1B5CBE] border-r-4 border-[#1B5CBE]/50 hover:bg-blue-300 hover:cursor-pointer"
              } font-[400] text-[10px] p-2 rounded-sm mb-1 transition-colors duration-300`}
          >
            <span className="min-w-[8px] text-left font-bold">{meeting.time}</span>
            <div className="flex-1 border-l border-[#1B5CBE70]/44 pl-2 sm:pl-4">
              <div>
                <span className="font-bold">{meeting.candidate_name}</span>;{" "}
                <span>{meeting.position};</span>{" "}
                <span>{meeting.phase}</span>
              </div>
              <div>
                <span>{meeting.topic}</span>{" "}
                <span className="font-bold">| {meeting.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 sm:mt-6">
        <h1 className="font-[600] text-xs text-[#071C50] opacity-50 mb-2 sm:mb-4">Tomorrow</h1>
        {Meetings.Tomorrow.map((meeting) => (
          <div
            key={meeting.id}
            className={`flex flex-row justify-between items-center gap-1 ${meeting.status === "passed"
              ? "bg-[#B0F1B65C]/36 text-[#2B5708] border-r-4 border-[#2B5708]/50 hover:bg-green-300 hover:cursor-pointer"
              : "bg-[#A0DBF457]/34 text-[#1B5CBE] border-r-4 border-[#1B5CBE]/50 hover:bg-blue-300 hover:cursor-pointer"
              }  font-[400] text-[10px] p-2 rounded-md mb-1 transition-colors duration-300`}
          >
            <span className="min-w-[8px] text-left font-bold">{meeting.time}</span>
            <div className="flex-1 border-l border-[#1B5CBE70]/44 pl-2 sm:pl-4">
              <div>
                <span className="font-bold">{meeting.candidate_name}</span>; <span>{meeting.position};</span> <span>{meeting.phase}</span>
              </div>
              <div>
                <span>{meeting.topic}</span> <span className="font-bold">| {meeting.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 sm:mt-6">
        <h1 className="font-[600] text-xs text-[#071C50] opacity-50 mb-2 sm:mb-4">This week</h1>
        {Meetings.week.map((meeting) => (
          <div
            key={meeting.id}
            className={`flex flex-row justify-between items-center gap-1 ${meeting.status === "passed"
              ? "bg-[#B0F1B65C]/36 text-[#2B5708] border-r-4 border-[#2B5708]/50 hover:bg-green-300 hover:cursor-pointer"
              : "bg-[#A0DBF457]/34 text-[#1B5CBE] border-r-4 border-[#1B5CBE]/50 hover:bg-blue-300 hover:cursor-pointer"
              }  font-[400] text-[10px] p-2 rounded-md mb-1 transition-colors duration-300`}
          >
            <span className="min-w-[8px] text-left font-bold">{meeting.time}</span>
            <div className="flex-1 border-l border-[#1B5CBE70]/44 pl-2 sm:pl-4">
              <div>
                <span className="font-bold">{meeting.candidate_name}</span>; <span>{meeting.position};</span> <span>{meeting.phase}</span>
              </div>
              <div>
                <span>{meeting.topic}</span> <span className="font-bold">| {meeting.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MeetingsSchedule