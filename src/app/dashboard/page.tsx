"use client"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import Image from 'next/image';
import CustomTable from "@/app/dashboard/jobs/page"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { ChevronsRight, CirclePlus } from "lucide-react"

const cardList = [
  {
    title: "Interview scheduled",
    count: 12,
    imageSrc: "/Illustrations-1.png",
    status: "pending"
  },
  {
    title: "Interview Feedback",
    count: 52,
    imageSrc: "/Illustrations-2.png",
    status: "pending"
  },
  {
    title: "Approval",
    count: 33,
    imageSrc: "/Illustrations-3.png",
    status: "pending"
  },
  {
    title: "Offer Acceptance",
    count: 23,
    imageSrc: "/Illustrations-4.png",
    status: "pending"
  },
  {
    title: "Documenations",
    count: 10,
    imageSrc: "/Illustrations-5.png",
    status: "pending"
  },
  {
    title: "Training",
    count: 40,
    imageSrc: "/Illustrations-6.png",
    status: "completed"
  },
  {
    title: "Supervisor Allocation",
    count: 21,
    imageSrc: "/Illustrations-7.png",
    status: "pending"
  },
  {
    title: "Project Allocation",
    count: 10,
    imageSrc: "/Illustrations-8.png",
    status: "pending"
  }
];

const Meetings = {
  "today": [
    {
      "id": 1,
      "topic": "Interview",
      "candidate_name": "Mini Samantha",
      "position": "Software Engineer",
      "phase": "4th Round",
      "time": "10:00",
      "duration": "10:00 - 11:00",
      "status": "passed"
    },
    {
      "id": 2,
      "topic": "Interview",
      "candidate_name": "John Doe",
      "position": "Data Scientist",
      "phase": "3rd Round",
      "time": "11:00",
      "duration": "11:00 - 12:00",
      "status": "scheduled"
    },
    {
      "id": 3,
      "topic": "Interview",
      "candidate_name": "Alice Smith",
      "position": "Product Manager",
      "phase": "2nd Round",
      "time": "1:00",
      "duration": "1:00 - 2:00",
      "status": "scheduled"
    },
    {
      "id": 4,
      "topic": "Interview",
      "candidate_name": "Bob Johnson",
      "position": "UX Designer",
      "phase": "1st Round",
      "time": "3:00",
      "duration": "3:00 - 4:00",
      "status": "scheduled"
    }
  ],
  "Tomorrow": [
    {
      "id": 5,
      "topic": "Interview",
      "candidate_name": "Charlie Brown",
      "position": "DevOps Engineer",
      "phase": "Final Round",
      "time": "10:00",
      "duration": "10:00 - 11:00",
      "status": "scheduled"
    },
    {
      "id": 6,
      "topic": "Interview",
      "candidate_name": "Diana Prince",
      "position": "Marketing Specialist",
      "phase": "3rd Round",
      "time": "11:00",
      "duration": "11:00 - 12:00",
      "status": "passed"
    },
    {
      "id": 7,
      "topic": "Interview",
      "candidate_name": "Ethan Hunt",
      "position": "Systems Analyst",
      "phase": "2nd Round",
      "time": "1:00",
      "duration": "1:00 - 2:00",
      "status": "scheduled"
    },
    {
      "id": 8,
      "topic": "Interview",
      "candidate_name": "Fiona Gallagher",
      "position": "HR Manager",
      "phase": "1st Round",
      "time": "3:00",
      "duration": "3:00 - 4:00",
      "status": "scheduled"
    }
  ],
  "week": [
    {
      "id": 9,
      "topic": "Interview",
      "candidate_name": "George Costanza",
      "position": "Software Tester",
      "phase": "Final Round",
      "time": "10:00",
      "duration": "10:00 - 11:00",
      "status": "scheduled"
    },
    {
      "id": 10,
      "topic": "Interview",
      "candidate_name": "Hannah Baker",
      "position": "Content Writer",
      "phase": "3rd Round",
      "time": "Sep 3",
      "duration": "11:00 - 12:00",
      "status": "passed"
    },
    {
      "id": 11,
      "topic": "Interview",
      "candidate_name": "Ian Malcolm",
      "position": "Data Analyst",
      "phase": "2nd Round",
      "time": "Sep 4",
      "duration": "1:00 - 2:00",
      "status": "scheduled"
    },
    {
      "id": 12,
      "topic": "Interview",
      "candidate_name": "Julia Roberts",
      "position": "Graphic Designer",
      "phase": "1st Round",
      "time": "Sep 5",
      "duration": "3:00 - 4:00",
      "status": "scheduled"
    },
    {
      "id": 13,
      "topic": "Interview",
      "candidate_name": "Kevin Hart",
      "position": "Network Engineer",
      "phase": "Final Round",
      "time": "Sep 6",
      "duration": "10:00 - 11:00",
      "status": "scheduled"
    },
    {
      "id": 14,
      "topic": "Interview",
      "candidate_name": "Laura Croft",
      "position": "Business Analyst",
      "phase": "3rd Round",
      "time": "Sep 7",
      "duration": "11:00 - 12:00",
      "status": "passed"
    },
    {
      "id": 15,
      "topic": "Interview",
      "candidate_name": "Mike Wazowski",
      "position": "Cloud Architect",
      "phase": "2nd Round",
      "time": "Sep 8",
      "duration": "1:00 - 2:00",
      "status": "scheduled"
    },
    {
      "id": 16,
      "topic": "Interview",
      "candidate_name": "Nina Simone",
      "position": "Cybersecurity Analyst",
      "phase": "1st Round",
      "time": "Sep 9",
      "duration": "3:00 - 4:00",
      "status": "scheduled"
    },
    {
      "id": 17,
      "topic": "Interview",
      "candidate_name": "Oscar Wilde",
      "position": "IT Support Specialist",
      "phase": "Final Round",
      "time": "Sep 10",
      "duration": "10:00 - 11:00",
      "status": "scheduled"
    }
  ]
};


