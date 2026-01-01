# Technical Notes – OS LAB Assignment 2

## Docker Challenge and Solution

The main challenge faced in this assignment was running a React + Vite application inside a Docker container and accessing it from the host machine.

Although the Docker image was built successfully, the application was not accessible from the browser at first. The issue was caused by Vite binding to localhost inside the container by default.

This problem was solved by running the Vite development server using:
vite --host

This allowed the application to listen on all network interfaces, making it accessible through the mapped Docker port.

## Git and GitHub Lessons Learned

This assignment emphasized professional Git and GitHub practices. Through this work, I learned how to:
- Organize a clean and professional repository structure
- Write meaningful commit messages that reflect real development progress
- Document the project clearly using README files
- Maintain a clear and professional commit history

Overall, this assignment improved my understanding of Dockerized workflows and professional version control using GitHub.