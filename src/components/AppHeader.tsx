'use client'
import React from 'react'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image';
import {
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation"


function AppHeader() {
  const router = useRouter()
  const logout = () => {
    router.push('/login')
  }
  return (
    <header className="flex h-16 w-full bg-white border-b border-[#0827773D]/24 shadow-md shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 px-2 sm:px-4">
      <div className="flex items-center gap-2 w-full">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />

        <div className="flex items-center justify-between w-full gap-2">
          {/* Search box on the left */}
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-2 py-1 text-sm w-24 sm:w-40 md:w-56 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* Spacer to push avatar to the right */}
          <div className="flex-1" />

          {/* Avatar with dropdown on the right */}
          <div className="relative">
            <details className="group">
              <summary className="list-none cursor-pointer flex items-center gap-2">
                <Image
                  width={32}
                  height={32}
                  src="/profile.png"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full border"
                />
                <span className="hidden md:inline">Account</span>
              </summary>
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader