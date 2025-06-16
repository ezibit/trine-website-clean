# Deployment Guide for TRINE AI Music Label Website

This guide covers deploying the TRINE AI website to various platforms, with a focus on Netlify + GitHub for optimal workflow.

## 🚀 Quick Deploy to Netlify (Recommended)

### Option 1: GitHub + Netlify (Best for ongoing development)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/trine-website.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Choose GitHub and authorize
   - Select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
     - **Node version**: 18 (set in Environment variables: `NODE_VERSION = 18`)

3. **Custom Domain**:
   - In Netlify dashboard: Site settings → Domain management
   - Add custom domain: `trine.studio`
   - Follow DNS configuration instructions
   - SSL certificate will be auto-provisioned

### Option 2: Direct Deploy (Quick test)

1. **Build locally**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to the deploy area
   - Get instant preview URL

## 🔧 Environment Variables

Set these in your deployment platform:

### Required for Production
```
NODE_VERSION=18
```

### Optional (for future API integration)
```
VITE_API_BASE_URL=https://api.trine.studio
VITE_AIRTABLE_BASE_ID=your_base_id
VITE_AIRTABLE_API_KEY=your_api_key
VITE_FORMSPREE_ID=your_form_id
```

## 📝 Form Handling Setup

### Option 1: Netlify Forms (Easiest)

1. **Update form in `SubmissionPage.jsx`**:
   ```jsx
   <form netlify name="artist-submission" onSubmit={handleSubmit}>
     <input type="hidden" name="form-name" value="artist-submission" />
     {/* rest of form */}
   </form>
   ```

2. **Handle submission**:
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault();
     const formData = new FormData(e.target);
     
     try {
       await fetch('/', {
         method: 'POST',
         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
         body: new URLSearchParams(formData).toString()
       });
       // Handle success
     } catch (error) {
       // Handle error
     }
   };
   ```

### Option 2: Formspree

1. **Sign up at [formspree.io](https://formspree.io)**
2. **Update form action**:
   ```jsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 3: Custom API

Update `src/data/api.js` with your backend endpoint.

## 🌐 Alternative Deployment Platforms

### Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Custom domain**:
   ```bash
   vercel domains add trine.studio
   ```

### GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/trine-website"
   }
   ```

3. **Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

### AWS S3 + CloudFront

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload to S3**:
   - Create S3 bucket
   - Enable static website hosting
   - Upload `dist` folder contents

3. **Setup CloudFront**:
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain

## 🔒 Security Headers

Add these headers in Netlify (`netlify.toml`):

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;"
```

## 📊 Analytics Setup

### Google Analytics 4

1. **Create GA4 property**
2. **Add to `index.html`**:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Netlify Analytics

Enable in Netlify dashboard for server-side analytics.

## 🚀 Performance Optimization

### Build Optimization

1. **Bundle analysis**:
   ```bash
   npm run build -- --analyze
   ```

2. **Code splitting** (already configured in Vite)

3. **Image optimization**:
   - Use WebP format when possible
   - Implement lazy loading
   - Optimize images before upload

### CDN Configuration

Netlify automatically provides global CDN. For other platforms:

- Configure CloudFront (AWS)
- Use Cloudflare
- Enable platform-specific CDN

## 🔄 CI/CD Pipeline

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v2.0
      with:
        publish-dir: './dist'
        production-branch: main
        github-token: ${{ secrets.GITHUB_TOKEN }}
        deploy-message: "Deploy from GitHub Actions"
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**:
   - Check Node.js version (use 18+)
   - Clear node_modules and reinstall
   - Check for missing dependencies

2. **Routing issues**:
   - Add `_redirects` file to `public/`:
     ```
     /*    /index.html   200
     ```

3. **Environment variables not working**:
   - Ensure variables start with `VITE_`
   - Restart development server after adding variables

4. **Form submissions not working**:
   - Check form configuration
   - Verify endpoint URLs
   - Check CORS settings

### Performance Issues

1. **Slow loading**:
   - Optimize images
   - Enable compression
   - Check bundle size

2. **3D scene performance**:
   - Reduce building count
   - Optimize Three.js scene
   - Add performance monitoring

## 📞 Support

For deployment issues:

1. Check platform documentation
2. Review build logs
3. Test locally first
4. Contact platform support if needed

---

**Happy deploying! 🚀**

