import React from 'react';
import Image from 'next/image';

const CandidateHeader = () => {
    return (
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
                    <a href="#" className="text-[#7D9BE7] text-xs sm:text-sm underline hover:text-[#6780c0]">Edit</a>
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
                <div className="flex justify-between items-center hover:bg-[#071C50]/5 transition-colors duration-300 delay-100 px-1">
                    <span className='font-[400]'>Round</span>
                    <span className="bg-[#DDEAFB] font-[600] text-center w-24 sm:w-[142px] py-0.5 rounded-lg">Technical</span>
                </div>
                <div className="flex justify-between items-center hover:bg-[#071C50]/5 transition-colors duration-300 delay-100 px-1">
                    <span className='font-[400]'>Assigned</span>
                    <span className="flex items-center space-x-1">
                        <Image
                            src="/assign.png"
                            alt="Avatar"
                            width={142}
                            height={24}
                        />
                    </span>
                </div>
                <div className="flex justify-between items-center hover:bg-[#071C50]/5 transition-colors duration-300 delay-100 px-1">
                    <span className='font-[400]'> Interview Date</span>
                    <span className='text-[#071C50]/50 font-[600]' >Jul 30, 2024</span>
                </div>
            </div>
        </div>
    );
};

export default CandidateHeader;