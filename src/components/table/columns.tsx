"use client"
import type {Job,Candidate,Onboarding} from "@/lib/types"
import { ColumnDef } from "@tanstack/react-table"
import { EllipsisVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const jobColumns: ColumnDef<Job>[] = [
    {
        accessorKey: "position",
        header: "",
        cell: ({ row }) => <span>{row.getValue("position")}</span>,
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
        header: "",
        cell: ({ row }) => <span>{row.getValue("names")}</span>,
    },
    {
        accessorKey: "tranings",
        header: "Training",
        cell: ({ row }) => <span>{row.getValue("tranings") || "-"}</span>,
    },
    {
        accessorKey: "documentation",
        header: "Documentation",
        cell: ({ row }) => <span>{row.getValue("documentation") || "-"}</span>,
    },
    {
        accessorKey: "supervisor",
        header: "Supervisor",
        cell: ({ row }) => <span>{row.getValue("supervisor")}</span>,
    },
    {
        accessorKey: "project",
        header: "Project",
        cell: ({ row }) => <span>{row.getValue("project") || "-"}</span>,
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
        header: "",
        cell: ({ row }) => <span>{row.getValue("name")}</span>,
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