# 🤖 Google AI Setup Instructions

To enable AI-powered code generation, you need to set up Google AI (Gemini) API access.

## Step 1: Get Google AI API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key

## Step 2: Configure Environment Variables

1. Open the `.env` file in your project root
2. Replace `your_google_ai_api_key_here` with your actual API key:

```env
REACT_APP_GOOGLE_AI_API_KEY=AIzaSyA...your_actual_key_here
```

## Step 3: Restart the Application

After updating the `.env` file:

```bash
npm start
```

## How It Works

The application now uses a **three-tier approach**:

1. **Google AI (Primary)**: Direct client-side generation using Gemini
2. **Backend API (Fallback)**: If Google AI fails, tries the backend server
3. **Static Fallback**: If both fail, shows a template-based result

## Security Note

- Your API key is used client-side only
- Keep your API key secure and don't commit it to version control
- Consider using environment-specific configurations for production

## Testing

Once configured, try generating code with prompts like:
- "Create a tic-tac-toe game"
- "Build a todo list app"
- "Make a weather dashboard"

The console will show which generation method was used.
