import { Candidate } from '@/lib/types'
export function getCandidateData(): Candidate[] {
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
            "supervisor": null,
            "project": null,
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
            "supervisor": null,
            "project": null,
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
            "project": null,
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
        },
        {
            "id": "b2e1f8a3-6d4a-4e8d-9c2b-2f7e5e8a1b2c",
            "names": "Mia Thompson",
            "gender": "female",
            "email": "mia.thompson@example.com",
            "phoneNumber": "+12015550114",
            "title": "QA Analyst",
            "linkedinURL": "https://linkedin.com/in/miathompson",
            "profileURL": "https://example.com/profiles/miathompson",
            "tranings": "09/10",
            "documentation": "07/8",
            "supervisor": "Olivia Clark",
            "project": "QA Automation",
            "educations": [
                {
                    "degree": "BSc Software Engineering",
                    "institution": "Engineering College",
                    "year": 2015
                }
            ],
            "experiences": [
                {
                    "company": "QualitySoft",
                    "role": "QA Analyst",
                    "duration": "Jul 2015 - Present",
                    "responsibilities": [
                        "Testing software releases",
                        "Writing test cases",
                        "Automating regression tests",
                        "Reporting bugs"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:55.717Z",
            "updatedAt": "2025-06-22T20:00:55.717Z"
        },
        {
            "id": "c3f2e9b4-7e5b-4f9e-8d3c-3f8e6f9b2c3d",
            "names": "James Smith",
            "gender": "male",
            "email": "james.smith@example.com",
            "phoneNumber": "+12015550113",
            "title": "Frontend Developer",
            "linkedinURL": "https://linkedin.com/in/jamessmith",
            "profileURL": "https://example.com/profiles/jamessmith",
            "tranings": "10/10",
            "documentation": "08/8",
            "supervisor": "Lucas Turner",
            "project": "UI Revamp",
            "educations": [
                {
                    "degree": "BSc Computer Science",
                    "institution": "Tech Institute",
                    "year": 2012
                }
            ],
            "experiences": [
                {
                    "company": "WebWorks",
                    "role": "Frontend Developer",
                    "duration": "Sep 2012 - Present",
                    "responsibilities": [
                        "Developing UI components",
                        "Optimizing web performance",
                        "Collaborating with designers",
                        "Maintaining codebase"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:54.929Z",
            "updatedAt": "2025-06-22T20:00:54.929Z"
        },
        {
            "id": "d4g3h0c5-8f6c-5g0f-9e4d-4g9f7g0c3d4e",
            "names": "Sophia Martinez",
            "gender": "female",
            "email": "sophia.martinez@example.com",
            "phoneNumber": "+12015550112",
            "title": "Backend Developer",
            "linkedinURL": "https://linkedin.com/in/sophiamartinez",
            "profileURL": "https://example.com/profiles/sophiamartinez",
            "tranings": "08/10",
            "documentation": "06/8",
            "supervisor": "David Harris",
            "project": "API Development",
            "educations": [
                {
                    "degree": "MSc Computer Science",
                    "institution": "University of Computing",
                    "year": 2018
                }
            ],
            "experiences": [
                {
                    "company": "ServerLogic",
                    "role": "Backend Developer",
                    "duration": "Aug 2018 - Present",
                    "responsibilities": [
                        "Building REST APIs",
                        "Database design",
                        "Performance tuning",
                        "Integrating third-party services"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:54.141Z",
            "updatedAt": "2025-06-22T20:00:54.141Z"
        },
        {
            "id": "e5h4i1d6-9g7d-6h1g-0f5e-5h0g8h1d4e5f",
            "names": "Benjamin Lee",
            "gender": "male",
            "email": "benjamin.lee@example.com",
            "phoneNumber": "+12015550111",
            "title": "DevOps Engineer",
            "linkedinURL": "https://linkedin.com/in/benjaminlee",
            "profileURL": "https://example.com/profiles/benjaminlee",
            "tranings": "07/10",
            "documentation": "05/8",
            "supervisor": "Grace Kim",
            "project": "CI/CD Pipeline",
            "educations": [
                {
                    "degree": "BSc Information Technology",
                    "institution": "IT University",
                    "year": 2014
                }
            ],
            "experiences": [
                {
                    "company": "CloudOps",
                    "role": "DevOps Engineer",
                    "duration": "Mar 2014 - Present",
                    "responsibilities": [
                        "Managing cloud infrastructure",
                        "Automating deployments",
                        "Monitoring systems",
                        "Ensuring uptime"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:53.353Z",
            "updatedAt": "2025-06-22T20:00:53.353Z"
        },
        {
            "id": "f6i5j2e7-0h8e-7i2h-1g6f-6i1h9i2e5f6g",
            "names": "Charlotte Walker",
            "gender": "female",
            "email": "charlotte.walker@example.com",
            "phoneNumber": "+12015550110",
            "title": "UI/UX Designer",
            "linkedinURL": "https://linkedin.com/in/charlottewalker",
            "profileURL": "https://example.com/profiles/charlottewalker",
            "tranings": "09/10",
            "documentation": "07/8",
            "supervisor": "Henry Adams",
            "project": "Design System",
            "educations": [
                {
                    "degree": "BA Graphic Design",
                    "institution": "Design Academy",
                    "year": 2011
                }
            ],
            "experiences": [
                {
                    "company": "CreativeStudio",
                    "role": "UI/UX Designer",
                    "duration": "Feb 2011 - Present",
                    "responsibilities": [
                        "Designing user interfaces",
                        "Conducting user research",
                        "Prototyping",
                        "Improving user experience"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:52.565Z",
            "updatedAt": "2025-06-22T20:00:52.565Z"
        },
        {
            "id": "g7j6k3f8-1i9f-8j3i-2h7g-7j2i0j3f6g7h",
            "names": "Daniel Harris",
            "gender": "male",
            "email": "daniel.harris@example.com",
            "phoneNumber": "+12015550109",
            "title": "Product Manager",
            "linkedinURL": "https://linkedin.com/in/danielharris",
            "profileURL": "https://example.com/profiles/danielharris",
            "tranings": "08/10",
            "documentation": "06/8",
            "supervisor": "Emily Scott",
            "project": "Product Launch",
            "educations": [
                {
                    "degree": "MBA",
                    "institution": "Business School",
                    "year": 2017
                }
            ],
            "experiences": [
                {
                    "company": "ProdManage",
                    "role": "Product Manager",
                    "duration": "Apr 2017 - Present",
                    "responsibilities": [
                        "Defining product vision",
                        "Coordinating teams",
                        "Gathering requirements",
                        "Launching products"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:51.777Z",
            "updatedAt": "2025-06-22T20:00:51.777Z"
        },
        {
            "id": "h8k7l4g9-2j0g-9k4j-3i8h-8k3j1k4g7h8i",
            "names": "Amelia Clark",
            "gender": "female",
            "email": "amelia.clark@example.com",
            "phoneNumber": "+12015550108",
            "title": "Business Analyst",
            "linkedinURL": "https://linkedin.com/in/ameliaclark",
            "profileURL": "https://example.com/profiles/ameliaclark",
            "tranings": "07/10",
            "documentation": "05/8",
            "supervisor": "Michael Brown",
            "project": "Market Analysis",
            "educations": [
                {
                    "degree": "BSc Economics",
                    "institution": "Economics University",
                    "year": 2013
                }
            ],
            "experiences": [
                {
                    "company": "BizInsights",
                    "role": "Business Analyst",
                    "duration": "Jun 2013 - Present",
                    "responsibilities": [
                        "Analyzing business processes",
                        "Identifying improvements",
                        "Reporting findings",
                        "Supporting decision making"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:50.989Z",
            "updatedAt": "2025-06-22T20:00:50.989Z"
        },
        {
            "id": "i9l8m5h0-3k1h-0l5k-4j9i-9l4k2l5h8i9j",
            "names": "Alexander White",
            "gender": "male",
            "email": "alexander.white@example.com",
            "phoneNumber": "+12015550107",
            "title": "Full Stack Developer",
            "linkedinURL": "https://linkedin.com/in/alexanderwhite",
            "profileURL": "https://example.com/profiles/alexanderwhite",
            "tranings": "10/10",
            "documentation": "08/8",
            "supervisor": "Natalie Evans",
            "project": "Platform Upgrade",
            "educations": [
                {
                    "degree": "BSc Software Engineering",
                    "institution": "Engineering Institute",
                    "year": 2016
                }
            ],
            "experiences": [
                {
                    "company": "StackBuild",
                    "role": "Full Stack Developer",
                    "duration": "Nov 2016 - Present",
                    "responsibilities": [
                        "Developing frontend and backend",
                        "Integrating APIs",
                        "Testing applications",
                        "Deploying releases"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:50.201Z",
            "updatedAt": "2025-06-22T20:00:50.201Z"
        },
        {
            "id": "j0m9n6i1-4l2i-1m6l-5k0j-0m5l3m6i9j0k",
            "names": "Harper Lewis",
            "gender": "female",
            "email": "harper.lewis@example.com",
            "phoneNumber": "+12015550106",
            "title": "Scrum Master",
            "linkedinURL": "https://linkedin.com/in/harperlewis",
            "profileURL": "https://example.com/profiles/harperlewis",
            "tranings": "09/10",
            "documentation": "07/8",
            "supervisor": "Ryan Hall",
            "project": "Agile Transformation",
            "educations": [
                {
                    "degree": "BSc Project Management",
                    "institution": "Project School",
                    "year": 2012
                }
            ],
            "experiences": [
                {
                    "company": "AgileWorks",
                    "role": "Scrum Master",
                    "duration": "Jan 2012 - Present",
                    "responsibilities": [
                        "Facilitating scrum ceremonies",
                        "Removing impediments",
                        "Coaching teams",
                        "Tracking progress"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:49.413Z",
            "updatedAt": "2025-06-22T20:00:49.413Z"
        },
        {
            "id": "k1n0o7j2-5m3j-2n7m-6l1k-1n6m4n7j0k1l",
            "names": "Jack Wilson",
            "gender": "male",
            "email": "jack.wilson@example.com",
            "phoneNumber": "+12015550105",
            "title": "System Administrator",
            "linkedinURL": "https://linkedin.com/in/jackwilson",
            "profileURL": "https://example.com/profiles/jackwilson",
            "tranings": "08/10",
            "documentation": "06/8",
            "supervisor": "Sophia Green",
            "project": "Infrastructure Upgrade",
            "educations": [
                {
                    "degree": "BSc Network Engineering",
                    "institution": "Network College",
                    "year": 2010
                }
            ],
            "experiences": [
                {
                    "company": "SysAdminPro",
                    "role": "System Administrator",
                    "duration": "May 2010 - Present",
                    "responsibilities": [
                        "Maintaining servers",
                        "Configuring networks",
                        "Ensuring security",
                        "Troubleshooting issues"
                    ]
                }
            ],
            "createdAt": "2025-06-22T20:00:48.625Z",
            "updatedAt": "2025-06-22T20:00:48.625Z"
        }
    ]
}
