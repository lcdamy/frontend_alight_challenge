import React from 'react'
import BreadCrumbComponent from '@/components/BreadCrumbComponent';
import CandidateHeader from '@/components/CandidateHeader';
import CandidateContent from '@/components/CandidateContent';



function page() {

  return (
    <div className="flex flex-col gap-4 px-2 py-2 sm:px-4 sm:py-4">
      <BreadCrumbComponent />
      <CandidateHeader />
      <CandidateContent />
    </div>
  )
}

export default page
