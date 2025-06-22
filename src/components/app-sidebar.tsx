"use client"
import * as React from "react"
import Image from 'next/image';
import { usePathname } from "next/navigation";
import Link from 'next/link'
import {cn} from '@/lib/utils'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


const tabs=[
  {
    title:'Home',
    url:'',
    icon:'/side-home-Icon.svg'
},
{
  title:'Jobs',
  url:'dashboard/jobs',
  icon:'/side-job-Icon.svg'
},
{
  title:'Candidates',
  url:'dashboard/candidates',
  icon:'/side-candidate-Icon.svg'
},
{
  title:'Reports',
  url:'dashboard/reports',
  icon:'/side-calendar-Icon.svg'
},
{
  title:'Calendar',
  url:'dashboard/calendar',
  icon:'/side-calendar-Icon.svg'
},
]

export function AppSidebar() {
  const pathName=usePathname();
  return (
    <Sidebar className="bg-[#082777] !rounded-[8px]   ">
      <SidebarContent>
        <SidebarGroup >
          <SidebarGroupLabel className="flex flex-col gap-2 items-center mt-4 mb-16">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="logo"
                width={32}
                height={32}
              />
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-6 justify-center ">
              {tabs.map((tab)=>(
                <Link href={tab.url} key={tab.title} className='relative group '>
                <SidebarMenuItem  className={cn("flex flex-col items-center justify-center  text-[rgba(255,255,255,0.5)] group-hover:text-white",tab.title=='Home' && pathName.split('/').length==2 && ' text-white active-side-tab',tab.url.includes(pathName) && 'text-white active-side-tab' )}>
                  {/* <span className='circle-right'></span> */}
                <Image
                  src={tab.icon}
                  alt="home icon"
                  width={24}
                  height={24}
                  className={cn(
                    'opacity-50 group-hover:opacity-100',
                    ((tab.title === 'Home' && pathName.split('/').length === 2) || tab.url.includes(pathName)) && 'opacity-100',
                  )}
                />
                <span className='mt-3'>{tab.title}</span>
              </SidebarMenuItem>
                </Link>
                
              ))}
              
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
