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
├── client/                           # React + Vite frontend
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── Navbar.jsx           # Navigation with scroll detection
│   │   │   ├── Hero.jsx             # Landing section with CTA
│   │   │   ├── About.jsx            # Developer story & timeline
│   │   │   ├── Skills.jsx           # Technical skills with categories
│   │   │   ├── Projects.jsx         # Showcase of projects
│   │   │   ├── Experience.jsx       # Work timeline with achievements
│   │   │   ├── Contact.jsx          # Contact form & information
│   │   │   └── Footer.jsx           # Footer with links & socials
│   │   ├── pages/                   # Page components
│   │   │   └── Home.jsx
│   │   ├── assets/                  # Images and static files
│   │   ├── App.jsx                  # Main app component
│   │   ├── main.jsx                 # React entry point
│   │   └── index.css                # Global styles
│   ├── public/                      # Static files
│   ├── index.html                   # HTML entry point
│   ├── vite.config.js               # Vite configuration
│   ├── tailwind.config.js           # Tailwind CSS config
│   ├── postcss.config.js            # PostCSS config
│   ├── package.json
│   └── README.md
│
├── server/                          # Node.js + Express backend
│   ├── controllers/
│   │   └── contactController.js     # Email handling logic
│   ├── routes/
│   │   └── contactRoutes.js         # Contact form routes
│   ├── middleware/
│   │   └── validation.js            # Input validation middleware
│   ├── server.js                    # Express server entry point
│   ├── package.json
│   ├── .env.example                 # Environment variables template
│   └── README.md
│
├── package.json                     # Root workspace scripts
├── render.yaml                      # Render deployment config
└── README.md                        # This file
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

**Option 1: Run both services from root**
```bash
# Terminal 1 - Frontend development
npm run dev --prefix client

# Terminal 2 - Backend development
npm run dev --prefix server
```

**Option 2: Individual terminals**
```bash
# Frontend (http://localhost:5173)
cd client
npm install
npm run dev

# Backend (http://localhost:5000)
cd server
npm install
cp .env.example .env
# Configure .env with your email credentials
npm run dev
```

**Note**: Update `client/.env` if backend runs on different port:
```
VITE_API_URL=http://localhost:5000
```

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

### Deploy to Render (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deployment ready"
   git push origin main
   ```

2. **Connect Render**:
   - Go to https://dashboard.render.com
   - Click "New +" → "Web Service"
   - Select your GitHub repository
   - Render will auto-detect `render.yaml` configuration

3. **Configuration** (auto-configured via `render.yaml`):
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node.js 18+

4. **Add Environment Variables** (in Render Dashboard):
   ```
   NODE_ENV = production
   EMAIL_SERVICE = gmail
   EMAIL_USER = your-email@gmail.com
   EMAIL_PASSWORD = your-app-password
   ADMIN_EMAIL = your-email@gmail.com
   ```

5. **Deploy**:
   - Click "Create Web Service"
   - Monitor build logs
   - Your site will be live at `https://portfolio-xxxxx.onrender.com`

### Local Build

```bash
npm run build      # Builds client and prepares server
npm start          # Runs server with client as static files
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Next Steps

1. ✅ Project structure created
2. ✅ Frontend & Backend configured
3. ⬜ Add your profile image to `client/public/images/`
4. ⬜ Update your information in components:
   - Name, title, bio (Hero, About)
   - Skills and technologies (Skills)
   - Projects with descriptions (Projects)
   - Work experience (Experience)
   - Contact information (Contact)
5. ⬜ Set up email credentials in `.env`
6. ⬜ Test contact form locally
7. ⬜ Configure custom domain on Render
8. ⬜ Push to GitHub
9. ⬜ Deploy to Render using GitHub integration
10. ⬜ Monitor deployment and test live site

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Rahematullah Balolkhan

---

**Built with ❤️ using React + Vite + Node.js**
# portfolio
