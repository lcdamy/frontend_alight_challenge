import { DataTable } from '@/components/table/data-table'
import { jobColumns } from '@/components/table/columns'
import { getJobData } from '@/services/jobs'
export default async function DashboardJobs() {
    const data = await getJobData()
    return (
        <div className="container mx-auto">
            <DataTable columns={jobColumns} data={data} />
        </div>
    )
}
