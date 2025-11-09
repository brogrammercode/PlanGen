# Plangen MVP Checklist

## Phase 1: Critical Blockers

### Environment & Security
- [ ] Create `.env.example` for API Gateway
- [ ] Create `.env.example` for Auth Service
- [ ] Create `.env.example` for Plan Service
- [ ] Create `.env.example` for Template Service
- [ ] Create `.env.example` for Frontend
- [ ] Remove hardcoded `ACCESS_TOKEN_SECRET` default in API Gateway
- [ ] Remove hardcoded `REFRESH_TOKEN_SECRET` default in API Gateway
- [ ] Remove hardcoded secrets in Auth Service
- [ ] Add basic env validation in Plan Service
- [ ] Document required env vars in README

### Frontend Fixes
- [ ] Enable Zod validation in `LoginPage.tsx`
- [ ] Remove all `console.log` from `LoginPage.tsx`
- [ ] Complete Redux store implementation
- [ ] Test form validation works

### Error Handling
- [ ] Add NODE_ENV check to error middleware (hide stack in prod)
- [ ] Add user-friendly error messages in frontend
- [ ] Test error handling for API failures

### Database Connectivity
- [ ] Verify Prisma migrations work
- [ ] Test PostgreSQL connection in Auth Service
- [ ] Test MongoDB connection in Plan Service
- [ ] Add connection error handling

---

## Phase 2: Core Features

### Authentication
- [ ] Test user registration endpoint
- [ ] Test user login endpoint
- [ ] Test JWT token generation
- [ ] Test refresh token endpoint
- [ ] Test protected routes with auth middleware
- [ ] Frontend: Store tokens in cookies/localStorage
- [ ] Frontend: Send tokens in API requests
- [ ] Frontend: Handle token expiration

### API Gateway
- [ ] Test `/api/v1/auth/*` routes
- [ ] Test `/api/v1/plans/*` routes
- [ ] Test `/api/v1/templates/*` routes
- [ ] Verify CORS allows frontend requests
- [ ] Test rate limiting works

### CRUD Operations
- [ ] Plan Service: Create plan endpoint
- [ ] Plan Service: Get plan(s) endpoint
- [ ] Plan Service: Update plan endpoint
- [ ] Plan Service: Delete plan endpoint
- [ ] Template Service: Create template endpoint
- [ ] Template Service: Get template(s) endpoint
- [ ] Template Service: Update template endpoint
- [ ] Template Service: Delete template endpoint
- [ ] Frontend: UI for creating plans
- [ ] Frontend: UI for viewing plans
- [ ] Frontend: UI for updating plans
- [ ] Frontend: UI for deleting plans

---

## Phase 3: Deployment Readiness

### Documentation
- [ ] Update main README with current architecture
- [ ] Document setup instructions for each service
- [ ] List all required environment variables
- [ ] Add instructions for running locally
- [ ] Create basic API endpoint list

### Docker
- [ ] Verify docker-compose.yml works
- [ ] Test all services start in Docker
- [ ] Document Docker setup in README
- [ ] Test database connections in Docker

### Health Checks
- [ ] Add `/health` endpoint to API Gateway
- [ ] Add `/health` endpoint to Auth Service
- [ ] Add `/health` endpoint to Plan Service
- [ ] Add `/health` endpoint to Template Service
- [ ] Test health endpoints return correct status

---

## Quick Wins (If Time Permits)

- [ ] Add basic request logging
- [ ] Add API response time logging
- [ ] Create simple API endpoint documentation
- [ ] Add loading states in frontend
- [ ] Add basic error boundaries in React

---

## Notes

- Focus on making it work first, optimize later
- Don't worry about perfect code - MVP is about functionality
- Test manually - automated tests can come later
- Keep it simple - complexity can be added post-MVP

