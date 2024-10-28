# Setup frontend in NextJS:

1. create a project by command mentioned below.
        -npx create-next-app@latest
        -cd innovative-frontend

2. create a Dockerfile in the root of your project.
        
3. Create a .dockerignore file to avoid copying unnecessary files into the Docker image. 
        Pasted below code in .dockerignore file:

             node_modules
             npm-debug.log

4. Build and run the Docker container.
    - Run the following commands from your project root:

        # Build the Docker image
        docker build -t nextjs-app .

        # Run the Docker container
        docker run -p 8080:5000 nextjs-app

    Now the NextJS app should now be accessible at http://localhost:8080

5. Docker Compose for development.
    -Create a docker-compose.yml file.

    version: '3'

    services:
    app:
        build: .
        ports:
        - '3000:3000'
        volumes:
        - .:/app
        - /app/node_modules
        command: npm run dev

### (NOTE): before running this script, make sure to login the docker.
6. Then run:
    -docker-compose up

