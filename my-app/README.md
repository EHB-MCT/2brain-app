# Project Title

## Description

This project is a web application built using React for the frontend, Node.js for the backend, and PostgreSQL for the database. It includes features such as user authentication and recommendations powered by OpenAI's GPT-3.5.

## Installation

### Prerequisites

- Node.js
- Docker
- Docker Compose

### Steps

1. Clone the repository

    ```bash
    git clone 
    ```

2. Navigate into the project directory

    ```bash
    cd project-title
    ```

3. Install backend dependencies

    ```bash
    cd backend
    npm install
    ```

4. Install frontend dependencies

    ```bash
    cd frontend
    npm install
    ```

5. Build Docker images and start services (PostgreSQL, pgAdmin, and Watchtower)

    ```bash
    docker-compose up -d
    ```

## Usage

1. Start the backend

    ```bash
    cd backend
    npm start
    ```

2. Start the frontend

    ```bash
    cd frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Features

- User Authentication
- AI-powered recommendations
- Secure Password Storage

## API Endpoints

- `/getAdvice`: Retrieves AI-powered advice based on user input.
- `/create-user`: Creates a new user.

## Environment Variables

Please create a `.env` file in your backend folder and populate it with the necessary variables for database connections and API keys.

## License

This project is licensed under the MIT License.

## Acknowledgements

- OpenAI GPT-3.5 for providing the AI service.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

