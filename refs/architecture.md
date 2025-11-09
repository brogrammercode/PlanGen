# Plangen Architecture Overview

## System Architecture

```
┌─────────────────┐
│   Frontend      │
│  React + Vite   │
│   Port: 5173    │
└────────┬────────┘
         │
         │ HTTP/REST
         │
┌────────▼─────────────────────────────────────┐
│         API Gateway                          │
│      TypeScript + Express                    │
│         Port: 3000                           │
│                                              │
│  Routes:                                     │
│  - /api/v1/auth/* → Auth Service            │
│  - /api/v1/plans/* → Plan Service           │
│  - /api/v1/templates/* → Template Service   │
└────┬──────────────────┬────────────────────┘
     │                  │
     │                  │
┌────▼─────┐    ┌──────▼──────────┐
│   Auth   │    │   Plan Service  │
│ Service  │    │  FastAPI +      │
│ TS+Express│   │  MongoDB        │
│ Port:3001│   │  Port: 3003      │
│          │   └──────────────────┘
│ PostgreSQL│
│ (Prisma) │   ┌──────────────────┐
└──────────┘   │ Template Service │
               │  FastAPI +       │
               │  MongoDB         │
               │  Port: 3002      │
               └──────────────────┘
```

## Technology Stack

### Frontend
- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.6
- **Language**: TypeScript
- **Styling**: TailwindCSS 4.1.13
- **State Management**: Redux
- **Routing**: React Router 7.9.1
- **Validation**: Zod 4.1.12

### Backend - API Gateway
- **Framework**: Express 5.1.0
- **Language**: TypeScript
- **Proxy**: http-proxy-middleware
- **Security**: Helmet, CORS
- **Rate Limiting**: express-rate-limit
- **Logging**: Winston

### Backend - Auth Service
- **Framework**: Express 5.1.0
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma 6.16.2
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **Caching**: Redis (ioredis)
- **Logging**: Winston

### Backend - Plan Service
- **Framework**: FastAPI
- **Language**: Python
- **Database**: MongoDB
- **Validation**: Pydantic
- **Async**: Uvicorn

### Backend - Template Service
- **Framework**: FastAPI
- **Language**: Python
- **Database**: MongoDB
- **Validation**: Pydantic
- **Async**: Uvicorn

## Service Responsibilities

### API Gateway
- Routes requests to appropriate microservices
- Handles CORS
- Rate limiting
- Request/response logging
- Authentication middleware (optional - can be in services)

### Auth Service
- User registration
- User login/logout
- JWT token generation and refresh
- Password management
- User profile management
- Token revocation

### Plan Service
- Create, read, update, delete plans
- Plan scheduling
- Plan templates
- Plan sharing (future)

### Template Service
- Create, read, update, delete templates
- Template categories
- Template search

## Data Flow

### Authentication Flow
1. User submits login form (Frontend)
2. Frontend → API Gateway `/api/v1/auth/login`
3. API Gateway → Auth Service `/api/auth/login`
4. Auth Service validates credentials
5. Auth Service generates JWT tokens
6. Tokens returned to Frontend
7. Frontend stores tokens
8. Frontend includes tokens in subsequent requests

### Plan Creation Flow
1. User creates plan (Frontend)
2. Frontend → API Gateway `/api/v1/plans` (with auth token)
3. API Gateway validates token (optional)
4. API Gateway → Plan Service `/api/plans`
5. Plan Service validates request
6. Plan Service saves to MongoDB
7. Response returned to Frontend

## Database Schema

### PostgreSQL (Auth Service)
- **User**: id, email, password, name, username, avatar, bio, role, isActive, isEmailVerified
- **RefreshToken**: id, token, userId, expiresAt, revoked, revokedAt

### MongoDB (Plan Service & Template Service)
- Plans collection
- Templates collection
- (Specific schemas to be defined)

## Environment Variables

### API Gateway
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)
- `AUTH`: Auth service URL
- `PLAN`: Plan service URL
- `TEMPLATE`: Template service URL
- `ALLOWED_ORIGINS`: CORS allowed origins
- `ACCESS_TOKEN_SECRET`: JWT access token secret
- `REFRESH_TOKEN_SECRET`: JWT refresh token secret
- `RATE_LIMIT_MAX_REQUESTS`: Rate limit max requests
- `RATE_LIMIT_WINDOW_MS`: Rate limit window

### Auth Service
- `PORT`: Server port (default: 3001)
- `DATABASE_URL`: PostgreSQL connection string
- `REDIS_HOST`: Redis host
- `REDIS_PORT`: Redis port
- `REDIS_PASSWORD`: Redis password
- `ACCESS_TOKEN_SECRET`: JWT access token secret
- `REFRESH_TOKEN_SECRET`: JWT refresh token secret
- `ACCESS_TOKEN_EXP`: Access token expiration
- `REFRESH_TOKEN_EXP`: Refresh token expiration
- `ALLOWED_ORIGINS`: CORS allowed origins

### Plan Service
- `DATABASE_URL`: MongoDB connection string
- `DATABASE_NAME`: MongoDB database name
- `DATABASE_COLLECTION`: MongoDB collection name

### Template Service
- `DATABASE_URL`: MongoDB connection string
- `DATABASE_NAME`: MongoDB database name
- `DATABASE_COLLECTION`: MongoDB collection name

### Frontend
- `VITE_API_BASE_URL`: API Gateway URL
- `VITE_API_TIMEOUT`: API request timeout

## API Endpoints

### Auth Service (via Gateway: `/api/v1/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `POST /logout` - User logout
- `POST /refresh` - Refresh access token

### Plan Service (via Gateway: `/api/v1/plans`)
- `GET /` - Get all plans
- `GET /:id` - Get plan by ID
- `POST /` - Create plan
- `PUT /:id` - Update plan
- `DELETE /:id` - Delete plan

### Template Service (via Gateway: `/api/v1/templates`)
- `GET /` - Get all templates
- `GET /:id` - Get template by ID
- `POST /` - Create template
- `PUT /:id` - Update template
- `DELETE /:id` - Delete template

## Security Considerations

### Current Implementation
- JWT-based authentication
- Password hashing with bcryptjs
- Helmet.js for security headers
- CORS middleware
- Rate limiting

### For Production (Post-MVP)
- HTTPS/TLS
- CSRF protection
- Input sanitization
- SQL injection prevention (Prisma helps)
- XSS prevention
- Security headers
- Token rotation
- Session management

## Deployment Strategy

### Development
- Run all services locally
- Use docker-compose for databases (PostgreSQL, MongoDB, Redis)
- Frontend on Vite dev server
- Backend services on separate ports

### Production (Future)
- Containerize all services
- Use orchestration (Kubernetes/Docker Swarm)
- Load balancing
- Database replication
- Redis cluster
- CDN for frontend
- Monitoring and logging

## Known Limitations (MVP)

- No service discovery (hardcoded URLs)
- No API versioning strategy
- No comprehensive testing
- Basic error handling
- No advanced monitoring
- No distributed tracing
- Single database instances (no replication)

## Future Enhancements (Post-MVP)

- Service mesh (Istio/Linkerd)
- API Gateway with advanced features (Kong/Apache APISIX)
- Message queue (RabbitMQ/Kafka)
- Event-driven architecture
- GraphQL API
- WebSocket support
- Advanced caching strategies
- Full-text search
- File storage service
- Notification service
- Analytics service

