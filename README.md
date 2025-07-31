# Customer Support Ticketing System with Automation

A comprehensive customer support platform with intelligent automation workflows, real-time updates, and advanced analytics. Built with modern web technologies and powered by n8n for seamless workflow automation.

## 🚀 Features

### 📋 Core Ticket Management
- **Web Portal**: Intuitive customer interface for ticket submission
- **Staff Dashboard**: Comprehensive agent interface for ticket management
- **Real-time Updates**: Live notifications and status changes
- **File Attachments**: Support for document and image uploads
- **Internal Notes**: Private staff communication on tickets
- **Smart Categorization**: Automatic and manual ticket classification
- **Priority Levels**: Flexible priority system with SLA tracking

### 🤖 Intelligent Automation (n8n Powered)
- **Auto-Assignment**: Smart ticket routing based on category and agent availability
- **Email Notifications**: Automated customer and staff communications
- **Escalation Management**: Automatic escalation of overdue tickets
- **Report Generation**: Scheduled daily/weekly performance reports
- **Slack Integration**: Real-time team notifications and updates
- **Auto-Resolution**: Intelligent ticket closure after customer confirmation
- **SLA Monitoring**: Automated tracking and alerts for service level agreements

### 📊 Analytics & Reporting
- **Performance Metrics**: Response time, resolution rate, and efficiency tracking
- **Agent Analytics**: Individual performance monitoring and insights
- **Customer Satisfaction**: Automated survey collection and analysis
- **Trend Analysis**: Ticket volume patterns and forecasting
- **Custom Reports**: Flexible reporting with export capabilities

## 🛠️ Technology Stack

### Backend
- **Node.js** with **Express.js** - RESTful API server
- **MongoDB** - Document database for flexible data storage
- **Socket.io** - Real-time bidirectional communication
- **JWT** - Secure authentication and authorization
- **Multer** - File upload handling
- **n8n** - Workflow automation engine

### Frontend
- **React** - Modern component-based UI framework
- **Material-UI / Tailwind CSS** - Responsive design system
- **Redux Toolkit** - State management
- **React Query** - Server state management and caching
- **Socket.io Client** - Real-time updates

### Automation & Integrations
- **n8n** - Visual workflow automation
- **SendGrid/Mailgun** - Email service providers
- **Slack API** - Team collaboration integration
- **Webhook APIs** - External system integrations

## 📁 Project Structure

```
customer-support-system/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── ticketController.js
│   │   ├── userController.js
│   │   └── webhookController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── upload.js
│   │   └── validation.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Ticket.js
│   │   ├── Comment.js
│   │   └── Attachment.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── tickets.js
│   │   ├── users.js
│   │   └── webhooks.js
│   ├── utils/
│   │   ├── email.js
│   │   ├── notifications.js
│   │   └── analytics.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── customer/
│   │   │   ├── agent/
│   │   │   └── admin/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   └── utils/
│   └── package.json
├── n8n-workflows/
│   ├── ticket-assignment.json
│   ├── email-notifications.json
│   ├── escalation-workflow.json
│   └── reporting-automation.json
├── docs/
│   ├── API.md
│   ├── DEPLOYMENT.md
│   └── WORKFLOWS.md
└── docker-compose.yml
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- n8n instance (local or cloud)
- Email service account (SendGrid/Mailgun)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/customer-support-system.git
   cd customer-support-system
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   Create `.env` file in the backend directory:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/support_system
   
   # Authentication
   JWT_SECRET=your_super_secret_jwt_key
   JWT_EXPIRE=7d
   
   # Email Service
   SENDGRID_API_KEY=your_sendgrid_api_key
   FROM_EMAIL=noreply@yourcompany.com
   
   # n8n Integration
   N8N_WEBHOOK_URL=http://localhost:5678/webhook
   N8N_API_KEY=your_n8n_api_key
   
   # Slack Integration
   SLACK_WEBHOOK_URL=your_slack_webhook_url
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

5. **Start the services**
   ```bash
   # Start MongoDB (if local)
   mongod
   
   # Start n8n (in separate terminal)
   npx n8n start
   
   # Start backend server
   cd backend
   npm run dev
   
   # Start frontend (in separate terminal)
   cd frontend
   npm start
   ```

### Docker Setup (Recommended)

```bash
# Start all services with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🔧 Configuration

