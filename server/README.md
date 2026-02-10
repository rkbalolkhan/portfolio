# Portfolio Server

Express.js backend for portfolio contact form and API endpoints.

## Getting Started

### Prerequisites
- Node.js 16+ installed
- Email service credentials (Gmail, SendGrid, etc.)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure your environment variables:
```
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
ADMIN_EMAIL=your-email@gmail.com
```

### Running the Server

Development mode (with nodemon):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### POST /api/contact
Send a contact form message.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Response (success):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Response (error):**
```json
{
  "error": "Validation failed",
  "details": [...]
}
```

### GET /api/health
Health check endpoint.

## Email Setup

### Gmail (Recommended for Development)
1. Enable 2-factor authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the app password in `.env`

### Other Services
Configure Nodemailer for SendGrid, Mailgun, etc. by updating the transporter config in `contactController.js`

## Validation Rules

- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Message**: Required, minimum 10 characters

## Error Handling

All errors are logged to console and returned with appropriate HTTP status codes:
- 400: Validation errors
- 500: Server errors

## Next Steps

1. Set up email service credentials
2. Test contact form locally
3. Deploy to production (Heroku, Vercel, AWS, etc.)
4. Update CLIENT_URL in production
