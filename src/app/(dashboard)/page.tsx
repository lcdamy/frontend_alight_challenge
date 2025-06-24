
'use client'
import MeetingsSchedule from "@/components/MeetingsSchedule"
import Overviewcards from "@/components/Overviewcards"
import Attention from "@/components/Attention"
import DashboardHeader from "@/components/DashboardHeader"
import { useLayoutEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


export default function Page() {
  const { data: session, status } = useSession();

  const router = useRouter();
  
  useLayoutEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-2 sm:p-4">
      <div className="flex flex-col gap-4 w-full lg:w-4/5 pl-0 md:pl-8">
        <DashboardHeader />
        <Overviewcards />
        <Attention />
      </div>
      <MeetingsSchedule />
    </div>
  )
}
