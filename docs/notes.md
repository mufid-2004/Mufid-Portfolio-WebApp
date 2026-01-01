# Technical Notes – Assignment 2

## Docker Challenge and Solution

The biggest challenge I faced while working with Docker was running a React + Vite application inside a container in development mode.

At first, the container was building successfully, but the application was not accessible from the browser. After researching and testing, I realized that Vite binds by default to localhost inside the container, which prevents external access.

To solve this issue, I modified the run command to use:
