# API design
# Authentication
# Google login
POST/auth/google
Purpose:
Authenticate  users using Google OAuth

# User
# Get user profile
GET/users/profile
Purpose:
Fetch logged in user interface

# Resume
# Upload resume
POST/resume/upload
Purpose:
Upload and analyse resume
Output:
Skills
Experience
Education
Projects

# Get resume
GET/resume
Purpose:
Retrieve uploaded resume details

# GMAIL
# Connect GMAIL
POST/gmail/connect 
Purpose:
Connect dedicated job search gmail account

# Sync Emails
POST/gmail/synch
Purpose:
Fetch latest recruitment details

# Applications
# Get applications
GET/applications
Purpose:
Fetch all tracked applications

# Get application details
GET/applications/{id}
Purpose:
Fetch specific application information

# Job description
# Upload job description
POST/job-description/upload 
Purpose:
Upload a job description

# Analyze match
POST/job-description/analyze
Pupose:
Check resume with job description
Output:
Match score
Missing skills
Recommendations

# Analytics
# Dashboard analytics
GET/analytics
Purpose:
Fetch application statistics
Output:
Total applications
Rejections
Interviews
Offers
Response rate

# Skill gaps
# Get skill gaps
GET/skill-gaps
Purpose:
Retrieve most frequently missed skills

# Recommendations
# Generate recommendations
POST/recommendation/generate
Purpose:
Generate AI career recommendations

# Get recommendation
GET/recommendations
Purpose:
Fetch latest career recommendations




  


