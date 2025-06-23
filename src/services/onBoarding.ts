import type {Onboarding} from '@/lib/types'
export function getOnboardingData(): Onboarding[] {
    // Fetch data from your API here.
    return [
        {
            id: 1,
            name: "Alice Johnson",
            title: "Frontend Developer",
            AppliedOn: "2024-01-15",
            interviewRound: "06/10",
            assignedTo: "John Doe",
            score: 85
        },
        {
            id: 2,
            name: "Bob Smith",
            title: "Backend Developer",
            AppliedOn: "2024-02-20",
            interviewRound: "07/10",
            assignedTo: "Jane Doe",
            score: 90
        },
        {
            id: 3,
            name: "Carol Lee",
            title: "Data Analyst",
            AppliedOn: "2024-03-10",
            interviewRound: "06/10",
            assignedTo: "Mike Brown",
            score: 88
        }
    ]
}