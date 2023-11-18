# Simple Business Loan Application System

This project is a simple business loan application system consisting of a frontend and backend. It allows users to fill in business details, request a loan, and receive a decision outcome based on predefined rules.

## Project Structure

```plaintext
/project-root
  /backend
    Dockerfile
    server.js
    package.json
  /frontend
    Dockerfile
    public
    src
    package.json
  docker-compose.yml

    /backend: Contains the backend server code.
    /frontend: Contains the frontend React application.
    docker-compose.yml: Docker Compose configuration file.

Getting Started
Prerequisites

Make sure you have Docker and Docker Compose installed on your machine.

    Docker
    Docker Compose

Running the Application

    Clone the repository:

    bash

git clone https://github.com/Rajmendra/loan-application.git
cd loan-application

Build and run the Docker containers:

bash

    docker-compose up

    The frontend will be accessible at http://localhost:3000, and the backend at http://localhost:3001.

    Access the application in your web browser.

Frontend Styling

The frontend has basic styling to enhance the visual appearance. CSS files are located in /frontend/src/App.css.
Components
Loan Application Form

    Located in /frontend/src/components/LoanApplicationForm.js.
    Allows users to fill in business details, select accounting providers, and submit loan applications.

Decision Outcome

    Located in /frontend/src/components/DecisionOutcome.js.
    Displays the decision outcome, applying conditional styles (green for approval, red for disapproval).

Backend Logic

    The backend logic is implemented in /backend/server.js.
    Simulates loan application processing, decision engine integration, and fetching balance sheets.

Rules and Assumptions

    Business rules and assumptions are defined in the project description.
    Adjustments can be made in the backend logic based on specific requirements.

Author

Rajmendra Rawat
License

This project is licensed under the MIT License - see the LICENSE file for details.