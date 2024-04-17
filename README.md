# StackOverFlowClone

A Stack Overflow clone built with [React](https://reactjs.org/) and [Node.js](https://nodejs.org/), utilizing [MongoDB](https://www.mongodb.com/) for the database. This project aims to replicate the core functionalities of Stack Overflow, allowing users to ask questions, provide answers, and upvote or downvote both questions and answers.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication:** Users can sign up, log in, and log out securely. Authentication is implemented using JWT (JSON Web Tokens).
- **Ask Questions:** Authenticated users can post questions on various topics.
- **Answer Questions:** Users can answer questions posted by others.
- **Upvote and Downvote:** Users can upvote or downvote both questions and answers.
- **Search Functionality:** Search for questions based on keywords or topics.
- **Tagging System:** Questions can be tagged with relevant topics for better organization and searchability.
- **Markdown Support:** Both questions and answers support Markdown formatting for rich text editing.
- **Responsive Design:** The application is designed to be responsive, providing a seamless experience across devices.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/fab-c14/StackOverFlowClone.git
    ```

2. Navigate to the project directory:

    ```bash
    cd StackOverFlowClone
    ```

3. Install dependencies for both the client and server:

    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

4. Set up the MongoDB database:
    - Install MongoDB if not already installed.
    - Create a new MongoDB database and obtain the connection URI.
    - Create a `.env` file in the `server` directory and add the following:

    ```plaintext
    MONGODB_URI=your_mongodb_connection_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Run the development server:

    ```bash
    # From the server directory
    npm start

    # From the client directory
    npm start
    ```

6. Access the application in your browser at `http://localhost:3000`.

## Usage

- Register for a new account or log in with existing credentials.
- Ask questions by clicking on the "Ask a Question" button.
- Answer questions by navigating to the question page and providing your answer in the provided input field.
- Upvote or downvote questions and answers by clicking on the respective arrows.
- Search for questions using the search bar at the top of the page.
- Tag questions with relevant topics to help organize and search for content efficiently.

## Contributing

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request. Make sure to follow the [code of conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
