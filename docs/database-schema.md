# Database Schema

## users
   id
   name
   email
   created_at

## resumes
   id
   user_id
   file_url
   extracted_skill
   uploaded_at

## applications
   id
   user_id
   company_name
   role
   status
   applied_date
   current_stage
   
## emails
   id
   application_id
   sender
   subject
   email_body
   classification
   recieved_at

## job_descriptions
   id
   application_id
   required_skills
   preferred_skills

## skills_gap
   id
   user_id
   skill name
   frequence
   
## recommendations
   id
   user_id
   recommendation
   generated_at
