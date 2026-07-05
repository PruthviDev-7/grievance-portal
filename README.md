# Citizen Grievance Portal

A full-stack web application that helps citizens register grievances, track complaint status, and enables officials to monitor and resolve cases through a dedicated dashboard.

Live Demo: [https://jansevaa.netlify.app/](https://jansevaa.netlify.app/)

## Key Features

- Citizen login and registration flow
- Complaint submission with category, priority, and location details
- Real-time complaint tracking (`Pending`, `In Progress`, `Resolved`)
- Official dashboard for complaint management and updates
- Statistics endpoints for dashboard analytics

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose

## Project Structure

```text
grievance-portal/
|-- index.html
|-- dashboard.html
|-- official-dashboard.html
|-- public/
|   |-- css/
|   |   `-- style.css
|   `-- js/
|       |-- script.js
|       `-- official-dashboard.js
|-- src/
|   `-- server.js
`-- README.md
```

## Prerequisites

- Node.js 18+ (recommended)
- npm 9+
- MongoDB connection (local or cloud)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/grievance-portal.git
cd grievance-portal
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables (recommended):

```bash
# Windows PowerShell
$env:MONGODB_URI="your-mongodb-connection-string"

# macOS/Linux
export MONGODB_URI="your-mongodb-connection-string"
```

4. Start the application:

```bash
npm start
```

The app runs on `http://localhost:3000` by default.

## Available Scripts

- `npm start` - Starts the production server from `src/server.js`
- `npm run dev` - Starts the server in development mode with `nodemon`

## API Overview

- `POST /api/login` - Authenticate user
- `POST /api/register` - Register a new citizen
- `GET /api/complaints/:userId` - Fetch complaints for a user (or all)
- `POST /api/complaints` - Create a complaint
- `PUT /api/complaints/:id` - Update complaint details/status
- `GET /api/stats/:userId` - Get user-specific stats
- `GET /api/stats/all` - Get global complaint stats

## Screenshots

Add screenshots to show the UI and workflows. Recommended: create a folder such as `docs/screenshots/` and store all images there.

```md
![Home Page]<img width="960" height="600" alt="{EB51167C-C204-4952-AE5A-8EE7B29C149D}" src="https://github.com/user-attachments/assets/6e85f2c5-211d-4e66-82d3-11c29231e595" />

![Citizen Dashboard]<img width="953" height="540" alt="{DC2F7879-6C16-4D4F-84AC-2E8650254131}" src="https://github.com/user-attachments/assets/d3e3bee5-0d9b-4e42-b9cf-b943f37a8b8c" />

![Complaint Submission]<img width="960" height="571" alt="{A18D263F-A695-468D-939D-4031447F4587}" src="https://github.com/user-attachments/assets/a57a2b4e-dda7-4fc7-8d0b-2695ead31e86" />

![Official Dashboard]<img width="960" height="571" alt="{42351E27-F003-4136-B0D8-E790EE0E2FAF}" src="https://github.com/user-attachments/assets/78f01a5a-4f8d-4775-ad3b-a7ec5c341e74" />

```

## Notes

- Default seed users are created when the database is empty.
- For production use, move all secrets and credentials to environment variables.

## License

This project is licensed under the ISC License.

