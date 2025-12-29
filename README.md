# TypeScript Backend Template

[![Node.js](https://img.shields.io/badge/Node.js-18+-green)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7+-purple)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13+-blue)](https://www.postgresql.org/)

A flexible and extensible backend template built with modern technologies. Currently features an Express.js REST API with JWT authentication, but designed to easily integrate GraphQL, WebSockets, or other architectures.

## 🚀 Features

- **Authentication**: JWT-based user authentication with bcrypt password hashing
- **Database**: Prisma ORM with PostgreSQL support
- **Validation**: Zod schemas for runtime type checking
- **TypeScript**: Full type safety throughout the application
- **Seeding**: Database seeding with sample admin user
- **Documentation**: Comprehensive setup and API documentation
- **Extensible**: Modular structure for adding new features

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Auth**: JSON Web Tokens + bcrypt
- **Validation**: Zod

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/PotatoCodder/typescript-backend-template
   cd typescript-backend-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/your_db"
   JWT_SECRET="your-super-secret-jwt-key"
   PORT=3000
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:3000`

## 📖 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login

### Health Check
- `GET /` - Server status
- `GET /health` - Health check

## 🧪 Testing the API

After seeding, test login with:
- **Email**: admin@gmail.com
- **Password**: password123

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@gmail.com","password":"password123"}'
```

## 📁 Project Structure

```
backend/
├── prisma/
│   ├── schema.prisma      # Database schema
│   ├── seed.ts            # Database seeding
│   └── migrations/        # DB migrations
├── src/
│   ├── auth/              # Authentication module
│   ├── lib/               # Utilities (Prisma client)
│   ├── middlewares/       # Express middlewares
│   ├── routes/            # API routes
│   ├── schemas/           # Zod validation schemas
│   ├── app.ts             # Express app setup
│   └── index.ts           # Server entry point
├── docs/                  # Detailed documentation
├── .env                   # Environment variables
└── README.md              # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npx prisma studio` - Open Prisma database viewer
- `npx prisma migrate dev` - Run database migrations
- `npx prisma db seed` - Seed the database

## 📚 Documentation

For detailed documentation, see [`docs/README.doc`](docs/README.doc) which includes:
- Detailed setup instructions
- API usage examples
- Development guidelines
- Deployment considerations
- Contributing guidelines

## 🤝 Contributing

This is a template project! Feel free to:
- Add new API architectures (GraphQL, WebSockets)
- Implement additional features (email verification, rate limiting)
- Improve error handling and logging
- Add testing frameworks
- Set up CI/CD pipelines

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙋 Support

If you find this template helpful, please give it a ⭐ on GitHub!
