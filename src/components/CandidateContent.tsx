import React from 'react';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from 'next/image';

import { Separator } from "@/components/ui/separator"
import ScoreIndicator from '@/components/circular';
import { candidateExperience, candidateFiles, candidateQualifications } from '@/lib/constants';

const CandidateContent = () => {
    return (
        <div className="bg-[#F3F8FF] rounded-lg p-4 sm:p-6 shadow-sm">
            {/* Tabs */}
            <Tabs defaultValue="general">
                <TabsList className="flex flex-wrap gap-2 bg-transparent ">
                    {/* ...TabsTrigger unchanged... */}
                    <TabsTrigger value="general" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF] data-[state=inactive]:hover:text-[#071C50]/70">
                        General
                    </TabsTrigger>
                    <TabsTrigger value="evaluation" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF] data-[state=inactive]:hover:text-[#071C50]/70">
                        Evaluation
                    </TabsTrigger>
                    <TabsTrigger value="experience" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF] data-[state=inactive]:hover:text-[#071C50]/70">
                        Experience
                    </TabsTrigger>
                    <TabsTrigger value="education" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF] data-[state=inactive]:hover:text-[#071C50]/70">
                        Education
                    </TabsTrigger>
                    <TabsTrigger value="events" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF] data-[state=inactive]:hover:text-[#071C50]/70">
                        Events
                    </TabsTrigger>
                    <TabsTrigger value="documents" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF] data-[state=inactive]:hover:text-[#071C50]/70">
                        Documents
                    </TabsTrigger>
                    <TabsTrigger value="messages" className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=inactive]:text-[#071C50]/50 font-[400] data-[state=active]:font-[600] data-[state=inactive]:font-[400] data-[state=active]:border-b-[#F7AC25] data-[state=active]:shadow-none transition-colors data-[state=active]:bg-[#F3F8FF] data-[state=inactive]:hover:text-[#071C50]/70">
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
                                <a href="#" className="text-[#7D9BE7] text-xs sm:text-sm underline font-light hover:text-[#6780c0]">Edit</a>
                            </div>
                            <div className="flex gap-3 mb-2">
                                {candidateFiles.map((file, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-[#E7F1FF] hover:bg-[#c4d6f1] px-2 sm:px-3 py-1.5 rounded-sm text-xs sm:text-sm flex items-center gap-2 border border-[#b6c3d4] transition-colors duration-500"
                                    >
                                        <Image
                                            src={`/${file.icon}`}
                                            alt="File Icon"
                                            width={14}
                                            height={14}
                                        />
                                        <span className='text-[#071C50]'>{file.name}</span>
                                        <span className="text-xs text-[#071C50]/50">2d ago</span>
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <span className='text-[#7D9BE7] text-xs sm:text-sm font-light text-left hover:cursor-pointer hover:text-[#6780c0]'>View All</span>
                            </div>

                            {/* Last Experience */}
                            <div>
                                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center text-xs sm:text-sm font-[600] mb-4">
                                    <span>Last Experience</span>
                                    <a href="#" className="text-[#7D9BE7] text-xs sm:text-sm underline font-light hover:text-[#6780c0]">Edit</a>
                                </div>
                                <div className="text-xs sm:text-sm">

                                    {(Array.isArray(candidateExperience) ? candidateExperience : []).map((exp, idx) => (
                                        <div className='mb-6' key={idx}>
                                            <div className='flex flex-col gap-1 w-full border-l-4 border-[#c6d3e4] pl-2 mb-3'>
                                                <span className='text-[#071C50]'>{exp.title}</span>
                                                <div className="flex gap-2">
                                                    <span className="text-[#071C50]">{exp.company}</span>
                                                    <span className="text-[#071C50]/50">({exp.period})</span>
                                                </div>
                                            </div>
                                            <h1 className='text-[#071C50]'>Responsible for;</h1>
                                            <ul className="list-decimal ml-6 mt-2 text-[#071C50]/50 text-[11px] sm:text-xs font-[500] leading-relaxed w-11/12">
                                                {(Array.isArray(exp.responsibilities) ? exp.responsibilities : []).map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className='hover:text-[#071C50] transition-colors duration-300 delay-100'
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}

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
                                    <a href="#" className="text-[#7D9BE7] text-xs sm:text-sm underline mt-1 inline-block hover:text-[#6780c0]">Edit</a>
                                </div>
                            </div>

                            <div className="mt-8 sm:mt-16 space-y-2 text-[12px] sm:text-[14px] text-[#071C50]/80 font-[400] ">
                                {candidateQualifications.map(([label, isPass], idx) => (
                                    <div key={idx} className="flex justify-between items-center hover:bg-[#071C50]/5 px-1  transition-colors duration-300 delay-100">
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
    );
};

export default CandidateContent;