'use client';
import { DataTable } from '@/components/table/data-table'
import { candidateColumns } from '@/components/table/columns'
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

export default function DashboardCandidates() {
    const { data: session, status } = useSession();

    const accessToken = session?.user?.token;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetcher = (url: string) => fetch(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    }).then((res) => res.json());

    const { data: candidates, error } = useSWR(
        accessToken ? `${apiUrl}/candidate/list` : null,
        fetcher
    );

    if (!candidates && !error) {
        return (
            <div className="container mx-auto flex justify-center items-center h-64">
                <span>Loading...</span>
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