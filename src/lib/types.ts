export type Job = {
    id: string;
    position: string;
    positionLeft: number;
    applicants: number;
    interviewed: number;
    rejected: number;
    feedbackPending: number;
    offered: number;
    description: string;
    requirements: string[];
    responsabilities: string[];
    applicationLink: string;
    applicationDeadline: string;
    status?: "open" | "closed";
    createdAt?: string;
    updatedAt?: string;
    user?: unknown
}

export type Candidate = {
    id: string;
    names: string;
    gender: "male" | "female";
    email: string;
    phoneNumber?: string;
    title?: string;
    linkedinURL?: string;
    profileURL?: string;
    tranings?: string;
    documentation?: string;
    supervisor?: string | null;
    supervisorProfile?: string | null;
    project?: string | null;
    educations?: object[];
    experiences?: object[];
    createdAt?: string;
    updatedAt?: string;
}

export type Onboarding = {
    id: number
    name: string
    title: string
    AppliedOn: string
    interviewRound: string
    assignedTo: string | null
    score: number
}

export type CardItem = {
    title: string;
    count: number;
    status: string;
    imageSrc: string;
}

export type MeetingItem = {
    id: number;
    topic: string;
    candidate_name: string;
    position: string;
    phase: string;
    time: string;
    duration: string;
    status: "scheduled" | "passed" | "cancelled";
}