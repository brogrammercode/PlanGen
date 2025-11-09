# Plangen MVP Implementation Guide

## Quick Start Checklist

### Prerequisites
- [ ] Node.js 18+ installed
- [ ] Python 3.8+ installed
- [ ] PostgreSQL installed/running
- [ ] MongoDB installed/running
- [ ] Redis installed/running (optional for MVP)
- [ ] Git installed

### Initial Setup
1. Clone repository
2. Install dependencies for each service
3. Set up databases
4. Configure environment variables
5. Run migrations
6. Start services

---

## Step-by-Step Implementation

### Step 1: Environment Configuration (30 min)

#### 1.1 Create .env.example Files

**API Gateway** (`backend/api-gateway/.env.example`):
```env
NODE_ENV=development
PORT=3000
SERVICE_NAME=api-gateway

# Service URLs
AUTH=http://localhost:3001
PLAN=http://localhost:3003
TEMPLATE=http://localhost:3002

# CORS
ALLOWED_ORIGINS=http://localhost:5173

# JWT (for gateway auth validation)
ACCESS_TOKEN_SECRET=your-access-token-secret-here
REFRESH_TOKEN_SECRET=your-refresh-token-secret-here

# Rate Limiting
RATE_LIMIT_MAX_REQUESTS=100
RATE_LIMIT_WINDOW_MS=900000

# Logging
LOG_LEVEL=info
```

**Auth Service** (`backend/services/auth-service/.env.example`):
```env
NODE_ENV=development
PORT=3001
SERVICE_NAME=auth-service

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/plangen_auth

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0

# JWT
ACCESS_TOKEN_SECRET=your-access-token-secret-here
REFRESH_TOKEN_SECRET=your-refresh-token-secret-here
ACCESS_TOKEN_EXP=15m
REFRESH_TOKEN_EXP=7d
REFRESH_TOKEN_EXP_IN_NUM=604800

# CORS
ALLOWED_ORIGINS=http://localhost:5173
COOKIE_MAX_AGE=604800000

# Rate Limiting
RATE_LIMIT_MAX_REQUESTS=100
RATE_LIMIT_WINDOW_MS=900000

# Logging
LOG_LEVEL=info
```

**Plan Service** (`backend/services/plan-service/.env.example`):
```env
DATABASE_URL=mongodb://localhost:27017
DATABASE_NAME=plangen
DATABASE_COLLECTION=plans
```

**Template Service** (`backend/services/template-service/.env.example`):
```env
DATABASE_URL=mongodb://localhost:27017
DATABASE_NAME=plangen
DATABASE_COLLECTION=templates
```

**Frontend** (`frontend/.env.example`):
```env
VITE_API_BASE_URL=http://localhost:3000
VITE_API_TIMEOUT=30000
```

#### 1.2 Remove Hardcoded Secrets

**File**: `backend/api-gateway/src/core/env.ts`
```typescript
// BEFORE
ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "ACCESS_TOKEN_SECRET",

// AFTER
ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || (() => {
  throw new Error("ACCESS_TOKEN_SECRET is required");
})(),
```

**File**: `backend/services/auth-service/src/core/env.ts`
```typescript
// Apply same pattern for all secrets
ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || (() => {
  throw new Error("ACCESS_TOKEN_SECRET is required");
})(),
REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || (() => {
  throw new Error("REFRESH_TOKEN_SECRET is required");
})(),
```

#### 1.3 Add Basic Validation

**For TypeScript services**, add at the end of `env.ts`:
```typescript
// Validate required variables
const requiredVars = ['ACCESS_TOKEN_SECRET', 'REFRESH_TOKEN_SECRET', 'DATABASE_URL'];
requiredVars.forEach(varName => {
  if (!env[varName as keyof Env]) {
    throw new Error(`Missing required environment variable: ${varName}`);
  }
});
```

**For Python services**, update `env.py`:
```python
from pydantic import BaseSettings, Field

class Env(BaseSettings):
    DATABASE_URL: str = Field(..., description="MongoDB connection string")
    DATABASE_NAME: str = Field(..., description="Database name")
    DATABASE_COLLECTION: str = Field(..., description="Collection name")
    
    class Config:
        env_file = ".env"
```

---

### Step 2: Frontend Fixes (1 hour)

#### 2.1 Enable Validation in LoginPage

**File**: `frontend/src/pages/LoginPage/LoginPage.tsx`

```typescript
// Uncomment and use the schema
import { loginSchema } from "../../utils/schemas";

// In component:
const [validationError, setValidationError] = useState<{
  email?: string;
  password?: string;
}>({});

const validateForm = (): boolean => {
  try {
    loginSchema.parse({ email, password });
    setValidationError({});
    return true;
  } catch (err) {
    if (err instanceof z.ZodError) {
      const errors: { email?: string; password?: string } = {};
      err.issues.forEach((error) => {
        if (error.path[0] === "email") {
          errors.email = error.message;
        } else if (error.path[0] === "password") {
          errors.password = error.message;
        }
      });
      setValidationError(errors);
    }
    return false;
  }
};

// Remove all console.log statements
// Add error display in JSX:
{validationError.email && <span className="text-red-500">{validationError.email}</span>}
{validationError.password && <span className="text-red-500">{validationError.password}</span>}
```

