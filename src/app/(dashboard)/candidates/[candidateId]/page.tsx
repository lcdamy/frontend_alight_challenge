import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import ScoreIndicator from '@/components/circular';

function page() {

  return (
    <div className="flex flex-col gap-4 px-2 py-2 sm:px-4 sm:py-4">
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Candidates</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>John Doe</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Link href="/" className="flex items-center gap-2 text-sm text-[#071C50] cursor-pointer hover:text-[#082777] transition-colors data-[state=active]:bg-[#F3F8FF] mt-2 sm:mt-0" >
          <MoveLeft />
          Go Back
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between bg-[#F3F8FF] rounded-lg p-4 sm:p-6 shadow-sm gap-4">
        {/* Candidate Info */}
        <div className="flex flex-col justify-between w-full lg:w-4/5 gap-2">
          <div className="flex items-center w-full gap-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#6479AB30]/30 rounded-full flex items-center justify-center text-lg sm:text-[22px] font-[600] text-[#071C5070]">
              JD
            </div>
            <div>
              <div className="text-lg sm:text-[22px] text-[#071C50]/50 font-[600] mb-2"> John Doe <span className="bg-[#DDEAFB] text-[#071C50] text-xs sm:text-sm ml-2 px-4 sm:px-8 py-0.5 rounded-lg font-[600] ">Interview</span></div>
              <div className="text-xs sm:text-sm text-[#071C50]/50">John.Doe@gmail.com | +250 788 492 456</div>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-40 justify-between mt-2">
            <a href="#" className="text-[#7D9BE7] text-xs sm:text-sm underline">Edit</a>
            <a href="#">
              <Image
                src="/linkedin.png"
                alt="Share Icon"
                width={8}
                height={8}
                className="w-4 h-4"
              />
            </a>
            <a href="#">
              <Image
                src="/twitter.png"
                alt="Share Icon"
                width={8}
                height={8}
                className="w-4 h-4"
              />
            </a>
            <a href="#">
              <Image
                src="/globe.png"
                alt="Share Icon"
                width={8}
                height={8}
                className="w-4 h-4"
              />
            </a>
          </div>
        </div>

        {/* Status Panel */}
        <div className="text-xs sm:text-sm border-t lg:border-t-0 lg:border-l pt-4 lg:pt-0 lg:pl-16 border-gray-200 space-y-2 w-full lg:w-1/5">
          <div className="font-[600]"> Current Status</div>
          <div className="flex justify-between items-center">
            <span className='font-[400]'>Round</span>
            <span className="bg-[#DDEAFB] font-[600] text-center w-24 sm:w-[142px] py-0.5 rounded-lg">Technical</span>
          </div>
          <div className="flex justify-between items-center ">
            <span className='font-[400]'>Assigned to</span>
            <span className="flex items-center space-x-1">
              <Image
                src="/assign.png"
                alt="Avatar"
                width={142}
                height={24}
              />
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className='font-[400]'> Interview Date</span>
            <span className='text-[#071C50]/50 font-[600]' >Jul 30, 2024</span>
          </div>
        </div>
      </div>

      <div className="bg-[#F3F8FF] rounded-lg p-4 sm:p-6 shadow-sm">
        {/* Tabs */}
        <Tabs defaultValue="general">
          <TabsList className="flex flex-wrap gap-2 bg-transparent ">
            {/* ...TabsTrigger unchanged... */}
            <TabsTrigger value="general" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF] ">
              General
            </TabsTrigger>
            <TabsTrigger value="evaluation" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF]">
              Evaluation
            </TabsTrigger>
            <TabsTrigger value="experience" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF]">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF]">
              Education
            </TabsTrigger>
            <TabsTrigger value="events" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF]">
              Events
            </TabsTrigger>
            <TabsTrigger value="documents" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF]">
              Documents
            </TabsTrigger>
            <TabsTrigger value="messages" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF]">
              Messages
            </TabsTrigger>
          </TabsList>
          <Separator className="" />
          <TabsContent value="general" className='mt-4'>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Candidate Files */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center text-xs sm:text-sm font-[600] mb-4 gap-2">
                  <span>Candidate Files</span>
                  <a href="#" className="text-[#7D9BE7] text-xs sm:text-sm underline font-light">Edit</a>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {[{ name: 'Cover_letter.pdf', icon: "pdf.png" }, { name: 'My_resume.docx', icon: "word.png" }, { name: 'Oct_payslip.pdf', icon: "pdf.png" }, { name: 'Oct_payslip.pdf', icon: "pdf.png" }].map((file, idx) => (
                    <span key={idx} className="bg-[#E7F1FF]  px-2 sm:px-3 py-1.5 rounded-sm text-xs sm:text-sm flex items-center gap-2 border border-[#b6c3d4]">
                      <Image
                        src={`/${file.icon}`}
                        alt="File Icon"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                      <span className='text-[#071C50]'>{file.name}</span> <span className="text-xs text-[#071C50]/50">2d ago</span>
                    </span>
                  ))}
                </div>

                {/* Last Experience */}
                <div>
                  <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center text-xs sm:text-sm font-[600] mb-4">
                    <span>Last Experience</span>
                    <a href="#" className="text-[#7D9BE7] text-xs sm:text-sm underline font-light">Edit</a>
                  </div>
                  <div className="text-xs sm:text-sm">

                    <div className='mb-6'>
                      <div className='flex flex-col gap-1 w-full border-l-4 border-[#c6d3e4] pl-2 mb-3'>
                        <span className='text-[#071C50]'>Senior Data Analyst</span>
                        <div className="flex gap-2">
                          <span className="text-[#071C50]">Alight</span>
                          <span className="text-[#071C50]/50">(May 2021 – Present)</span>
                        </div>
                      </div>
                      <h1 className='text-[#071C50]'>Responsible for;</h1>
                      <ul className="list-decimal ml-6 mt-2 text-[#071C50]/50 text-[11px] sm:text-xs font-[500] leading-relaxed w-11/12">
                        <li>
                          Data Exploration and Analysis: Conducted in-depth analysis of large datasets to identify trends, patterns, and actionable insights that supported business decision-making. Utilized statistical techniques and data visualization tools to communicate findings effectively to stakeholders.
                        </li>
                        <li>
                          Data Cleaning and Preprocessing: Developed and implemented data cleaning processes to ensure data integrity and accuracy. Utilized Python and SQL to preprocess data, removing duplicates, handling missing values, and transforming data into a usable format for analysis.
                        </li>
                        <li>
                          Reporting and Communication: Created comprehensive reports and dashboards using tools like Tableau and Power BI to present data insights to management and cross-functional teams. Effectively communicated complex data findings in a clear and concise manner, facilitating data-driven decision-making.
                        </li>
                      </ul>
                    </div>

                    <div className='mb-6'>
                      <div className='flex flex-col gap-1 w-full border-l-4 border-[#c6d3e4] pl-2 mb-3'>
                        <span className='text-[#071C50]'>Data Analyst</span>
                        <div className="flex gap-2">
                          <span className="text-[#071C50]">Insightful Analytics Ltd.</span>
                          <span className="text-[#071C50]/50">(Jan 2019 – Apr 2021)</span>
                        </div>
                      </div>
                      <h1 className='text-[#071C50]'>Responsible for;</h1>
                      <ul className="list-decimal ml-6 mt-2 text-[#071C50]/50 text-[11px] sm:text-xs font-[500] leading-relaxed w-11/12">
                        <li>
                          Performed data mining and statistical analysis to support business objectives and improve operational efficiency.
                        </li>
                        <li>
                          Automated data collection and reporting processes using Python scripts, reducing manual effort by 40%.
                        </li>
                        <li>
                          Collaborated with cross-functional teams to define KPIs and deliver actionable insights through interactive dashboards.
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="bg-[#F3F8FF] rounded-sm p-2 sm:p-4 border-1 border-[#cddbee]">
                <div className='flex items-center justify-center'>
                  <div className="flex flex-col items-center justify-center text-center bg-white w-full sm:w-50 px-2 sm:px-4 pt-4 pb-1 rounded-lg border border-[#cddbee] shadow-sm">
                    <ScoreIndicator />
                    <div>
                      <span className='font-[600]'> Score: &nbsp;</span>
                      <span className="text-[#469607] font-[500]"> Potential Fit</span>
                    </div>
                    <a href="#" className="text-[#7D9BE7] text-xs sm:text-sm underline mt-1 inline-block">Edit</a>
                  </div>
                </div>

                <div className="mt-8 sm:mt-16 space-y-2 text-[12px] sm:text-[14px] text-[#071C50]/80 font-[400] ">
                  {[
                    ['Qualifications and skills match', true],
                    ['Experience Relevance', true],
                    ['Education', true],
                    ['Keywords Match', false],
                    ['Years of Experience', true],
                    ['Job Hopping', false],
                    ['Cultural Fit', true],
                    ['Interview Performance', true],
                    ['References', false],
                    ['Additional Factors', true],
                  ].map(([label, isPass], idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span>{label}</span>
                      <span className={`text-xl ${isPass ? 'text-[#4BD37B]' : 'text-red-500'}`}>
                        {isPass ? '✔' : '✖'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          {/* ...Other TabsContent unchanged... */}
          <TabsContent value="evaluation" className='mt-4'>
            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm font-[600] mb-2">Evaluation</h2>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs sm:text-sm font-[600]">No evaluations available yet.</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="experience" className='mt-4'>
            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm font-[600] mb-2">Experience</h2>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs sm:text-sm font-[600]">No experience details available yet.</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="education" className='mt-4'>
            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm font-[600] mb-2">Education</h2>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs sm:text-sm font-[600]">No education details available yet.</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="events" className='mt-4'>
            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm font-[600] mb-2">Events</h2>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs sm:text-sm font-[600]">No events scheduled yet.</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="documents" className='mt-4'>
            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm font-[600] mb-2">Documents</h2>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs sm:text-sm font-[600]">No documents uploaded yet.</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="messages" className='mt-4'>
            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm font-[600] mb-2">Messages</h2>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-xs sm:text-sm font-[600]">No messages available yet.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default page
