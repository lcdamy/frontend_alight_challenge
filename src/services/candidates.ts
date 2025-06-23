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
        }
    ]
}
