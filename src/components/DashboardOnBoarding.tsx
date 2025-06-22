import { DataTable } from '@/components/table/data-table'
import { onboardingColumns } from '@/components/table/columns'
import { getOnboardingData } from '@/services/onBoarding'

export default async function DashboardOnBoarding() {
    const data = await getOnboardingData()
    return (
        <div className="container mx-auto">
            <DataTable columns={onboardingColumns} data={data} />
        </div>
    )
}