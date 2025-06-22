'use client'
import { jobColumns, Job, candidateColumns, Candidate, onboardingColumns, Onboarding } from "./columns"
import { DataTable } from "./data-table"

function getJobData(): Job[] {
    // Fetch data from your API here.
    return [
{
        "id": "65d80eed-2cab-4a3c-9fa6-f0520168fdff",
        "position": "Operations Manager",
        "positionLeft": 1,
        "applicants": 8,
        "interviewed": 2,
        "rejected": 3,
        "feedbackPending": 1,
        "offered": 1,
        "description": "Oversee daily operations and process improvements.",
        "requirements": [
          "Bachelor's degree in Business or related field.",
          "Experience in operations management."
        ],
        "responsabilities": [
          "Manage daily business operations.",
          "Optimize processes for efficiency.",
          "Coordinate with different departments.",
          "Monitor KPIs and performance.",
          "Implement operational policies."
        ],
        "applicationDeadline": "2024-09-05T02:00:00.000Z",
        "applicationLink": "https://example.com/apply/operations-manager",
        "status": "open",
        "createdAt": "2025-06-21T12:12:37.799Z",
        "updatedAt": "2025-06-21T12:12:37.799Z",
        "user": null
      },
      {
        "id": "16c9e9b1-bd86-4121-9124-21300e62259a",
        "position": "IT Support Specialist",
        "positionLeft": 2,
        "applicants": 15,
        "interviewed": 4,
        "rejected": 7,
        "feedbackPending": 1,
        "offered": 0,
        "description": "Provide technical support to internal teams.",
        "requirements": [
          "Bachelor's degree in IT or related field.",
          "Experience with troubleshooting hardware and software."
        ],
        "responsabilities": [
          "Respond to IT support requests.",
          "Install and configure software.",
          "Troubleshoot hardware issues.",
          "Maintain IT inventory.",
          "Document support activities."
        ],
        "applicationDeadline": "2024-07-20T02:00:00.000Z",
        "applicationLink": "https://example.com/apply/it-support-specialist",
        "status": "open",
        "createdAt": "2025-06-21T12:12:37.090Z",
        "updatedAt": "2025-06-21T12:12:37.090Z",
        "user": null
      },
      {
        "id": "75cb8c1e-e69a-4683-8453-6808e257395c",
        "position": "Graphic Designer",
        "positionLeft": 2,
        "applicants": 19,
        "interviewed": 5,
        "rejected": 9,
        "feedbackPending": 2,
        "offered": 1,
        "description": "Create visual content for digital and print media.",
        "requirements": [
          "Bachelor's degree in Graphic Design or related field.",
          "Proficiency with Adobe Creative Suite."
        ],
        "responsabilities": [
          "Design graphics for marketing materials.",
          "Develop branding assets.",
          "Collaborate with marketing and product teams.",
          "Prepare files for print and web.",
          "Stay updated with design trends."
        ],
        "applicationDeadline": "2024-08-10T02:00:00.000Z",
        "applicationLink": "https://example.com/apply/graphic-designer",
        "status": "open",
        "createdAt": "2025-06-21T12:12:36.371Z",
        "updatedAt": "2025-06-21T12:12:36.371Z",
        "user": null
      },
      {
        "id": "2d9e2cf0-ce83-4f9e-aa46-5966db2ea099",
        "position": "Business Analyst",
        "positionLeft": 1,
        "applicants": 13,
        "interviewed": 3,
        "rejected": 6,
        "feedbackPending": 1,
        "offered": 0,
        "description": "Analyze business processes and recommend improvements.",
        "requirements": [
          "Bachelor's degree in Business or related field.",
          "Strong analytical skills."
        ],
        "responsabilities": [
          "Gather and document business requirements.",
          "Analyze processes and workflows.",
          "Identify areas for improvement.",
          "Collaborate with stakeholders.",
          "Support project implementation."
        ],
        "applicationDeadline": "2024-11-10T02:00:00.000Z",
        "applicationLink": "https://example.com/apply/business-analyst",
        "status": "open",
        "createdAt": "2025-06-21T12:12:35.652Z",
        "updatedAt": "2025-06-21T12:12:35.652Z",
        "user": null
      }
    ]
}
function getCandidateData(): Candidate[] {
    // Fetch data from your API here.
    return [
        {
            "id": "1e86fa65-afb9-42e2-b0bd-96c5c7e4f57d",
            "names": "Noah Ramirez",
            "gender": "male",
            "email": "noah.ramirez@example.com",
            "phoneNumber": "+12015550118",
            "title": "Support Engineer",
            "linkedinURL": "https://linkedin.com/in/noahramirez",
            "profileURL": "https://example.com/profiles/noahramirez",
            "tranings": "06/10",
            "documentation": "04/8",
            "supervisor": "Victoria Clark",
            "project": "Customer Support Portal",
            "educations": [
                {
                    "degree": "BSc Information Systems",
                    "institution": "IT College",
                    "year": 2016
                }
            ],
            "experiences": [
                {
                    "company": "HelpDeskPro",
                    "role": "Support Engineer",
                    "duration": "Dec 2016 - Present",
                    "responsibilities": [
                        "Resolving customer issues",
                        "Documenting solutions",
                        "Improving support processes",
                        "Training new staff"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:58.868Z",
            "updatedAt": "2025-06-22T20:00:58.868Z"
        },
        {
            "id": "5190b221-3ea4-4d44-b4aa-3ffe421ad4e6",
            "names": "Ava Perez",
            "gender": "female",
            "email": "ava.perez@example.com",
            "phoneNumber": "+12015550117",
            "title": "Project Coordinator",
            "linkedinURL": "https://linkedin.com/in/avaperez",
            "profileURL": "https://example.com/profiles/avaperez",
            "tranings": "07/10",
            "documentation": "05/8",
            "supervisor": "Logan Scott",
            "project": "ERP Implementation",
            "educations": [
                {
                    "degree": "BA Management",
                    "institution": "Management Institute",
                    "year": 2013
                }
            ],
            "experiences": [
                {
                    "company": "ProjSync",
                    "role": "Project Coordinator",
                    "duration": "Oct 2013 - Present",
                    "responsibilities": [
                        "Coordinating project tasks",
                        "Tracking milestones",
                        "Reporting progress",
                        "Supporting project managers"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:58.080Z",
            "updatedAt": "2025-06-22T20:00:58.080Z"
        },
        {
            "id": "1243e894-36b0-4a8d-934f-b562705a79a4",
            "names": "William Young",
            "gender": "male",
            "email": "william.young@example.com",
            "phoneNumber": "+12015550116",
            "title": "Database Administrator",
            "linkedinURL": "https://linkedin.com/in/williamyoung",
            "profileURL": "https://example.com/profiles/williamyoung",
            "tranings": "08/10",
            "documentation": "06/8",
            "supervisor": "Samantha Lee",
            "project": "Database Migration",
            "educations": [
                {
                    "degree": "BSc Computer Science",
                    "institution": "Tech University",
                    "year": 2009
                }
            ],
            "experiences": [
                {
                    "company": "DataManage",
                    "role": "Database Administrator",
                    "duration": "May 2009 - Present",
                    "responsibilities": [
                        "Managing databases",
                        "Optimizing queries",
                        "Ensuring data integrity",
                        "Backup and recovery"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:57.293Z",
            "updatedAt": "2025-06-22T20:00:57.293Z"
        },
        {
            "id": "ad789eb5-723c-4be1-8e62-496a7eccd0b6",
            "names": "Ella Robinson",
            "gender": "female",
            "email": "ella.robinson@example.com",
            "phoneNumber": "+12015550115",
            "title": "Technical Writer",
            "linkedinURL": "https://linkedin.com/in/ellarobinson",
            "profileURL": "https://example.com/profiles/ellarobinson",
            "tranings": "06/10",
            "documentation": "04/8",
            "supervisor": "Matthew King",
            "project": "Documentation Overhaul",
            "educations": [
                {
                    "degree": "BA English",
                    "institution": "Literature College",
                    "year": 2010
                }
            ],
            "experiences": [
                {
                    "company": "DocuTech",
                    "role": "Technical Writer",
                    "duration": "Jan 2011 - Present",
                    "responsibilities": [
                        "Writing technical documents",
                        "Creating user manuals",
                        "Editing content",
                        "Collaborating with engineers"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:56.505Z",
            "updatedAt": "2025-06-22T20:00:56.505Z"
        }
    ]
}

function getOnboardingData(): Onboarding[] {
    // Fetch data from your API here.
    return [
        {
            id: 1,
            name: "Alice Johnson",
            title: "Frontend Developer",
            AppliedOn: "2024-01-15",
            interviewRound: "Final",
            assignedTo: "John Doe",
            score: 85
        },
        {
            id: 2,
            name: "Bob Smith",
            title: "Backend Developer",
            AppliedOn: "2024-02-20",
            interviewRound: "Technical",
            assignedTo: "Jane Doe",
            score: 90
        },
        {
            id: 3,
            name: "Carol Lee",
            title: "Data Analyst",
            AppliedOn: "2024-03-10",
            interviewRound: "HR",
            assignedTo: "Mike Brown",
            score: 88
        }
    ]
}

export default function JobTable() {
    const data = getJobData()
    return (
        <div className="container mx-auto">
            <DataTable columns={jobColumns} data={data} />
        </div>
    )
}

export function CandidateTable() {
    const data = getCandidateData()
    return (
        <div className="container mx-auto">
            <DataTable columns={candidateColumns} data={data} />
        </div>
    )
}

export function OnboardingTable() {
    const data = getOnboardingData()
    return (
        <div className="container mx-auto">
            <DataTable columns={onboardingColumns} data={data} />
        </div>
    )
}