export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
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
                      onClick={() => {
                        // Add your logout logic here
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </header>
        <div className="flex">
          {/* Breadcrumb in the center */}
        </div>
        <div className="flex flex-col lg:flex-row gap-4 p-2 sm:p-4 pt-4">
          <div className="flex flex-col gap-4 w-full lg:w-4/5 pl-0 md:pl-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-16 gap-2">
              <h1 className="text-[#071C50] font-[600] text-[18px] md:text-[22px]">Overview</h1>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <Button
                  type="button"
                  className="bg-[#4B93E7] text-white hover:bg-[#082777] hover:cursor-pointer transition-colors duration-200 ease-in-out w-full sm:w-auto"
                >
                  <CirclePlus /> <span>Add Candidate</span>
                </Button>
                <Button
                  type="button"
                  className="bg-[#4B93E7] text-white hover:bg-[#082777] hover:cursor-pointer transition-colors duration-200 ease-in-out w-full sm:w-auto"
                >
                  <CirclePlus /> <span>Add Job</span>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {cardList.map((card, idx) => (
                <Card
                  key={card.title}
                  className="w-full max-w-full relative h-[167px] bg-[#F3F8FF] text-black/50 border-0 font-[400] hover:shadow-lg hover:bg-[#A0DBF457]/34 hover:font-semibold transition-shadow duration-300 ease-in-out group"
                >
                  <CardContent className="flex flex-col items-center justify-center h-full">
                    <p className="absolute -top-4 -left-4 px-6 py-6 border border-[#08277782]/50 rounded-3xl bg-[#F3F8FF] z-10 flex items-center justify-center text-2xl text-[#071C50] shadow transition-all duration-500 ease-in-out group-hover:bg-[#4B93E7] group-hover:text-white group-hover:scale-125 group-hover:-top-2 group-hover:-left-2 group-hover:shadow-lg">
                      {card.count}
                    </p>
                    <div className="flex flex-col justify-between h-full w-full">
                      <div className="flex justify-end">
                        <Image
                          width={86}
                          height={90}
                          src={card.imageSrc}
                          alt={card.title}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                      <div className="text-left text-[14px] self-start mb-0">
                        <div className="flex flex-row items-center justify-between w-4/5 group-hover:mt-2 transition-all duration-500">
                          <div>{card.title} <span>{card.status}</span> </div>
                        </div>
                        <ChevronsRight
                          className="absolute bottom-4 right-12 opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all duration-500"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-4">
              <h1 className="text-base md:text-lg font-semibold mb-2">Require Attention</h1>
              <Tabs defaultValue="Jobs">
                <TabsList className="flex flex-wrap gap-2">
                  <TabsTrigger value="Jobs">Jobs</TabsTrigger>
                  <TabsTrigger value="Candidates">Candidates</TabsTrigger>
                  <TabsTrigger value="onboarding">onboarding</TabsTrigger>
                </TabsList>
                <TabsContent value="Jobs">
                  <div className="overflow-x-auto">
                    <CustomTable />
                  </div>
                </TabsContent>
                <TabsContent value="Candidates">
                  454
                </TabsContent>
                <TabsContent value="onboarding">
                  787
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div className="lg:w-1/5 w-full bg-[#F3F8FF] p-2 sm:p-4 rounded-sm">
            <h1 className="font-[600] text-[#071C50] text-[16px]"> Upcoming Meetings </h1>
            <div className="mt-4 sm:mt-6">
              <h1 className="font-[600] text-xs text-[#071C50] opacity-50 mb-2 sm:mb-4">Today</h1>
              {Meetings.today.map((meeting) => (
                <div
                  key={meeting.id}
                  className={`flex flex-row justify-between items-center gap-x-1 ${meeting.status === "passed"
                    ? "bg-[#B0F1B65C]/36 text-[#2B5708] border-r-4 border-[#2B5708]/50 hover:bg-green-300 hover:cursor-pointer"
                    : "bg-[#A0DBF457]/34 text-[#1B5CBE] border-r-4 border-[#1B5CBE]/50 hover:bg-blue-300 hover:cursor-pointer"
                    } font-[400] text-[10px] p-2 rounded-sm mb-1 transition-colors duration-300`}
                >
                  <span className="min-w-[8px] text-left font-bold">{meeting.time}</span>
                  <div className="flex-1 border-l border-[#1B5CBE70]/44 pl-2 sm:pl-4">
                    <div>
                      <span className="font-bold">{meeting.candidate_name}</span>;{" "}
                      <span>{meeting.position};</span>{" "}
                      <span>{meeting.phase}</span>
                    </div>
                    <div>
                      <span>{meeting.topic}</span>{" "}
                      <span className="font-bold">| {meeting.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 sm:mt-6">
              <h1 className="font-[600] text-xs text-[#071C50] opacity-50 mb-2 sm:mb-4">Tomorrow</h1>
              {Meetings.Tomorrow.map((meeting) => (
                <div
                  key={meeting.id}
                  className={`flex flex-row justify-between items-center gap-1 ${meeting.status === "passed"
                    ? "bg-[#B0F1B65C]/36 text-[#2B5708] border-r-4 border-[#2B5708]/50 hover:bg-green-300 hover:cursor-pointer"
                    : "bg-[#A0DBF457]/34 text-[#1B5CBE] border-r-4 border-[#1B5CBE]/50 hover:bg-blue-300 hover:cursor-pointer"
                    }  font-[400] text-[10px] p-2 rounded-md mb-1 transition-colors duration-300`}
                >
                  <span className="min-w-[8px] text-left font-bold">{meeting.time}</span>
                  <div className="flex-1 border-l border-[#1B5CBE70]/44 pl-2 sm:pl-4">
                    <div>
                      <span className="font-bold">{meeting.candidate_name}</span>; <span>{meeting.position};</span> <span>{meeting.phase}</span>
                    </div>
                    <div>
                      <span>{meeting.topic}</span> <span className="font-bold">| {meeting.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 sm:mt-6">
              <h1 className="font-[600] text-xs text-[#071C50] opacity-50 mb-2 sm:mb-4">This week</h1>
              {Meetings.week.map((meeting) => (
                <div
                  key={meeting.id}
                  className={`flex flex-row justify-between items-center gap-1 ${meeting.status === "passed"
                    ? "bg-[#B0F1B65C]/36 text-[#2B5708] border-r-4 border-[#2B5708]/50 hover:bg-green-300 hover:cursor-pointer"
                    : "bg-[#A0DBF457]/34 text-[#1B5CBE] border-r-4 border-[#1B5CBE]/50 hover:bg-blue-300 hover:cursor-pointer"
                    }  font-[400] text-[10px] p-2 rounded-md mb-1 transition-colors duration-300`}
                >
                  <span className="min-w-[8px] text-left font-bold">{meeting.time}</span>
                  <div className="flex-1 border-l border-[#1B5CBE70]/44 pl-2 sm:pl-4">
                    <div>
                      <span className="font-bold">{meeting.candidate_name}</span>; <span>{meeting.position};</span> <span>{meeting.phase}</span>
                    </div>
                    <div>
                      <span>{meeting.topic}</span> <span className="font-bold">| {meeting.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider >
  )
}
