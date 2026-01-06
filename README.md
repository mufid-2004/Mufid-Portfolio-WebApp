# Mufid Portfolio WebApp

A personal portfolio web application built using React and Vite as part of the Operating Systems Lab assignments.  
The project presents personal information, skills, projects, and contact details, and is fully Dockerized to ensure consistent development and deployment environments.

## Tech Stack
React  
Vite  
JavaScript  
HTML / CSS  
Docker  
Git & GitHub  

## Project Description
This project is a single-page web application that represents a personal portfolio.  
It allows visitors to view skills, projects, experience, and contact information through a clean and responsive interface.

## Running the Project Locally with Docker

Build Docker image:
docker build -t mufid-portfolio .

Run Docker container:
docker run -p 5173:5173 mufid-portfolio

Open in browser:
http://localhost:5173

## Production Deployment on VPS

Install Git and Docker:
git --version
docker --version

If not installed:
sudo apt update
sudo apt install git docker.io -y

Clone the repository:
git clone https://github.com/mufid-2004/Mufid-Portfolio-WebApp.git
cd Mufid-Portfolio-WebApp

Build Docker image:
docker build -t mufid-portfolio .

Run Docker container:
docker run -p 80:5173 mufid-portfolio

## Production URL
http://<VPS-IP>

## Screenshots
All required screenshots are available inside:
docs/screenshots/

## Author
Mufid Nemer Shahada  
Islamic University of Gaza  
Operating Systems Lab  