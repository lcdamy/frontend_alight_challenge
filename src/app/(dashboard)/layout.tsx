import React from 'react'
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import AppHeader from "@/components/AppHeader"
import { AppSidebar } from "@/components/app-sidebar"

interface props {
  children: React.ReactNode
}

function layout({ children }: props) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <div>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider >
  )
}

export default layout