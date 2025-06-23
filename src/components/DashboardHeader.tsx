import { Button } from "@/components/ui/button"
import { CirclePlus } from "lucide-react"


function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-8 gap-2">
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
  )
}

export default DashboardHeader