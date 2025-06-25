'use client'
import { DataTable } from '@/components/table/data-table'
import { onboardingColumns } from '@/components/table/columns'
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { Skeleton } from "@/components/ui/skeleton"


export default function DashboardOnBoarding() {
    const { data: session, status } = useSession();

    const accessToken = session?.user?.token;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetcher = (url: string) => fetch(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    }).then((res) => res.json());

    const { data: onboardings, error, isLoading } = useSWR(
        accessToken ? `${apiUrl}/mock/onboarding` : null,
        fetcher
    );

    if (isLoading || status === 'loading') {
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
                <span>Error loading data.</span>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <DataTable columns={onboardingColumns} data={onboardings?.data || []} />
        </div>
    );
}