### n8n Workflow Setup

1. Import workflow files from `n8n-workflows/` directory
2. Configure webhook URLs in your environment variables
3. Set up email service credentials in n8n
4. Configure Slack integration tokens
5. Test workflows with sample data

### Database Initialization

```bash
# Run database migrations
npm run migrate

# Seed initial data (optional)
npm run seed
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Ticket Endpoints
- `GET /api/tickets` - List tickets (with filtering)
- `POST /api/tickets` - Create new ticket
- `GET /api/tickets/:id` - Get ticket details
- `PUT /api/tickets/:id` - Update ticket
- `DELETE /api/tickets/:id` - Delete ticket
- `POST /api/tickets/:id/comments` - Add comment

### Webhook Endpoints
- `POST /api/webhooks/n8n` - n8n workflow triggers
- `POST /api/webhooks/email` - Email service callbacks
- `POST /api/webhooks/slack` - Slack event handling

For detailed API documentation, see [API.md](docs/API.md)

## 🔄 Automation Workflows

### Available n8n Workflows

1. **Ticket Assignment Workflow**
   - Triggers: New ticket creation
   - Actions: Auto-assign based on category and agent workload

2. **Email Notification Workflow**
   - Triggers: Ticket status changes
   - Actions: Send customized emails to customers and staff

3. **Escalation Workflow**
   - Triggers: Scheduled check for overdue tickets
   - Actions: Escalate to supervisors, send urgent notifications

4. **Reporting Workflow**
   - Triggers: Daily/weekly schedule
   - Actions: Generate and email performance reports

5. **Customer Satisfaction Workflow**
   - Triggers: Ticket resolution
   - Actions: Send satisfaction survey, collect feedback

## 📊 Analytics Features

- **Real-time Dashboards**: Live metrics and KPIs
- **Performance Tracking**: Agent efficiency and response times
- **Customer Insights**: Satisfaction scores and feedback analysis
- **Trend Analysis**: Historical data and predictive analytics
- **Custom Reports**: Flexible reporting with various export formats

## 🛡️ Security Features

- JWT-based authentication
- Role-based access control (Customer, Agent, Admin)
- Input validation and sanitization
- File upload security scanning
- Rate limiting on API endpoints
- HTTPS encryption (production)
- Database connection security

## 🧪 Testing

```bash
# Run backend tests
cd backend
npm test

# Run frontend tests
cd frontend
npm test

# Run integration tests
npm run test:integration

# Generate coverage report
npm run test:coverage
```

## 🚀 Deployment

### Production Deployment

1. **Environment Setup**
   ```bash
   NODE_ENV=production
   # Update all environment variables for production
   ```

2. **Build Frontend**
   ```bash
   cd frontend
   npm run build
   ```

3. **Deploy Options**
   - **Docker**: Use provided Dockerfile and docker-compose.prod.yml
   - **Cloud Platforms**: Heroku, AWS, DigitalOcean
   - **VPS**: Ubuntu/CentOS with PM2 process manager

For detailed deployment instructions, see [DEPLOYMENT.md](docs/DEPLOYMENT.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow ESLint configuration
- Write tests for new features
- Update documentation for API changes
- Use conventional commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [n8n](https://n8n.io/) - Workflow automation platform
- [MongoDB](https://www.mongodb.com/) - Database platform
- [React](https://reactjs.org/) - Frontend framework
- [Express.js](https://expressjs.com/) - Backend framework
- [Socket.io](https://socket.io/) - Real-time communication

## 📞 Support

- **Documentation**: [Wiki](https://github.com/yourusername/customer-support-system/wiki)
- **Issues**: [GitHub Issues](https://github.com/yourusername/customer-support-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/customer-support-system/discussions)
- **Email**: support@yourcompany.com

## 🗺️ Roadmap

- [ ] **v2.0**: AI-powered ticket categorization
- [ ] **v2.1**: Mobile app for agents
- [ ] **v2.2**: Advanced analytics with ML insights
- [ ] **v2.3**: Multi-language support
- [ ] **v2.4**: Video call integration
- [ ] **v3.0**: Microservices architecture migration

---

**Made with ❤️ by [Your Name/Team]**
