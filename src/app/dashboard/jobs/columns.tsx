"use client"

import { ColumnDef } from "@tanstack/react-table"
import { EllipsisVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
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
    supervisor?: string;
    project?: string;
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

export const jobColumns: ColumnDef<Job>[] = [
    {
        accessorKey: "position",
        header: "Position",
    },
    {
        accessorKey: "positionLeft",
        header: "Positions Left",
        cell: ({ row }) => <span>{row.getValue("positionLeft")}</span>,
    },
    {
        accessorKey: "applicants",
        header: "Applicants",
        cell: ({ row }) => <span>{row.getValue("applicants")}</span>,
    },
    {
        accessorKey: "interviewed",
        header: "Interviewed",
        cell: ({ row }) => <span>{row.getValue("interviewed")}</span>,
    },
    {
        accessorKey: "rejected",
        header: "Rejected",
        cell: ({ row }) => <span>{row.getValue("rejected")}</span>,
    },
    {
        accessorKey: "feedbackPending",
        header: "Feedback Pending",
        cell: ({ row }) => <span>{row.getValue("feedbackPending")}</span>,
    },
    {
        accessorKey: "offered",
        header: "Offered",
        cell: ({ row }) => <span>{row.getValue("offered")}</span>,
    },
    {
        id: "actions",
        cell: ({ row }) => (
            <div className="flex justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <span className="sr-only">Open menu</span>
                            <EllipsisVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => console.log("Edit job", row.original)}
                        > Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => console.log("Delete job", row.original)}
                        > Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        ),
    },
];

export const candidateColumns: ColumnDef<Candidate>[] = [
    {
        accessorKey: "names",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => <span>{row.getValue("email")}</span>,
    },

    {
        id: "actions",
        cell: ({ row }) => (
            <div className="flex justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <span className="sr-only">Open menu</span>
                            <EllipsisVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => console.log("Edit candidate", row.original)}
                        > Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => console.log("Delete candidate", row.original)}
                        > Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        ),
    },
];

export const onboardingColumns: ColumnDef<Onboarding>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => <span>{row.getValue("title")}</span>,
    },
    {
        accessorKey: "AppliedOn",
        header: "Applied On",
        cell: ({ row }) => <span>{row.getValue("AppliedOn")}</span>,
    },
    {
        accessorKey: "interviewRound",
        header: "Interview Round",
        cell: ({ row }) => <span>{row.getValue("interviewRound")}</span>,
    },
    {
        accessorKey: "assignedTo",
        header: "Assigned To",
        cell: ({ row }) => <span>{row.getValue("assignedTo") || "-"}</span>,
    },
    {
        accessorKey: "score",
        header: "Score",
        cell: ({ row }) => <span>{row.getValue("score")}</span>,
    },
    {
        id: "actions",
        cell: ({ row }) => (
            <div className="flex justify-end">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <span className="sr-only">Open menu</span>
                            <EllipsisVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem
                            onClick={() => console.log("Edit onboarding", row.original)}
                        > Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => console.log("Delete onboarding", row.original)}
                        > Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        ),
    },
];