export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export const education = [{
  degree: "Master of Science (MS), Computer Science",
  school: "University of Illinois Urbana-Champaign",
  location: "Champaign, Illinois, United States",
  startDate: "January 2024",
  endDate: "May 2025",
  gpa: "4.0",
  logo: "/icons/uiuc.png",
  honors: [
  ],
  activities: [
    { name: "Graduate Research Assistant" },
    { name: "Member of Association for Computing Machinery (ACM)" },
    { name: "Member of Society of Women Engineers (SWE)" },
  ],
},{
  degree: "Bachelor of Science (BS), Computer Science",
  school: "Mahindra University",
  location: "Hyderabad, India",
  startDate: "July 2019",
  endDate: "May 2023",
  gpa: "3.95",
  logo: "/icons/mec.png",
  honors: [
    { name: "Dean's List" },
    { name: "Departmental honors" },
    { name: "Class Rank: 2nd" },
  ],
  activities: [
    { name: "President of Alumni Association" },
    { name: "Vice President of Outreach Club" },
    { name: "Undergraduate Research Assistant" },
  ],
}];
