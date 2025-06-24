'use client'
import React from 'react'
import BreadCrumbComponent from '@/components/BreadCrumbComponent';
import CandidateHeader from '@/components/CandidateHeader';
import CandidateContent from '@/components/CandidateContent';
import { useLayoutEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


function page() {
  const { data: session, status } = useSession();

  const router = useRouter();

  useLayoutEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  return (
    <div className="flex flex-col gap-4 px-2 py-2 sm:px-4 sm:py-4">
      <BreadCrumbComponent />
      <CandidateHeader />
      <CandidateContent />
    </div>
  )
}

export default page
