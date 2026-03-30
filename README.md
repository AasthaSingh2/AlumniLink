# AlumniLink - Alumni Data Management System

A comprehensive Next.js application for managing alumni connections, mentorship programs, job postings, and events.

## 🚀 Features

### Landing Page
- Clean, professional design with institution branding
- Three main login options: Student, Alumni, Admin
- Feature showcase: Find Alumni, Mentorship, Opportunities

### Student Dashboard
- Full navigation with Events, Directory, Jobs, Mentorship, Donations
- Quick action cards for key features
- Alumni spotlight and upcoming events
- Donation progress tracking

### Alumni Dashboard
- Profile management
- Job posting capabilities
- Mentorship offering
- Event participation

### Admin Dashboard
- User management and approvals
- Event management
- Job posting moderation
- Analytics and reporting

### Job & Internship Portal
- Alumni can post job opportunities
- Students can browse and apply
- Advanced filtering by location, type, company
- Real-time job listings

### Mentorship System
- AI-powered mentor matching
- Mentorship request management
- Progress tracking

## 🛠️ Tech Stack

- **Framework**: Next.js 14.0.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts
- **AI Integration**: Google Genkit (mocked for development)

## 🚀 Getting Started

### Prerequisites
- Node.js (v22.19.0 or higher)
- npm (v10.9.3 or higher)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/AasthaSingh2/AlumniLink.git
cd AlumniLink
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Landing page
│   ├── student-dashboard/ # Student portal
│   ├── alumni-dashboard/  # Alumni portal
│   ├── admin-dashboard/   # Admin portal
│   ├── jobs/              # Job portal
│   ├── events/            # Events page
│   ├── mentorship/        # Mentorship system
│   └── directory/         # Alumni directory
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
└── ai/                   # AI integration (Genkit)
```

## 🎯 Key Pages

- **Landing Page** (`/`) - Welcome page with login options
- **Student Dashboard** (`/student-dashboard`) - Student portal with navigation
- **Alumni Dashboard** (`/alumni-dashboard`) - Alumni management
- **Admin Dashboard** (`/admin-dashboard`) - Administrative controls
- **Jobs Portal** (`/jobs`) - Job postings and applications
- **Events** (`/events`) - Event listings and management
- **Mentorship** (`/mentorship`) - Mentorship matching system
- **Directory** (`/directory`) - Alumni directory

## 🔧 Configuration

The application uses:
- **Tailwind CSS** for styling
- **shadcn/ui** for component library
- **Next.js Image Optimization** for performance
- **TypeScript** for type safety

## 📝 Development Notes

- AI features are currently mocked for development
- All data is using placeholder/mock data
- Ready for backend integration
- Responsive design for all screen sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request



**AlumniLink** - Connecting alumni for mentorship, opportunities, and community.




