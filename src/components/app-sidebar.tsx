"use client"
import * as React from "react"
import Image from 'next/image';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#082777] text-white">
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
            <SidebarMenu className="flex flex-col gap-6 items-center justify-center">
              <SidebarMenuItem className="flex flex-col items-center justify-center">
                <Image
                  src="/side-home-Icon.svg"
                  alt="home icon"
                  width={24}
                  height={24}
                />
                <span>Home</span>
              </SidebarMenuItem>
              <SidebarMenuItem  className="flex flex-col items-center justify-center">
                <Image
                  src="/side-job-Icon.svg"
                  alt="home icon"
                  width={24}
                  height={24}
                />
                <span>Jobs</span>
              </SidebarMenuItem>
              <SidebarMenuItem  className="flex flex-col items-center justify-center">
                <Image
                  src="/side-candidate-Icon.svg"
                  alt="home icon"
                  width={24}
                  height={24}
                />
                <span>Candidates</span>
              </SidebarMenuItem>
              <SidebarMenuItem className="flex flex-col items-center justify-center">
                <Image
                  src="/side-report-Icon.svg"
                  alt="home icon"
                  width={24}
                  height={24}
                />
                <span>Reports</span>
              </SidebarMenuItem>
              <SidebarMenuItem  className="flex flex-col items-center justify-center">
                <Image
                  src="/side-calendar-Icon.svg"
                  alt="home icon"
                  width={24}
                  height={24}
                />
                <span>Calendalar</span>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
