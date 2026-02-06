# netops-ticketing-system
A full-stack IT service desk and ticket management system.

## 🚀 Key Features
* **Agent Dashboard**: A real-time interface for support agents to monitor and manage technical tickets.
* **Ticket Lifecycle Management**: Custom REST API to track issues from "Pending" to "Resolved" status.
* **ISP-Focused Design**: Categorization for common network issues like "No Connection," "Slow Speed," and "Hardware Faults."
* **Data Integrity**: MySQL-backed persistence to ensure all customer incident logs are accurately stored.

## 🛠️ Tech Stack
* **Frontend**: React.js (Vite)
* **Backend**: Node.js & Express.js
* **Database**: MySQL
* **Version Control**: Git & GitHub

## 📦 Installation
1. Clone the repo: `git clone https://github.com/zayddtrevor/netops-ticketing-system.git`
2. **Setup Backend**: `cd backend && npm install && node server.js`
3. **Setup Frontend**: `cd frontend && npm install && npm run dev`

## 🚀 Deployment
### Vercel (Frontend)
When deploying the frontend to Vercel, ensure you configure the **Root Directory** to `frontend`.
1. Import the project in Vercel.
2. In the "Build & Development Settings", set the **Root Directory** to `frontend`.
3. Select **Vite** as the framework preset if not automatically detected.
4. Deploy!

*Note: If you see a 404 error, it is likely because the Root Directory is set to the repository root instead of `frontend`.*
