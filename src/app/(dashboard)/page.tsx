import MeetingsSchedule from "@/components/MeetingsSchedule"
import Overviewcards from "@/components/Overviewcards"
import Attention from "@/components/Attention"
import DashboardHeader from "@/components/DashboardHeader"

export default function Page() {

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-2 sm:p-4">
      <div className="flex flex-col gap-4 w-full lg:w-4/5 pl-0 md:pl-8">
        <DashboardHeader />
        <Overviewcards />
        <Attention />
      </div>
      <MeetingsSchedule />
    </div>
  )
}