#### 2.2 Complete Redux Store

**File**: `frontend/src/store/store.ts`

```typescript
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

### Step 3: Error Handling (1 hour)

#### 3.1 Backend Error Middleware

**File**: `backend/api-gateway/src/middlewares/error.middleware.ts`

```typescript
export const errorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  logger.error("Error:", {
    message: error.message,
    stack: error.stack,
    url: req.url,
    path: req.path,
    method: req.method,
  });

  // Hide stack trace in production
  const isDevelopment = env.NODE_ENV === 'development';
  
  return ServerResponse.error(
    res,
    `Error in ${req.url}: ${error.message}`,
    INTERNAL_SERVER_ERROR,
    isDevelopment ? { stack: error.stack } : undefined
  );
};
```

#### 3.2 Frontend Error Handling

Create `frontend/src/services/api/client.ts`:
```typescript
import axios from 'axios';
import { API_CONFIG } from '../../config/api';

const client = axios.create({
  baseURL: API_CONFIG.baseUrl,
  timeout: API_CONFIG.timeout,
  headers: API_CONFIG.headers,
  withCredentials: API_CONFIG.withCredentials,
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors
    const message = error.response?.data?.message || 'An error occurred';
    console.error('API Error:', message);
    return Promise.reject(new Error(message));
  }
);

export default client;
```

---

### Step 4: Database Setup (1 hour)

#### 4.1 PostgreSQL Setup (Auth Service)

```bash
cd backend/services/auth-service
npm run prisma:generate
npm run prisma:push
```

#### 4.2 MongoDB Setup (Plan Service)

Verify connection in `backend/services/plan-service/src/infra/database.py`:
```python
from motor.motor_asyncio import AsyncIOMotorClient
from src.core.env import env

client = AsyncIOMotorClient(env.DATABASE_URL)
db = client[env.DATABASE_NAME]
collection = db[env.DATABASE_COLLECTION]

# Test connection
async def test_connection():
    try:
        await client.admin.command('ping')
        print("MongoDB connection successful")
    except Exception as e:
        print(f"MongoDB connection failed: {e}")
```

---

### Step 5: Testing & Verification (2-3 hours)

#### 5.1 Start All Services

**Terminal 1 - API Gateway:**
```bash
cd backend/api-gateway
npm install
npm run dev
```

**Terminal 2 - Auth Service:**
```bash
cd backend/services/auth-service
npm install
npm run dev
```

**Terminal 3 - Plan Service:**
```bash
cd backend/services/plan-service
pip install -r requirements.txt
uvicorn src.main:app --reload --port 3003
```

**Terminal 4 - Template Service:**
```bash
cd backend/services/template-service
pip install -r requirements.txt
uvicorn src.main:app --reload --port 3002
```

**Terminal 5 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

#### 5.2 Test Authentication Flow

1. Open browser to `http://localhost:5173`
2. Navigate to login page
3. Try to register a new user
4. Login with credentials
5. Verify tokens are stored
6. Access protected route

#### 5.3 Test API Gateway

Use Postman or curl:
```bash
# Test auth endpoint through gateway
curl http://localhost:3000/api/v1/auth/health

# Test plan endpoint through gateway
curl http://localhost:3000/api/v1/plans
```

---

### Step 6: Health Endpoints (30 min)

**API Gateway** - Add to routes:
```typescript
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'api-gateway' });
});
```

**Auth Service** - Add route:
```typescript
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'auth-service' });
});
```

**Plan Service** - Add route:
```python
@app.get("/health")
async def health():
    return {"status": "ok", "service": "plan-service"}
```

---

### Step 7: Documentation (1 hour)

Update `README.md` with:
- Current architecture
- Setup instructions
- Environment variables
- How to run locally
- API endpoints list

---

## Common Issues & Solutions

### Issue: Services can't connect to databases
**Solution**: 
- Check database is running
- Verify connection strings in .env
- Check firewall/port access

### Issue: CORS errors
**Solution**:
- Verify ALLOWED_ORIGINS includes frontend URL
- Check CORS middleware is applied
- Verify credentials are set correctly

### Issue: JWT token errors
**Solution**:
- Ensure same secrets in gateway and auth service
- Check token expiration times
- Verify token format

### Issue: Proxy errors in gateway
**Solution**:
- Verify service URLs are correct
- Check services are running
- Verify path rewriting is correct

---

## Next Steps After MVP

1. Add comprehensive testing
2. Implement API documentation (Swagger)
3. Add monitoring and logging
4. Optimize performance
5. Add CI/CD pipeline
6. Security hardening
7. Add more features

