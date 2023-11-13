
# Chat App with Socket.IO

This is a simple real-time chat application built with Node.js, Express, and Socket.IO. The chat interface is designed to resemble WhatsApp, providing a clean and appealing user experience.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Hierarchy](#project-hierarchy)
- [License](#license)

## Features

- Real-time chat with Socket.IO
- User authentication with a prompt for entering a name
- Timestamps for each message
- System messages for user join notifications
- WhatsApp-like interface

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/whosetheboss95s/chatapp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chat-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node server.js
   ```

2. Open your browser and go to [http://localhost:3000](http://localhost:3000).

3. Enter your name when prompted and start chatting!

## Project Hierarchy

The project structure is organized as follows:

```plaintext
project-root
|-- public
|   |-- index.html
|-- server.js
|-- styles.css
|-- README.md
|-- .gitignore
```

- **`public`**: Contains static files, including the main HTML file (`index.html`).
- **`server.js`**: Node.js server script responsible for handling WebSocket connections and serving static files.
- **`styles.css`**: CSS file for styling the chat interface.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`README.md`**: Documentation file providing information about the project.


Feel free to customize the content based on additional details about your project. If you have specific sections or details you'd like to include, let me know, and I can help adjust the `README.md` accordingly.
