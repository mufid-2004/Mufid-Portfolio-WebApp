Deployment Notes – Assignment 3

VPS Deployment Experience

This assignment required deploying the Dockerized project from Assignment 2 to a production-like VPS environment.

Challenges Faced

1. VPS Setup Problems  
The initial VPS provider failed to create the workspace correctly.  
The issue was resolved by switching to an alternative web-based Docker environment.

2. Vite External Host Blocking  
When running the container, the application was not accessible externally due to Vite blocking unknown hosts.  
This was solved by running Vite with the --host flag inside Docker.

3. Missing Tools on VPS  
Some basic tools such as nano were not available in the VPS environment.  
The solution was editing files locally, pushing them to GitHub, then pulling the updated version on the VPS.

4. Container Stopping After Session Ends  
When the VPS session stopped, the container stopped as well.  
The solution was rebuilding and running the container again using Docker commands.

Lessons Learned

- How to deploy a Dockerized application to a VPS
- How to use GitHub repositories in production environments
- How to troubleshoot Docker networking issues
- How Docker simplifies deployment and environment consistency

Final Result

The project was successfully deployed on a VPS and accessed through the server IP using Docker.