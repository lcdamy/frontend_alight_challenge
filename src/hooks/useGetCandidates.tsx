'use client'
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

export function useGetCandidates() {
    const { data: session, status } = useSession();

    const accessToken = session?.user?.token;
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const fetcher = (url: string) => fetch(url, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
    }).then((res) => res.json());

    const { data: candidates, error, isLoading } = useSWR(
        accessToken ? `${apiUrl}/candidate/list?limit=1000` : null,
        fetcher
    );
    return {
        error,
        candidates,
        isLoading,
        sessionStatus: status
    }
}

