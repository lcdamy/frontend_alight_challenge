import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { MoveLeft } from 'lucide-react';
import Link from 'next/link'

const BreadCrumbComponent = () => {
    return (
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
            <Link href="/" className="flex items-center gap-2 text-sm text-[#071C50]/70 cursor-pointer hover:text-[#071C50] transition-colors data-[state=active]:bg-[#F3F8FF] mt-2 sm:mt-0" >
                <MoveLeft />
                Go Back
            </Link>
        </div>
    );
};

export default BreadCrumbComponent;
