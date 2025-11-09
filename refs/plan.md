# Plangen MVP Readiness Plan

## Goal

Get a working, deployable MVP with core functionality. Polish and best practices will come after MVP is complete.

## Architecture Overview

- **API Gateway + Auth Service**: TypeScript + Express + PostgreSQL (Prisma)
- **Template Service + Plan Service**: FastAPI + MongoDB
- **Frontend**: React + TypeScript + Vite

---

## MVP Phase 1: Critical Blockers (MUST HAVE for MVP)

### 1.1 Environment Setup & Basic Security

**Goal**: Make the app runnable without security vulnerabilities

**Tasks:**

- Create `.env.example` files for all services (list required variables)
- Remove hardcoded default secrets - use placeholder values that fail fast
- Add basic environment variable validation (simple checks, no heavy libraries)
- Document minimum required env vars in README

**Files to modify:**

- `backend/api-gateway/src/core/env.ts` - Remove "ACCESS_TOKEN_SECRET" default
- `backend/services/auth-service/src/core/env.ts` - Remove secret defaults
- `backend/services/plan-service/src/core/env.py` - Add validation
- Create `.env.example` for each service

### 1.2 Fix Broken Functionality

**Goal**: Make core features work

**Tasks:**

- Enable and fix frontend validation in `LoginPage.tsx` (uncomment Zod schema)
- Remove `console.log` statements from production code
- Complete Redux store if needed for auth state
- Fix any commented-out critical code (like token revocation if needed for MVP)

**Files:**

- `frontend/src/pages/LoginPage/LoginPage.tsx` - Enable validation, remove console.logs
- `frontend/src/store/store.ts` - Complete if empty
- `frontend/src/utils/schemas/index.ts` - Ensure it's used

### 1.3 Basic Error Handling

**Goal**: Users see helpful errors, app doesn't crash

**Tasks:**

- Ensure error middleware catches all errors
- Hide stack traces in production (keep for development)
- Add basic error messages for common failures
- Frontend: Add try-catch for API calls with user-friendly messages

**Files:**

- `backend/*/src/middlewares/error.middleware.ts` - Add NODE_ENV check
- Frontend API service files - Add error handling

### 1.4 Database & Service Connectivity

**Goal**: All services can connect to their databases

**Tasks:**

- Verify Prisma schema is correct and migrations work
- Verify MongoDB connection in Python services
- Add basic connection error handling
- Test that services can start up successfully

**Files:**

- `backend/services/auth-service/src/infrastructure/database/` - Verify Prisma setup
- `backend/services/plan-service/src/infra/database.py` - Verify MongoDB connection

---

## MVP Phase 2: Core Features Working (MUST HAVE)

### 2.1 Authentication Flow

**Goal**: Users can register, login, and stay authenticated

**Tasks:**

- Test complete auth flow: register → login → access protected routes
- Verify JWT tokens work correctly
- Test refresh token flow
- Frontend: Store tokens and send in requests

**Files to verify:**

- Auth service routes and controllers
- Frontend auth service/API calls
- Protected route implementation

### 2.2 API Gateway Routing

**Goal**: All service routes accessible through gateway

**Tasks:**

- Verify all proxy routes work (`/api/v1/auth/*`, `/api/v1/plans/*`, `/api/v1/templates/*`)
- Test that requests reach correct services
- Verify CORS allows frontend to call gateway

**Files:**

- `backend/api-gateway/src/proxy/create-proxy.ts` - Verify all routes
- `backend/api-gateway/src/middlewares/cors.middleware.ts` - Verify CORS config

### 2.3 Basic CRUD Operations

**Goal**: Users can create, read, update, delete plans/templates

**Tasks:**

- Implement basic plan CRUD endpoints (if not done)
- Implement basic template CRUD endpoints (if not done)
- Frontend: Basic UI to interact with these endpoints
- Test end-to-end: create plan → view plan → update plan → delete plan

---

## MVP Phase 3: Deployment Readiness (SHOULD HAVE)

### 3.1 Basic Documentation

**Goal**: Someone else can set up and run the project

**Tasks:**

- Update main README with:
  - Current architecture (TS+PostgreSQL for auth, Python+MongoDB for others)
  - Setup instructions for each service
  - Required environment variables
  - How to run locally
- Add basic API endpoint documentation (can be simple list)

**Files:**

- `README.md` - Update with current info
- Create `SETUP.md` or add to README

### 3.2 Docker Setup

**Goal**: Can run entire stack with docker-compose

**Tasks:**

- Verify docker-compose works for local development
- Ensure all services can start from Docker
- Document how to run with Docker

**Files:**

- `backend/infra/docker/docker-compose.yml` - Verify it works
- Update README with Docker instructions

### 3.3 Basic Health Checks

**Goal**: Know if services are running

**Tasks:**

- Add simple `/health` endpoint to each service
- Returns 200 if service is up, 500 if down
- Can be very basic for MVP

**Files to create:**

- Health check routes in each service

---

## What We're SKIPPING for MVP (Do Later)

- ❌ Comprehensive testing (add basic smoke tests if time permits)
- ❌ TypeScript strict mode (fix types as you go)
- ❌ Advanced logging (console logging is fine for MVP)
- ❌ API documentation (OpenAPI/Swagger) - can add basic endpoint list
- ❌ Performance optimization
- ❌ CI/CD pipeline
- ❌ Advanced monitoring
- ❌ Code splitting and lazy loading
- ❌ Pre-commit hooks and git workflows
- ❌ Advanced security features (CSRF, advanced sanitization)

---

## MVP Success Criteria

✅ All services start up successfully  
✅ User can register and login  
✅ User can create/view/update/delete plans  
✅ Frontend can communicate with all backend services  
✅ Can run locally with docker-compose  
✅ Basic documentation exists  
✅ No hardcoded secrets in code  
✅ No console.logs in production code  
✅ Basic error handling works

---

## Implementation Order

1. **Environment Setup** (1-2 hours)

   - Create .env.example files
   - Remove hardcoded secrets
   - Add basic validation

2. **Fix Frontend** (1-2 hours)

   - Enable validation
   - Remove console.logs
   - Fix Redux store

3. **Error Handling** (1 hour)

   - Hide stack traces in production
   - Add user-friendly error messages

4. **Test Connectivity** (1 hour)

   - Verify all services can start
   - Test database connections

5. **Test Auth Flow** (2-3 hours)

   - End-to-end auth testing
   - Fix any issues found

6. **Test Gateway** (1 hour)

   - Verify all routes work
   - Test CORS

7. **CRUD Operations** (3-4 hours)

   - Implement missing endpoints
   - Test end-to-end

8. **Documentation** (1-2 hours)

   - Update README
   - Add setup instructions

9. **Docker & Health Checks** (1-2 hours)
   - Verify docker-compose
   - Add health endpoints

**Total Estimated Time: 12-18 hours**
