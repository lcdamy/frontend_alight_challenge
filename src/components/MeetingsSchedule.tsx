'use client'
import React from 'react'
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { MeetingItem } from '@/lib/types';
import { Skeleton } from "@/components/ui/skeleton"


function MeetingsSchedule() {
  const { data: session, status } = useSession();

  const accessToken = session?.user?.token;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const fetcher = (url: string) => fetch(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    }
  }).then((res) => res.json());

  const { data: Meetings, error, isLoading } = useSWR(
    accessToken ? `${apiUrl}/api/v1/mock/meetings` : null,
    fetcher
  );

  if (isLoading || status === 'loading') {
    return (
      <div className="lg:w-1/5 w-full bg-[#F3F8FF] p-2 sm:p-4 rounded-sm">
        <Skeleton className="h-6 w-1/2 mb-4" />
        <div className="mt-4 sm:mt-6">
          <Skeleton className="h-4 w-20 mb-2 sm:mb-4" />
          {[...Array(2)].map((_, i) => (
        <div
          key={`today-skeleton-${i}`}
          className="flex flex-row justify-between items-center gap-x-1 bg-[#A0DBF457]/34 text-[#1B5CBE] border-r-4 border-[#1B5CBE]/50 font-[400] text-[10px] p-2 rounded-sm mb-1"
        >
          <Skeleton className="min-w-[32px] h-4 w-8 mr-2" />
          <div className="flex-1 border-l border-[#1B5CBE70]/44 pl-2 sm:pl-4">
            <Skeleton className="h-3 w-3/4 mb-1" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
          ))}
        </div>
        <div className="mt-4 sm:mt-6">
          <Skeleton className="h-4 w-24 mb-2 sm:mb-4" />
          {[...Array(2)].map((_, i) => (
        <div
          key={`tomorrow-skeleton-${i}`}
          className="flex flex-row justify-between items-center gap-x-1 bg-[#A0DBF457]/34 text-[#1B5CBE] border-r-4 border-[#1B5CBE]/50 font-[400] text-[10px] p-2 rounded-md mb-1"
        >
          <Skeleton className="min-w-[32px] h-4 w-8 mr-2" />
          <div className="flex-1 border-l border-[#1B5CBE70]/44 pl-2 sm:pl-4">
            <Skeleton className="h-3 w-3/4 mb-1" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
          ))}
        </div>
        <div className="mt-4 sm:mt-6">
          <Skeleton className="h-4 w-28 mb-2 sm:mb-4" />
          {[...Array(2)].map((_, i) => (
        <div
          key={`week-skeleton-${i}`}
          className="flex flex-row justify-between items-center gap-x-1 bg-[#A0DBF457]/34 text-[#1B5CBE] border-r-4 border-[#1B5CBE]/50 font-[400] text-[10px] p-2 rounded-md mb-1"
        >
          <Skeleton className="min-w-[32px] h-4 w-8 mr-2" />
          <div className="flex-1 border-l border-[#1B5CBE70]/44 pl-2 sm:pl-4">
            <Skeleton className="h-3 w-3/4 mb-1" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto flex justify-center items-center h-64">
        <span>Error loading data.</span>
      </div>
    );
  }


  return (
    <div className="lg:w-1/5 w-full bg-[#F3F8FF] p-2 sm:p-4 rounded-sm">
      <h1 className="font-[600] text-[#071C50] text-[16px]"> Upcoming Meetings </h1>
      <div className="mt-4 sm:mt-6">
        <h1 className="font-[600] text-xs text-[#071C50] opacity-50 mb-2 sm:mb-4">Today</h1>
        {Meetings?.data?.today?.map((meeting: MeetingItem) => (
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
        {Meetings?.data?.Tomorrow?.map((meeting: MeetingItem) => (
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
        {Meetings?.data?.week?.map((meeting: MeetingItem) => (
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