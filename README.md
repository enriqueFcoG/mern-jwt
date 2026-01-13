# MERN CRUD application

## Description
This is a web application built with Next.js and NestJS where users can register, view a list of all registered users, and edit their own profiles. The application implements authentication using JWTs, managed via cookies for secure storage on the client, and demonstrates best practices in backend/frontend separation.

## Technologies Used
- **Next.js** (latest) – Frontend framework
- **NestJS** (latest) – Backend framework
- **TypeScript** – Type safety
- **TailwindCSS** – Styling
- **PostgreSQL** – Relational database
- **JWT** – Authentication tokens
- **Passport** – Authentication middleware
- **Jest** – Unit and integration testing
- **JOSE** – JWT signing and verification
- **Neon** - Database cloud provider (PostgreSQL)
- **Vercel** - Host provider for frontend
- **Heroku** - Host provider for backend

## Installation and Setup

### Prerequisites
- Node.js >= 18
- pnpm, npm or yarn
- PostgreSQL >= 15

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/enriqueFcoG/aura-research.git
   ```
2. Navigate to the frontend and backend directories and install dependencies:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

### Environment Variables
Create a `.env` file in both frontend and backend with the following variables:

**Backend (.env):**
```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=aura
SECRET_KEY=yourSecretKey
JWT_ACCESS_SECRET=yourJwtSecretAccessKey
```

**Frontend (.env):**
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Database Setup
## **Run Database Migrations**

``` bash
pnpm run migration:generate
```

``` bash
pnpm run migration:run
```

------------------------------------------------------------------------

## **Revert Database Migrations**

``` bash
pnpm run migration:revert
```


## Usage
Since we used cookies-backend approach, we need to run the app using a secure protocol (HTTPS) so we are using 2 methods in order to run this app. We can run thi app using the main branch, this approach will run both apps normally using http

### Running the Project (main branch with HTTP) **not recommended for local development**
**Backend:**
```bash
npm run start:dev
```
**Frontend:**
```bash
npm run dev
```

### Running the Project (development branch) with HTTPS

First we need to install certificatestrusted certificates. we need to create a cert folder inside backend and frontend

**Install certificates using mkcert**
```
mkcert -install
mkcert localhost
```

**important:** we need to use the same pem file in both apps (frontend and backend folders)

**Backend:**
```bash
npm run start:dev
```
**Frontend:**
```bash
npm run dev:https
```

## API Documentation

### Available Endpoints
- **POST /auth/register** – Register a new user
- **POST /auth/login** – Login and receive access & refresh tokens in cookies
- **POST /auth/logout** – Clear authentication cookies
- **GET /users** – List all registered users (protected)
- **GET /users/me** – Get user profile based on the cookie token (protected)
- **GET /users/:id** – Get user profile (protected)
- **PATCH /users/:id** – Update user profile (protected)

### Example Request/Response

**Login Request:**
```json
POST /auth/login
{
  "email": "test@example.com",
  "password": "password123"
}
```

**Login Response (via cookies, not JSON):**
- `access_token` (httpOnly)
- `refresh_token` (httpOnly)

## Technical Decisions

### Architecture
- **Next.js frontend** communicates with **NestJS backend** via REST APIs.
- **JWT in cookies** ensures secure token storage and prevents XSS attacks.
- **NestJS** provides a modular and scalable backend structure, ideal for enterprise applications.
- **Cookie-backend approach** ensures a more secure api calls since we don't need to manage the tokens and cookies in the frontend 

### Additional Libraries
- **Passport.js** for modular authentication strategies.
- **JOSE** for secure JWT signing and verification.
- **TailwindCSS** for responsive, utility-first styling.

## Future Improvements
- Implement pagination for the user list to handle large datasets.
- Add Redis for caching frequently accessed data.
- Store refresh tokens in the database for secure token invalidation.
- Enhance security with rate limiting and CSRF protection.
- Expand unit and integration tests for better coverage.

## Current issues 
Currently we are implementing a middleware in nextjs in order to validate the user session, this is part of the next improvements since its necessary to have this kind of validations
