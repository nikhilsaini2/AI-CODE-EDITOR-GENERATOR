# Vercel Deployment Guide

## Quick Fix for Common Issues

### 1. Build Command Issues
If Vercel is not building correctly:
- Ensure `package.json` has the correct build script: `"build": "react-scripts build"`
- Check that all dependencies are in `dependencies` not `devDependencies`

### 2. Environment Variables
Set these environment variables in your Vercel dashboard:
- `REACT_APP_API_URL` - Should be your Vercel deployment URL (e.g., `https://your-app.vercel.app`)
- `GOOGLE_GENAI_API_KEY` - Your Google AI API key

### 3. Node.js Version
- The project uses Node.js 18.x (specified in `.nvmrc` and `package.json`)
- Vercel should automatically detect and use this version

### 4. Common Vercel Deployment Steps

1. **Connect Repository to Vercel:**
   ```bash
   # Install Vercel CLI (optional)
   npm i -g vercel
   
   # Deploy from command line
   vercel
   ```

2. **Via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Environment Variables Setup:**
   - Go to your project settings in Vercel
   - Add environment variables:
     - `REACT_APP_API_URL`: `https://your-project-name.vercel.app`
     - `GOOGLE_GENAI_API_KEY`: Your Google AI API key

### 5. Troubleshooting Build Errors

**React 19 Compatibility:**
If you get React 19 warnings, they are usually safe to ignore in production builds.

**Monaco Editor Issues:**
The Monaco Editor is dynamically loaded and should work fine in production.

**Memory Issues:**
If the build runs out of memory, try:
- Using Node.js 18 (already configured)
- Removing unused dependencies

### 6. File Structure for Vercel

Your project should have:
```
├── api/
│   └── generate.js          # Vercel API function
├── src/                     # React source code
├── public/                  # Static files
├── build/                   # Built files (generated)
├── package.json
├── vercel.json             # Vercel configuration
├── .nvmrc                  # Node version
└── .vercelignore           # Files to ignore
```

### 7. Testing Deployment Locally

```bash
# Install Vercel CLI
npm i -g vercel

# Test locally
vercel dev

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### 8. Common Error Solutions

**"Command failed with exit code 1":**
- Check build logs for specific errors
- Ensure all imports are correct
- Verify all dependencies are installed

**"Function timeout":**
- API functions have a 10s timeout on hobby plans
- Optimize your API functions

**"Module not found":**
- Check that all imports use correct case
- Verify file paths are correct

### 9. Production Environment Variables

Make sure these are set in Vercel dashboard:
- `REACT_APP_API_URL`: Your Vercel app URL
- `GOOGLE_GENAI_API_KEY`: Google AI API key
- Any other `REACT_APP_*` variables you need

### 10. Final Deployment Checklist

- [ ] All environment variables set in Vercel
- [ ] `vercel.json` configuration is correct
- [ ] Build succeeds locally with `npm run build`
- [ ] API functions work locally with `vercel dev`
- [ ] No hardcoded localhost URLs in code
- [ ] All dependencies in `package.json`
