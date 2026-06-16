# CareerLens AI Architecture
# High level architecture
User
↓
Frontend (Next.js)
↓
Backend API (FastAPI)
↓
PostgreSQL Database
Backend coomunicates with:
Gmail API
Gemini API

# Frontend responsibilities
Authentication
Resume upload
Dashboard
Analytics visualization
Recommendation display
Job description upload

# Backend responsibilities
User management
Resume processing
Gmail integration
Email classification
Analytics engine
Recommendation engine

# Database responsibilities
Stores:
Users
Resumes
Applications
EMails
Job descriptions 
Skill gaps
Recommendations

# AI responsibilities
Gemini AI performs:
Resume parsing
Skill extraction
Job description analysis
Skill gap detection
Career recommendation generation

# Gmail integration flow
User
↓
Google OAuth
↓
Gmail Readonly Access
↓
Email Fetching
↓
Email Classification
↓
Database Update
↓
Dashboard Update

# Analytics flow
Applications
+
Emails
+
Job Descriptions
↓
Analytics Engine
↓
Insights
↓
Recommendations


