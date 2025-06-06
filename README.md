# FAQ Detection Assistant

## Abstract

The **FAQ Detection Assistant** is a lightweight, intelligent system designed to automatically identify and respond to frequently asked questions in Rocket.Chat environments or via the command line. By leveraging fuzzy string matching techniques, the assistant detects semantically similar questions and responds with accurate, predefined answers. This project aims to improve user support, reduce redundant queries, and serve as a modular reference for AI-enhanced auto-response systems.

---

## Benefits to the Community

Rocket.Chat users and maintainers often face repeated questions across support and discussion channels. This assistant:

- Minimizes human workload by automatically handling FAQs
- Enhances user experience through immediate, accurate responses
- Encourages contribution by exposing users to helpful resources (docs, GitHub links, etc.)
- Demonstrates how AI techniques like string similarity can be embedded in real-time chat systems

It also provides a solid template for future work that integrates Large Language Models (LLMs) or vector-based semantic search.

---

## Deliverables

- A fully functional FAQ Detection Bot using Node.js and TypeScript
- Command-line interface to test the assistant independently
- Integration-ready Rocket.Chat App (`FaqDetectionApp.ts`)
- JSON-based metadata for Rocket.Chat compatibility (`app.json`)
- Documentation and usage instructions

---

## Technical Details

### Core Logic

The assistant uses the [`string-similarity`](https://www.npmjs.com/package/string-similarity) library to compare user inputs with a curated FAQ list. When a similarity score exceeds a defined threshold (e.g., 0.8), the bot responds with the corresponding answer.

### Architecture Overview

| Component | Description |
|----------|-------------|
| `faq.js / faq.ts` | Stores the FAQ dataset in Q&A format |
| `similarity.js / similarity.ts` | Contains fuzzy matching logic |
| `index.js` | CLI interface to run the assistant |
| `FaqDetectionApp.ts` | Rocket.Chat App interface using Apps-Engine |
| `app.json` | App manifest with permissions and metadata |
| `tsconfig.json` | TypeScript configuration for transpilation |

---

## Usage

### 1. Clone and install

```bash
git clone https://github.com/your-username/faq-detection-assistant.git
cd faq-detection-assistant
npm install
````

### 2. Run CLI FAQ bot

```bash
npm start
```

Sample output:

```
🤖 FAQ Assistant is running.
Ask me a question or type "exit" to quit.
```

### 3. Example queries it understands

* “How can I install Rocket.Chat?”
* “What is the license of Rocket.Chat?”
* “Where is your API documentation?”
* “How do I reset the admin password?”

---

## Integration with Rocket.Chat

This project also includes a Rocket.Chat App compatible with the [Apps-Engine](https://developer.rocket.chat/apps-engine/). You can deploy it locally using the Rocket.Chat App framework.

**Minimal app manifest:**

```json
{
  "id": "faq-detection-assistant",
  "name": "FAQ Detection Assistant",
  "version": "0.1.0",
  "requiredApiVersion": "^1.29.0",
  "author": {
    "name": "Your Name",
    "email": "your@email.com"
  },
  "classFile": "FaqDetectionApp.ts",
  "description": "Detects frequently asked questions and replies automatically.",
  "permissions": [
    "messages:read",
    "messages:write",
    "users:read",
    "rooms:read"
  ]
}
```

---

## Future Work (Stretch Goals)

* Integrate semantic search using embeddings or vector databases (e.g., Pinecone, Weaviate)
* Extend with LLM APIs (OpenAI, Gemini) for intelligent fallback answers
* Dockerize for easy deployment in CI/CD environments
* Web interface for editing FAQ entries live

---

## About the Author

**Ritika Singh**
Google Summer of Code 2025 Applicant
✉️ ritikasingh9019@gmail.com
🌐 github.com/Ritika-Singh999

---

## License

This project is licensed under the MIT License.
