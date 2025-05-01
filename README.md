# 🧾 Chat-Based Ticketing System (MERN Stack)

This is a **full-stack chat-based ticketing system** built with the **MERN stack (MongoDB, Express, React, Node.js)**. Customers initiate support chats, and admin/team members manage, assign, and resolve tickets through a customizable dashboard.

---

## 📁 Project Structure

root/ │ ├── backend/ # Node.js + Express + MongoDB API ├── frontend/ # React.js ├── README.md # You're here!

---

## ⚙️ Features

### 🎟️ Ticketing System
- Tickets created when customer submits their first message & fills form
- Tickets auto-assigned to Super Admin (first registered admin)
- Admins can reassign tickets to other admins or team members
- Ticket status: `resolved` / `unresolved`
- Missed chat detection based on configurable inactivity timer

### 💬 Chat System
- Each ticket functions as a chat thread
- Messages from: customer, system
- Initial system messages: welcome, guidance, etc.
- Full conversation history per ticket

### 👥 Role-Based Access
- Roles: `super admin`, `admin`, `member`
- Super Admin: full access, cannot be edited/deleted
- Admins: can manage tickets, users (except super admin)
- Team: can respond to tickets only

### ⚙️ Settings Module
- Customize:
  - `headerColor`, `backgroundColor`
  - `defaultMessages[]`
  - `welcomeMessage`
  - `missedChatTimer` (hours, minutes, seconds)
  - `formPlaceholders`: name, email, phone, message

### 📊 Analytics & Dashboard
- Percentage stats of resolved tickets
- Line chart of missed chats per week
- Average reply time

---

## 🧠 Technologies Used

- **Frontend**: React, Recharts, HTML, CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT-based auth (admin & member)
- **Charting**: Recharts (for line/bar graphs)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Priyanshu15092001/Ticketing-System.git
cd Ticketing-System
```

### 2. Setup Backend

```bash
cd backend
npm install
cp .env    # Add your MongoDB URI, JWT secret, etc.
npm run dev  # Start backend on http://localhost:8080
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev     # Start frontend on http://localhost:5173
```

## 🔐 Environment Variables

### Backend .env

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8080
```

---

## 📡 Key API Endpoints

| Endpoint | Method | Description |
|---------|--------|-------------|
| `/api/tickets/create-from-chat` | `POST` | Create ticket after customer submits form |
| `/api/tickets` | `GET` | Get tickets assigned to logged-in user |
| `/api/tickets/:ticketId/reassign` | `PUT` | Reassign ticket to another admin/team |
| `/api/tickets/:ticketId/status` | `PUT` | Update ticket status |
| `/api/messages/:ticketId` | `GET` | Get all messages for a ticket |
| `/api/messages/:ticketId/send` | `POST` | Send new message in a ticket |
| `/api/settings` | `GET/PUT` | View or update system settings |
| `/api/tickets/missed-chats/weekly` | `GET` | Weekly missed chat stats |
| `/api/tickets/average-reply-time` | `GET` | Average reply time in seconds |

---

## 🔐 Role Rules & Protections

| Action | Super Admin | Admin | Member |
|--------|-------------|-------|------|
| Update/delete Super Admin | ❌ | ❌ | ❌ |
| Reassign tickets | ✅ | ✅ | ❌ |
| Update other admins | ❌ | ✅ (not Super Admin) | ❌ |
| View tickets | ✅ | ✅ | ✅ (assigned only) |
| Reply to tickets | ✅ | ✅ | ✅ |

---

## 🖼️ Screenshots

### 🏡 Customer Landing Page
![Customer Landing Page](./Screenshots/Screenshot%201.png)

### 🪪 Admin Signup and Login Page
![Admin Signup Page](./Screenshots/Screenshot%202.png)
![Admin Login Page](./Screenshots/Screenshot%203.png)

### 🖥️ Admin Dashboard
![Admin Dashboard](./Screenshots/Screenshot%204.png)

### 💬 Admin Chat Interface
![Chat](./Screenshots/Screenshot%205.png)
![Chat](./Screenshots/Screenshot%206.png)
![Chat](./Screenshots/Screenshot%207.png)

### 📈 Admin Analytics Page
![Analytics](./Screenshots/Screenshot%208.png)

### 🤖 Chatbot Customize Page
![Chatbot Customization](./Screenshots//Screenshot%209.png)

### 👥 Team Member Page
![Teams Page](./Screenshots/Screenshot%2010.png)

### ⚙️ Settings Page
![Settings Page](./Screenshots/Screenshot%2011.png)

### 👨‍🦱 Customer Chat Interface
![Customer Chat](./Screenshots/Screenshot%2012.png)
![Mobile View](./Screenshots/Screenshot%2013.png)
![Mobile View](./Screenshots/Screenshot%2014.png)

---

## 🧪 Testing & Debugging

- Use tools like Postman to test endpoints
- Check role-based routes using different JWTs
- Test analytics on multiple ticket/message entries

---

## 🙌 Credits

Developed by Priyanshu Ghosh
© 2025 Full-Stack Ticketing System — MERN Edition