# AI Chat Application

A modern, feature-rich AI chat application built with Next.js 14, featuring streaming responses, persistent chat history, and a beautiful glassmorphism UI.

## Features

- **Real-time Streaming**: Get AI responses in real-time with smooth streaming
- **Chat History**: Persistent chat sessions saved to localStorage
- **Multiple Conversations**: Create, manage, and switch between multiple chat sessions
- **Edit & Delete**: Rename or delete chat history entries
- **Beautiful UI**: Modern glassmorphism design with animated gradients
- **Mobile Responsive**: Fully responsive design for desktop and mobile devices
- **Quick Prompts**: Pre-defined quick action buttons to start conversations
- **Auto-scroll**: Automatically scrolls to latest messages with jump-to-latest button
- **Stop Generation**: Ability to stop AI response generation mid-stream
- **Markdown Support**: Renders markdown formatting in AI responses

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Runtime**: Edge Runtime for optimal performance
- **AI/ML**: Vercel AI SDK with Groq API
- **Model**: Llama 3.3 70B Versatile
- **Styling**: Tailwind CSS with custom glassmorphism effects
- **Markdown**: React Markdown for message rendering
- **Storage**: LocalStorage for chat history persistence

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Groq API key from [console.groq.com](https://console.groq.com)

### Installation

1. Clone the repository
```bash
git clone https://github.com/syedamehakzahra/Week5_AI-Chat.git
cd Week5_AI-Chat
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables

Create a `.env.local` file in the root directory:
```env
GROQ_API_KEY=your_groq_api_key_here
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run linting checks

## Project Structure

```
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js          # API endpoint for chat streaming
│   ├── globals.css               # Global styles and CSS variables
│   ├── layout.js                 # Root layout component
│   └── page.js                   # Main chat interface component
├── lib/
│   └── ai.js                     # AI configuration and setup
├── .env.local                    # Environment variables
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind CSS configuration
├── next.config.js                # Next.js configuration
└── README.md                     # Project documentation
```

## Configuration

### AI Configuration (`lib/ai.js`)

The application is configured with the following AI settings:

- **Model**: `llama-3.3-70b-versatile`
- **System Prompt**: "You are a helpful AI assistant. Provide clear, concise, and accurate responses."
- **Temperature**: 0.7 (balanced creativity)
- **Max Output Tokens**: 1024

You can modify these settings in `lib/ai.js` to customize the AI behavior.

## Key Features Explained

### Streaming Responses
The application uses Vercel AI SDK's `streamText` function to provide real-time streaming responses from the Groq API. This creates a smooth, ChatGPT-like experience where text appears incrementally.

### Chat History Persistence
All chat sessions are saved to the browser's localStorage, allowing users to:
- Access previous conversations across browser sessions
- Switch between multiple chats
- Resume conversations exactly where they left off

### Glassmorphism UI
The interface features modern glassmorphism design elements:
- Semi-transparent backgrounds with backdrop blur
- Gradient accents (cyan, blue, purple)
- Smooth animations and transitions
- Ambient background glow effects

### Responsive Design
The sidebar automatically adapts:
- **Desktop**: Toggle sidebar with hamburger menu
- **Mobile**: Slide-out sidebar with overlay
- Touch-friendly interface elements

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Your Groq API key for AI model access | Yes |

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is created for educational purposes as part of an internship project.

## Credits

Developed by **Syeda Mehak Zahra**

---

Built with ❤️ using Next.js and Groq AI