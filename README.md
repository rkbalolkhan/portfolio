# Modern Portfolio - React + Vite + Node.js

A professional, fast, and modern portfolio website built with React + Vite on the frontend and Node.js + Express on the backend.

## 🚀 Features

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, Nodemailer for contact forms
- **Design**: Clean, modern aesthetic with white background
- **Performance**: Optimized with Vite for fast builds
- **Responsive**: Mobile-first, fully responsive design
- **Animations**: Smooth animations with Framer Motion
- **Email**: Contact form with email notifications

## 📁 Project Structure

```
portfolio/
├── client/                    # React + Vite frontend
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/           # Page components
│   │   │   └── Home.jsx
│   │   ├── assets/          # Images and static files
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── package.json
│   └── README.md
│
├── server/                    # Node.js + Express backend
│   ├── controllers/
│   │   └── contactController.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── middleware/
│   │   └── validation.js
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Nodemailer** - Email service
- **Express Validator** - Input validation
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variables

## ⚡ Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Running Locally

**Terminal 1 - Frontend:**
```bash
cd client
npm install
npm run dev
```
Frontend will be available at `http://localhost:5173`

**Terminal 2 - Backend:**
```bash
cd server
npm install
cp .env.example .env
# Configure .env with your email credentials
npm run dev
```
Backend will run on `http://localhost:5000`

## 🔧 Configuration

### Frontend Environment
Create `client/.env`:
```
VITE_API_URL=http://localhost:5000
```

### Backend Environment
Create `server/.env`:
```
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=your-email@gmail.com
```

## 📧 Email Setup

1. **Gmail** (Recommended):
   - Enable 2-factor authentication
   - Generate App Password: https://myaccount.google.com/apppasswords
   - Use the app password in `.env`

2. **Other Services**: Update the transporter config in `server/controllers/contactController.js`

## 🎨 Customization

### Colors
Edit `client/tailwind.config.js`:
- `primary`: #111827 (dark gray)
- `secondary`: #6366f1 (indigo blue)

### Content
Update content in component files:
- Portfolio image: `client/src/assets/`
- Hero section: `client/src/components/Hero.jsx`
- About: `client/src/components/About.jsx`
- Skills: `client/src/components/Skills.jsx`
- Projects: `client/src/components/Projects.jsx`
- Experience: `client/src/components/Experience.jsx`
- Contact info: `client/src/components/Contact.jsx`

## 🚀 Deployment

### Frontend (Vercel)
```bash
cd client
npm run build
# Deploy dist folder to Vercel
```

### Backend (Heroku/Railway)
```bash
cd server
npm install
npm start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Next Steps

1. ✅ Project structure created
2. ⬜ Add your profile image
3. ⬜ Update your information (name, title, bio)
4. ⬜ Add your projects with links
5. ⬜ Update contact information
6. ⬜ Set up email credentials
7. ⬜ Test contact form locally
8. ⬜ Deploy frontend to Vercel
9. ⬜ Deploy backend to Heroku/Railway
10. ⬜ Configure custom domain

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Rahematullah Balolkhan

---

**Built with ❤️ using React + Vite + Node.js**
# portfolio
