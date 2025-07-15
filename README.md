# HR Dashboard

A minimal yet advanced HR performance dashboard built using Next.js App Router, Tailwind CSS, Zustand, and Chart.js. This project allows HR managers to track employee performance, manage bookmarks, view analytics, and maintain user data.

---

## Features

### Core Functionality

- **Dashboard Homepage (`/`)**
  - Fetches 20 users from `https://dummyjson.com/users?limit=20`
  - Displays user cards with:
    - Name, Email, Age, Department (mocked), Rating (1–5 stars)
    - Action buttons: View, Bookmark, Promote

- **Search and Filter**
  - Search users by name, email, or department
  - Multi-select filter chips for department and rating

- **User Detail Page (`/employee/[id]`)**
  - Shows detailed user information:
    - Address, phone number, mock bio, and performance history
  - Tabbed UI: Overview, Projects, Feedback

- **Bookmarks Page (`/bookmarks`)**
  - View all bookmarked users
  - Actions for each user: Promote, Remove

- **Analytics Page (`/analytics`)**
  - Department-wise average rating chart
  - Bookmark trends (mocked data using Chart.js)

---

## Advanced Implementation

- Zustand for global state management (bookmarks and users)
- Custom hooks (`useBookmarks`, `useSearch`)
- Component-level loading and error states
- Dark and light theme support using Tailwind CSS
- Modular structure with `components/`, `hooks/`, `store/`, and `app/`

---

## Bonus Features

- Create User modal with form validation

## Tech Stack

- Next.js (App Router)
- Tailwind CSS
- Zustand
- Chart.js
- TypeScript
- NextAuth.js (optional for authentication)

---

## Getting Started

### Installation

1. Clone the repository
```bash
git clone https://github.com/Chirag-Matta/hr-dashboard.git
cd hr-dashboard
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and go to:
```
http://localhost:3000
```

---

## Acknowledgments

- [DummyJSON](https://dummyjson.com/) for providing mock user data
- [Chart.js](https://www.chartjs.org/) for analytics visualization
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Zustand](https://zustand-demo.pmnd.rs/) for state management
