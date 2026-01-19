# Citizen Grievance Portal

A web application for citizens to file and track complaints/grievances with the government.

## Features
- Citizen login with Aadhaar/ID Number
- Submit new complaints
- Track complaint status
- Dashboard with statistics (Total, Pending, Resolved)
- Different user roles (Citizen, Official)

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Installation

1. Clone this repository:
```bash
git clone https://github.com/YOUR_USERNAME/grievance-portal.git
cd grievance-portal
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on localhost:27017

4. Start the server:
```bash
npm start
```

5. Open your browser and go to: **http://localhost:3000**

## Usage
- Login with your ID number and password
- Submit new complaints through the dashboard
- View all your complaints and their status

## Project Structure
```
grievance-portal/
├── public/           # Frontend files
│   ├── index.html    # Login page
│   ├── dashboard.html # Citizen dashboard
│   ├── script.js     # Frontend logic
│   └── style.css     # Styling
├── models/           # Database schemas
│   └── Schemas.js    # User and Complaint models
├── server.js         # Express server
└── package.json      # Dependencies
```

## Default API Endpoints
- `POST /api/login` - User login
- `GET /api/complaints/:userId` - Get user's complaints
- `POST /api/complaints` - Submit new complaint
- `GET /api/stats/:userId` - Get statistics

## Future Improvements
- Add JWT authentication
- Official dashboard to view and update complaints
- Email notifications
- File upload for complaint attachments
- Admin panel

## License
MIT
