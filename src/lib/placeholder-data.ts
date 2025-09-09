export type Alumnus = {
  position: ReactNode;
  image: string | StaticImport;
  id: string;
  name: string;
  avatarUrl: string;
  graduationYear: number;
  major: string;
  jobTitle: string;
  company: string;
  location: string;
  bio: string;
  skills: string[];
  careerJourney: {
    year: number;
    role: string;
    company: string;
  }[];
};

export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  type: 'Webinar' | 'Reunion' | 'Workshop';
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  description: string;
  postedBy: string; // Alumnus name
};

export const alumni: Alumnus[] = [
  {
    id: '1',
    name: 'Jane Doe',
    avatarUrl: 'https://i.pravatar.cc/150?u=jane-doe',
    graduationYear: 2015,
    major: 'Computer Science',
    jobTitle: 'Senior Software Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    bio: 'Passionate about building scalable web applications and mentoring junior developers. In my free time, I enjoy hiking and photography.',
    skills: ['React', 'Node.js', 'GraphQL', 'AWS', 'TypeScript'],
    careerJourney: [
      { year: 2015, role: 'Software Engineer Intern', company: 'Innovate LLC' },
      { year: 2016, role: 'Software Engineer', company: 'Innovate LLC' },
      { year: 2019, role: 'Senior Software Engineer', company: 'TechCorp' },
    ],
  },
  {
    id: '2',
    name: 'John Smith',
    avatarUrl: 'https://i.pravatar.cc/150?u=john-smith',
    graduationYear: 2012,
    major: 'Business Administration',
    jobTitle: 'Product Manager',
    company: 'Solutions Inc.',
    location: 'New York, NY',
    bio: 'Experienced Product Manager with a demonstrated history of working in the information technology and services industry. Skilled in Agile Methodologies, Market Research, and Management.',
    skills: ['Product Management', 'Agile', 'JIRA', 'Market Research', 'Leadership'],
    careerJourney: [
      { year: 2012, role: 'Business Analyst', company: 'Biz Solutions' },
      { year: 2015, role: 'Associate Product Manager', company: 'Solutions Inc.' },
      { year: 2018, role: 'Product Manager', company: 'Solutions Inc.' },
    ],
  },
    {
    id: '3',
    name: 'Emily White',
    avatarUrl: 'https://i.pravatar.cc/150?u=emily-white',
    graduationYear: 2018,
    major: 'Marketing',
    jobTitle: 'Digital Marketing Specialist',
    company: 'Growthify',
    location: 'Chicago, IL',
    bio: 'Driving growth through strategic digital marketing campaigns. Specializing in SEO, SEM, and content marketing.',
    skills: ['SEO', 'Google Analytics', 'Content Marketing', 'Social Media', 'Email Marketing'],
     careerJourney: [
      { year: 2018, role: 'Marketing Intern', company: 'AdVentures' },
      { year: 2019, role: 'Marketing Coordinator', company: 'Growthify' },
      { year: 2021, role: 'Digital Marketing Specialist', company: 'Growthify' },
    ],
  },
  {
    id: '4',
    name: 'Michael Brown',
    avatarUrl: 'https://i.pravatar.cc/150?u=michael-brown',
    graduationYear: 2010,
    major: 'Finance',
    jobTitle: 'Investment Banker',
    company: 'Capital Investments',
    location: 'London, UK',
    bio: 'Focused on M&A and capital raising for technology companies. Always open to connecting with fellow finance professionals.',
    skills: ['Financial Modeling', 'Valuation', 'Mergers & Acquisitions', 'Due Diligence'],
     careerJourney: [
      { year: 2010, role: 'Analyst', company: 'Capital Investments' },
      { year: 2014, role: 'Associate', company: 'Capital Investments' },
      { year: 2018, role: 'Vice President', company: 'Capital Investments' },
    ],
  },
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Tech Alumni Networking Night',
    date: '2024-11-15T18:00:00Z',
    location: 'Virtual Event',
    description: 'Connect with fellow alumni in the tech industry. Share insights, discuss trends, and expand your professional network.',
    imageUrl: 'https://picsum.photos/600/400',
    type: 'Webinar',
  },
  {
    id: '2',
    title: 'Class of 2014: 10-Year Reunion',
    date: '2024-10-25T17:00:00Z',
    location: 'University Grand Hall',
    description: 'Join your classmates for a memorable evening of reminiscing and reconnecting. Dinner and entertainment will be provided.',
    imageUrl: 'https://picsum.photos/600/400',
    type: 'Reunion',
  },
  {
    id: '3',
    title: 'Workshop: AI for Professionals',
    date: '2024-12-05T10:00:00Z',
    location: 'Virtual Event',
    description: 'A hands-on workshop on how to leverage AI tools in your career, led by industry expert and alumnus John Smith.',
    imageUrl: 'https://picsum.photos/600/400',
    type: 'Workshop',
  },
  {
    id: '4',
    title: 'Marketing & Media Mixer',
    date: '2025-01-20T18:30:00Z',
    location: 'The Downtown Lounge',
    description: 'A casual mixer for alumni working in marketing, advertising, and media. Come for the drinks, stay for the conversation.',
    imageUrl: 'https://picsum.photos/600/400',
    type: 'Reunion',
  },
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Remote',
    type: 'Full-time',
    description: 'We are looking for a skilled React developer to join our team. Experience with TypeScript and GraphQL is a plus.',
    postedBy: 'Jane Doe',
  },
  {
    id: '2',
    title: 'Marketing Analytics Intern',
    company: 'Growthify',
    location: 'Chicago, IL',
    type: 'Internship',
    description: 'Assist our marketing team with data analysis, campaign tracking, and reporting. A great opportunity for a recent graduate.',
    postedBy: 'Emily White',
  },
  {
    id: '3',
    title: 'Associate Product Manager',
    company: 'Solutions Inc.',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Work with cross-functional teams to design, build and roll-out products that deliver the company’s vision and strategy.',
    postedBy: 'John Smith',
  },
];

export const donationData = {
  goal: 50000,
  raised: 37500,
  donors: [
    { name: 'Michael Brown', amount: 5000 },
    { name: 'Sarah Lee', amount: 2500 },
    { name: 'David Chen', amount: 1000 },
  ],
};
