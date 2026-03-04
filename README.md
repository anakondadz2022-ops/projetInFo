
# Iron Forge Gym - Local Setup Guide

This project is a high-performance fitness landing page with an AI Coach integrated using the Google Gemini API.

## Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- A Google Gemini API Key from [Google AI Studio](https://aistudio.google.com/)

## Getting Started

1. **Install Dependencies**
   Open your terminal in the project root and run:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   - Create a file named `.env` in the root directory.
   - Copy the content from `.env.example` into `.env`.
   - Replace `your_gemini_api_key_here` with your actual API key.

3. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The application will be running at `http://localhost:5173`.

## Building for Production
To create an optimized build for deployment:
```bash
npm run build
```
The output will be in the `dist/` folder.

## 🚀 Deployment to Netlify

This project is optimized for Netlify. Follow these steps to deploy:

1.  **Push to GitHub**: Push your code to a GitHub repository.
2.  **Connect to Netlify**:
    *   Log in to [Netlify](https://app.netlify.com/).
    *   Click **"Add new site"** > **"Import an existing project"**.
    *   Select your GitHub repository.
3.  **Build Settings**:
    *   **Build Command**: `npm run build`
    *   **Publish directory**: `dist`
4.  **Environment Variables**:
    *   Go to **Site settings** > **Environment variables**.
    *   Add a new variable:
        *   Key: `API_KEY`
        *   Value: *Your Gemini API Key*
5.  **Deploy**: Click **"Deploy site"**.

The `netlify.toml` file included in the root handles all SPA redirects automatically.

## Features
- **Elite UI**: Custom Tailwind CSS design with high-impact fitness imagery.
- **AI Coach**: Interactive fitness consultant powered by `gemini-3-flash-preview`.
- **Training Calendar**: Dynamic workout schedule visualization.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.
