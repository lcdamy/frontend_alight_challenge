'use client'
import { DataTable } from '@/components/table/data-table'
import { candidateColumns } from '@/components/table/columns'
import { Skeleton } from "@/components/ui/skeleton"
import { useGetCandidates } from '@/hooks/useGetCandidates';
export default function DashboardCandidates() {
    const { candidates, error, isLoading, sessionStatus } = useGetCandidates()

    if (isLoading || sessionStatus == 'loading') {
        return (
            <div className="container mx-auto flex justify-center items-center h-64 mt-24">
                <div className="w-full">
                    <div className="border rounded-md overflow-hidden">
                        <div className="flex bg-muted px-4 py-2">
                            {[...Array(7)].map((_, i) => (
                                <Skeleton className="h-5 w-1/7 mr-4 last:mr-0" key={i} />
                            ))}
                        </div>
                        {[...Array(10)].map((_, rowIdx) => (
                            <div className="flex px-4 py-3 border-t" key={rowIdx}>
                                {[...Array(7)].map((_, colIdx) => (
                                    <Skeleton className="h-4 w-1/7 mr-4 last:mr-0" key={colIdx} />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto flex justify-center items-center h-64">
                <span>Error loading candidates.</span>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <DataTable columns={candidateColumns} data={candidates?.data?.data || []} />
        </div>
    )
}