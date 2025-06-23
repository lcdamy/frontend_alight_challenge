export const cardList = [
  {
    title: "Interview scheduled",
    count: 12,
    imageSrc: "/Illustrations-1.png",
    status: "pending"
  },
  {
    title: "Interview Feedback",
    count: 52,
    imageSrc: "/Illustrations-2.png",
    status: "pending"
  },
  {
    title: "Approval",
    count: 33,
    imageSrc: "/Illustrations-3.png",
    status: "pending"
  },
  {
    title: "Offer Acceptance",
    count: 23,
    imageSrc: "/Illustrations-4.png",
    status: "pending"
  },
  {
    title: "Documenations",
    count: 10,
    imageSrc: "/Illustrations-5.png",
    status: "pending"
  },
  {
    title: "Training",
    count: 40,
    imageSrc: "/Illustrations-6.png",
    status: "completed"
  },
  {
    title: "Supervisor Allocation",
    count: 21,
    imageSrc: "/Illustrations-7.png",
    status: "pending"
  },
  {
    title: "Project Allocation",
    count: 10,
    imageSrc: "/Illustrations-8.png",
    status: "pending"
  }
];

export const Meetings = {
  "today": [
    {
      "id": 1,
      "topic": "Interview",
      "candidate_name": "Mini Samantha",
      "position": "Software Engineer",
      "phase": "4th Round",
      "time": "10:00",
      "duration": "10:00 - 11:00",
      "status": "passed"
    },
    {
      "id": 2,
      "topic": "Interview",
      "candidate_name": "John Doe",
      "position": "Data Scientist",
      "phase": "3rd Round",
      "time": "11:00",
      "duration": "11:00 - 12:00",
      "status": "scheduled"
    },
    {
      "id": 3,
      "topic": "Interview",
      "candidate_name": "Alice Smith",
      "position": "Product Manager",
      "phase": "2nd Round",
      "time": "1:00",
      "duration": "1:00 - 2:00",
      "status": "scheduled"
    },
    {
      "id": 4,
      "topic": "Interview",
      "candidate_name": "Bob Johnson",
      "position": "UX Designer",
      "phase": "1st Round",
      "time": "3:00",
      "duration": "3:00 - 4:00",
      "status": "scheduled"
    }
  ],
  "Tomorrow": [
    {
      "id": 5,
      "topic": "Interview",
      "candidate_name": "Charlie Brown",
      "position": "DevOps Engineer",
      "phase": "Final Round",
      "time": "10:00",
      "duration": "10:00 - 11:00",
      "status": "scheduled"
    },
    {
      "id": 6,
      "topic": "Interview",
      "candidate_name": "Diana Prince",
      "position": "Marketing Specialist",
      "phase": "3rd Round",
      "time": "11:00",
      "duration": "11:00 - 12:00",
      "status": "passed"
    },
    {
      "id": 7,
      "topic": "Interview",
      "candidate_name": "Ethan Hunt",
      "position": "Systems Analyst",
      "phase": "2nd Round",
      "time": "1:00",
      "duration": "1:00 - 2:00",
      "status": "scheduled"
    },
    {
      "id": 8,
      "topic": "Interview",
      "candidate_name": "Fiona Gallagher",
      "position": "HR Manager",
      "phase": "1st Round",
      "time": "3:00",
      "duration": "3:00 - 4:00",
      "status": "scheduled"
    }
  ],
  "week": [
    {
      "id": 9,
      "topic": "Interview",
      "candidate_name": "George Costanza",
      "position": "Software Tester",
      "phase": "Final Round",
      "time": "10:00",
      "duration": "10:00 - 11:00",
      "status": "scheduled"
    },
    {
      "id": 10,
      "topic": "Interview",
      "candidate_name": "Hannah Baker",
      "position": "Content Writer",
      "phase": "3rd Round",
      "time": "Sep 3",
      "duration": "11:00 - 12:00",
      "status": "passed"
    },
    {
      "id": 11,
      "topic": "Interview",
      "candidate_name": "Ian Malcolm",
      "position": "Data Analyst",
      "phase": "2nd Round",
      "time": "Sep 4",
      "duration": "1:00 - 2:00",
      "status": "scheduled"
    },
    {
      "id": 12,
      "topic": "Interview",
      "candidate_name": "Julia Roberts",
      "position": "Graphic Designer",
      "phase": "1st Round",
      "time": "Sep 5",
      "duration": "3:00 - 4:00",
      "status": "scheduled"
    },
    {
      "id": 13,
      "topic": "Interview",
      "candidate_name": "Kevin Hart",
      "position": "Network Engineer",
      "phase": "Final Round",
      "time": "Sep 6",
      "duration": "10:00 - 11:00",
      "status": "scheduled"
    },
    {
      "id": 14,
      "topic": "Interview",
      "candidate_name": "Laura Croft",
      "position": "Business Analyst",
      "phase": "3rd Round",
      "time": "Sep 7",
      "duration": "11:00 - 12:00",
      "status": "passed"
    },
    {
      "id": 15,
      "topic": "Interview",
      "candidate_name": "Mike Wazowski",
      "position": "Cloud Architect",
      "phase": "2nd Round",
      "time": "Sep 8",
      "duration": "1:00 - 2:00",
      "status": "scheduled"
    },
    {
      "id": 16,
      "topic": "Interview",
      "candidate_name": "Nina Simone",
      "position": "Cybersecurity Analyst",
      "phase": "1st Round",
      "time": "Sep 9",
      "duration": "3:00 - 4:00",
      "status": "scheduled"
    },
    {
      "id": 17,
      "topic": "Interview",
      "candidate_name": "Oscar Wilde",
      "position": "IT Support Specialist",
      "phase": "Final Round",
      "time": "Sep 10",
      "duration": "10:00 - 11:00",
      "status": "scheduled"
    }
  ]
};

export const tabs = [
  {
    title: 'Home',
    url: '/',
    icon: '/side-home-Icon.svg'
  },
  {
    title: 'Jobs',
    url: '/jobs',
    icon: '/side-job-Icon.svg'
  },
  {
    title: 'Candidates',
    url: '/candidates/1',
    icon: '/side-candidate-Icon.svg'
  },
  {
    title: 'Reports',
    url: '/reports',
    icon: '/side-report-Icon.svg'
  },
  {
    title: 'Calendar',
    url: '/calendar',
    icon: '/side-calendar-Icon.svg'
  },
]