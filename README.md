# Idea2Market-AI  --> https://idea2market-ai.netlify.app/

Idea2Market-AI is a web application that takes product idea input, generates logos, and finds similar products in the market using the OpenAI API. It's built with React.js and leverages the power of artificial intelligence to enhance the product ideation process.

## Features

- **Idea Input**: Users can submit their product ideas via a simple form.
- **Logo Generation**: The application uses OpenAI's capabilities to create unique logos based on the input.
- **Market Match**: Idea2Market-AI searches existing marketplaces to find similar products or competitors.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd Idea2Market-AI`.
3. Install dependencies: `npm install`.

## Usage

**->To utilize the generate button, please ensure you have access to the OpenAI API. Once obtained, create a .env file and add that in variable REACT_APP_OPENAI_API_KEY**

1. Start the development server: `npm start`.
2. Open your browser and visit `http://localhost:3000`.
3. Enter your product idea and explore the generated logos.

## Docker Setup

To run Idea2Market-AI using Docker, follow these steps:

**->To utilize the generate button, please ensure you have access to the OpenAI API. Once obtained, create a .env file and add that in variable REACT_APP_OPENAI_API_KEY**

1. Make sure you have Docker installed on your system.
2. Build the Docker image: docker build -t idea2market-ai .
3. Run the Docker container: docker run -p 3000:3000 idea2market-ai
4. Open your browser and visit `http://localhost:3000`.

## Contributing

Contributions are welcome! If you'd like to improve this project or add new features, feel free to submit a pull request.

