# Chat Application

This is a realtime chat application built using React, Vite, and Appwrite.

## Table of Contents

- [Working](#working)
- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [License](#license)

## Working

<https://github.com/user-attachments/assets/d826d67a-5436-45fb-ad49-6fae100463f9>

## Features

- User authentication
- Real-time messaging
- Delete messages
- Protected routes
- Responsive design

## Installation

To get this project up and running locally, follow these step-by-step instructions.

In order to install and run this project locally, you would need to have the following installed on your local machine.

- [Node.js](https://nodejs.org)
- [NPM](https://www.npmjs.com)
- [Git](https://git-scm.com)

### Steps

1. Clone the repository:

    ```sh
    git clone https://github.com/alvinsjoy/Chat.git
    cd Chat
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a `.env.local` file in the root directory and add your environment variables:

    ```env
    VITE_API_ENDPOINT=https://cloud.appwrite.io/v1
    VITE_PROJECT_ID=
    VITE_DATABASE_ID=
    VITE_COLLECTION_ID_MESSAGES=
    ```

4. Run the development server:

    ```sh
    npm run dev
    ```

5. Open <http://localhost:5173> to view in the browser.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run lint`: Run ESLint to check for linting errors.
- `npm run preview`: Preview the production build locally.

## Environment Variables

The following environment variables are required:

- `VITE_API_ENDPOINT`: The API endpoint for Appwrite (defaults to <https://cloud.appwrite.io/v1>).
- `VITE_PROJECT_ID`: The project ID for the Appwrite project.
- `VITE_DATABASE_ID`: The database ID for Appwrite database.
- `VITE_COLLECTION_ID_MESSAGES`: The collection ID for messages collection of the database.

## License

This project is licensed under the MIT License.
Feel free to customize it further based on your specific requirements.
