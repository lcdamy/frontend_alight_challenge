import MeetingsSchedule from "@/components/MeetingsSchedule"
import Overviewcards from "@/components/Overviewcards"
import DashboardJobs from "@/components/DashboardJobs"
import DashboardOnBoarding from "@/components/DashboardOnBoarding"
import DashboardCandidates from "@/components/DashboardCandidates"
import DashboardHeader from "@/components/DashboardHeader"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Page() {
 
  return (
        <div className="flex flex-col lg:flex-row gap-4 p-2 sm:p-4 pt-4">
          <div className="flex flex-col gap-4 w-full lg:w-4/5 pl-0 md:pl-8">
          <DashboardHeader/>
            <Overviewcards/>
            <div className="mt-4">
              <h1 className="text-[#071C50] font-[600] text[22px] mb-4">Require Attention</h1>
              <Tabs defaultValue="jobs">
                <TabsList className="flex flex-wrap gap-2 bg-transparent text-[#071C50] font-[400]">
                  <TabsTrigger
                    value="jobs"
                    className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=active]:border-b-[#F7AC25] data-[state=active]:font-[600] data-[state=active]:shadow-none transition-colors"
                  >
                    Jobs
                  </TabsTrigger>
                  <TabsTrigger
                    value="candidates"
                    className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=active]:border-b-[#F7AC25] data-[state=active]:font-[600] data-[state=active]:shadow-none transition-colors"
                  >
                    Candidates
                  </TabsTrigger>

                  <TabsTrigger
                    value="onboarding"
                    className="cursor-pointer shadow-none outline-none ring-0 rounded-none border-b-4 border-transparent data-[state=active]:border-b-[#F7AC25] data-[state=active]:font-[600] data-[state=active]:shadow-none transition-colors"
                  >
                    Onboarding
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="jobs">
                  <div className="overflow-x-auto">
                    <DashboardJobs />
                  </div>
                </TabsContent>
                <TabsContent value="candidates">
                  <DashboardCandidates/>
                </TabsContent>
                <TabsContent value="onboarding">
                  <DashboardOnBoarding />
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <MeetingsSchedule/>
        </div>
  )
}
