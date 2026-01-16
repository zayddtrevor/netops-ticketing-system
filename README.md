# netops-ticketing-system
A full-stack IT service desk and ticket management system.

NetOps | IT Service Desk & Ticket Management System

A centralized platform designed to streamline internal technical support and incident management for network service providers. This project demonstrates full-stack development capabilities combined with a rigorous approach to Quality Assurance.

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

## 🧪 Quality Assurance (QA) Focus
To ensure system reliability, I performed the following manual test cases:
1. **Functional Testing**: Verified that status updates in the UI correctly reflect changes in the MySQL database.
2. **Form Validation**: Ensured tickets cannot be submitted without a customer name or issue type.
3. **UI/UX Verification**: Confirmed that tickets are color-coded by status (Red/Green) for quick agent identification.
4. **API Testing**: Validated that the backend properly handles 404 and 500 errors during database downtime.

## 📦 Installation
1. Clone the repo: `git clone https://github.com/zayddtrevor/netops-ticketing-system.git`
2. **Setup Backend**: `cd backend && npm install && node index.js`
3. **Setup Frontend**: `cd frontend && npm install && npm run dev`
