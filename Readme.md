# Text Summarization Project

## Overview
Text summarization is the process of generating a concise version of a longer text document while preserving its key information and core message. This project uses OpenAI to create an automated text summarization tool. The tool takes lengthy pieces of text, such as articles, research papers, or emails, and generates a shortened version that retains the essential meaning.

## Features
- Summarizes lengthy text into a concise version.
- Preserves the core message and key points of the original text.
- Supports various text formats, including articles, research papers, and emails.

## Project Structure
```
text-summarization-project/
├── index.js         # Main script to run the summarization tool
├── utils.js         # Utility functions for text processing
├── package.json     # Project metadata and dependencies
├── .env             # Environment variables (e.g., OpenAI API key)
└── README.md        # Project documentation
```

## Getting Started
### Prerequisites
- Node.js 14 or higher
- An OpenAI API key

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/text-summarization-project.git
   cd text-summarization-project
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your OpenAI API key:
   ```bash
   OPENAI_API_KEY=your-api-key
   ```

## Usage
1. Run the summarization tool:
   ```bash
   node index.js
   ```
2. Enter the long paragraph in data.txt file in root

## Example
**Input:**  
"Text summarization generates a shortened version of a text document that captures the key points and conveys the essential meaning. It condenses lengthy pieces of text, such as articles, research papers, or emails, into a more digestible format while aiming to preserve the original content's core message."

**Output:**  
"Text summarization creates a concise version of a document, retaining key points and core meaning."

## How It Works
1. **Text Input:** The user provides a long piece of text in data.txt file.
2. **API Request:** The tool sends the text to OpenAI's API.
3. **Summarization:** The API returns a summarized version of the input text.
4. **Output:** The summarized text is displayed to the user.

## Dependencies
- `openai` - Node.js library to interact with the OpenAI API
- `dotenv` - For managing environment variables
- `express` - For listening and responding to request adn starting a server

To install the dependencies manually:
```bash
npm install
```

## License
This project is licensed under the MIT License. You are free to use, modify, and distribute this project as per the license terms.

## Acknowledgements
- [OpenAI](https://openai.com/) for providing the powerful API used in this project.

---
This is a simple project to help users get started with automated text summarization using OpenAI.

