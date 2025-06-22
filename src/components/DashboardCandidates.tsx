import { DataTable } from '@/components/table/data-table'
import { candidateColumns } from '@/components/table/columns'
import { getCandidateData } from '@/services/candidates'

export default async function DashboardCandidates() {
    const data = await getCandidateData()
    return (
        <div className="container mx-auto">
            <DataTable columns={candidateColumns} data={data} />
        </div>
    )
}