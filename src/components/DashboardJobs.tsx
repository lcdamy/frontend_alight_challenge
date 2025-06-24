'use client'
import { DataTable } from '@/components/table/data-table'
import { jobColumns } from '@/components/table/columns'
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

export default function DashboardJobs() {
    const { data: session, status } = useSession();

    const accessToken = session?.user?.token;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetcher = (url: string) => fetch(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    }).then((res) => res.json());

    const { data: jobs, error, isLoading } = useSWR(
        accessToken ? `${apiUrl}/job/list?limit=1000` : null,
        fetcher
    );

    if (isLoading || status === 'loading') {
        return (
            <div className="container mx-auto flex justify-center items-center h-64">
                <span>Loading...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto flex justify-center items-center h-64">
                <span>Error loading jobs.</span>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <DataTable columns={jobColumns} data={jobs?.data?.data || []} />
        </div>
    );
}
