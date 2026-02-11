# Fitness Planner

A production-ready fitness web app that generates safe, beginner-friendly workout plans and Indian diet plans based on user goals, experience, and preferences.

## System Architecture
- Frontend: Next.js + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB (optional local connection; falls back to memory if not configured)
- Deployment: Vercel (frontend) + Render or Railway (backend)

## Folder Structure
- `frontend/` Next.js app
- `backend/` Express API + services + tests

## Features
- Personalized workout plans (bulking, muscle build, fat loss, weight loss, maintenance)
- Exercise guidance: instructions, target muscles, mistakes, safety tips
- Indian diet plans with calorie and macro targets
- Daily dashboard with workout checklist and nutrition targets

## Run Locally

### Backend
1. `cd backend`
2. `cp .env.example .env` and update MongoDB URI
3. `npm install`
4. `npm run dev`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## API Endpoints
- `POST /api/profile` Create user profile
- `POST /api/workout/generate` Generate weekly workout plan
- `GET /api/workout/daily/:planId?day=Monday` Fetch a daily workout
- `POST /api/meals/generate` Generate weekly meal plan
- `GET /api/meals/daily/:planId?day=Monday` Fetch daily meals
- `POST /api/meals/complete` Mark a meal as completed

## Testing
Backend tests include unit and integration checks.

```
cd backend
npm test
```

## Deployment Steps
1. Push repo to GitHub
2. Deploy `frontend/` to Vercel
3. Deploy `backend/` to Render or Railway
4. Set environment variables on backend (`MONGODB_URI`, `PORT`)
5. Update frontend API base URL to production backend URL

## Safety Notes
- No medical advice
- Calories are clamped to safe ranges
- Beginner plans avoid unsafe exercises

## Post-Deployment Verification
- Load homepage
- Create plan
- Verify workout + meals render
- Check API health (`/health`)

## License
MIT
