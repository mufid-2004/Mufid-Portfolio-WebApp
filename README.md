# Mufid Portfolio WebApp

A personal portfolio web application built with React and Vite.  
The project showcases personal information, skills, education, projects, and contact details in a clean and responsive interface.  
The application is fully Dockerized to provide a reliable, repeatable, and professional development environment.

## Features
- Responsive personal portfolio website
- Sections: About, Skills, Education, Projects, Customers, Contact
- Dark / Light mode support
- Smooth scrolling navigation
- Dockerized setup for easy execution

## Tech Stack
- React
- Vite
- JavaScript
- HTML / CSS
- Node.js
- Docker

## Project Structure
Mufid-Portfolio-WebApp/
├─ src/                     Application source code  
├─ docs/                    Documentation files  
│  ├─ screenshots/          Assignment screenshots  
│  └─ notes.md              Technical notes  
├─ Dockerfile               Docker configuration  
├─ .dockerignore            Docker ignore rules  
├─ .gitignore               Git ignore rules  
├─ README.md                Project documentation  

## Run the Project Using Docker

Build the Docker image:
docker build -t mufid-portfolio .

Run the Docker container:
docker run -p 5173:5173 mufid-portfolio

Open your browser and visit:
http://localhost:5173

## Stop the Container
Press CTRL + C in the terminal  
or stop it manually using:
docker ps  
docker stop <container_id>

## Configuration Notes
- Default exposed port: 5173
- No environment variables required
- The project runs using the Vite development server

## How to Test the Application
- Open the website in the browser
- Navigate between sections using the navbar
- Toggle Dark / Light mode
- Click on project cards to view details

## Attribution
This project is an original personal portfolio created by the author.  
No external open-source project was used as a base.
