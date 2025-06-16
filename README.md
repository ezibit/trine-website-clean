# TRINE AI Music Label Website v1.1

A modern, interactive website for TRINE AI Music Label built with React, Vite, and Three.js.

## 🚀 Features

- **Interactive 3D Background**: Static animated wireframe cityscape using Three.js
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Artist Submission Form**: Multi-step form for artist onboarding
- **Modern Typography**: Custom font stack (Tektur, Anta from Google Fonts)
- **Dark Theme**: Cyberpunk-inspired design with red accents
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom CSS
- **3D Graphics**: Three.js + React Three Fiber
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm (can use npm/yarn)

## 📁 Project Structure

```
trine-website-v1.1/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer, Layout components
│   │   ├── three/         # Three.js 3D scene components
│   │   └── ui/            # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── data/              # Mock data and API placeholders
│   └── assets/            # Images, fonts, etc.
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd trine-website-v1.1

# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
pnpm build
# or
npm run build

# Preview the build locally
pnpm preview
# or
npm run preview
```

## 🌐 Deployment

### Netlify (Recommended)

1. **Connect to GitHub**:
   - Push your code to a GitHub repository
   - Connect your GitHub repo to Netlify

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18+

3. **Environment Variables** (if needed):
   - Add any API keys or configuration in Netlify dashboard

4. **Custom Domain**:
   - Add `trine.studio` in Netlify domain settings
   - Update DNS records as instructed

### Vercel

1. **Connect Repository**: Import your GitHub repo
2. **Framework Preset**: Vite
3. **Build Settings**: Auto-detected
4. **Domain**: Add custom domain in project settings

### Manual Deployment

Upload the contents of the `dist` folder to any static hosting provider.

## 🔌 API Integration Ready

The project includes placeholder structures for future API integration:

### Data Layer (`src/data/`)

- `artists.js` - Mock artist data with API placeholder
- `releases.js` - Mock release data with API placeholder
- `api.js` - API client setup for future backend integration

### Airtable Integration

To connect with Airtable:

1. Install Airtable SDK: `npm install airtable`
2. Update `src/data/api.js` with Airtable configuration
3. Replace mock data calls with Airtable queries

### REST API Integration

The project is structured to easily swap mock data with REST API calls:

```javascript
// Example: Replace mock data in src/data/artists.js
export const getArtists = async () => {
  // Replace this mock data call
  // return mockArtists;
  
  // With actual API call
  const response = await fetch('/api/artists');
  return response.json();
};
```

## 📝 CMS Integration Options

### Option 1: TinaCMS (Recommended)
- **Best for**: Git-based workflow, developer-friendly
- **Integration**: Add TinaCMS to existing React components
- **Content**: Markdown files in repository
- **Setup**: `npm install tinacms` and configure

### Option 2: Netlify CMS
- **Best for**: Simple setup, non-technical users
- **Integration**: Add admin panel at `/admin`
- **Content**: Git-based with web interface
- **Setup**: Add `admin/config.yml` and deploy

### Option 3: Payload CMS
- **Best for**: Full-featured headless CMS
- **Integration**: Separate backend with REST/GraphQL API
- **Content**: Database-driven with admin panel
- **Setup**: Separate Payload installation

### Option 4: Strapi
- **Best for**: Flexible content types, REST/GraphQL
- **Integration**: Headless CMS with admin panel
- **Content**: Database-driven
- **Setup**: Separate Strapi installation

## 🎨 Customization

### Colors

Update the color scheme in `src/App.css`:

```css
:root {
  --accent: #ff0000;        /* Red accent color */
  --background: #000000;    /* Black background */
  --foreground: #ffffff;    /* White text */
  /* ... other colors */
}
```

### Fonts

The project uses Google Fonts (Tektur, Anta). To add custom fonts:

1. Add font files to `public/fonts/`
2. Update `index.html` with font links
3. Update CSS font-family declarations

### 3D Scene

Modify the Three.js scene in `src/components/three/ThreeScene.jsx`:

- Adjust building generation in the `Scene` component
- Modify colors, lighting, and camera movement
- Add new 3D elements or animations

## 📧 Form Handling

The submission form (`src/pages/SubmissionPage.jsx`) includes:

- Multi-step form validation
- File upload placeholders
- Email integration ready

### Connect to Backend

To connect the form to a backend service:

1. **Netlify Forms**: Add `netlify` attribute to form
2. **Formspree**: Update form action to Formspree endpoint
3. **Custom API**: Update form submission handler in `SubmissionPage.jsx`

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint (if configured)

### Code Structure

- **Components**: Reusable UI components in `src/components/`
- **Pages**: Route-level components in `src/pages/`
- **Hooks**: Custom React hooks in `src/hooks/`
- **Utils**: Helper functions in `src/lib/`
- **Data**: Mock data and API clients in `src/data/`

## 🐛 Troubleshooting

### Common Issues

1. **Three.js not loading**: Check browser console for WebGL support
2. **Build errors**: Ensure Node.js version is 18+
3. **Font loading**: Verify Google Fonts links in `index.html`

### Performance

- The 3D scene is optimized for performance
- Consider reducing building count for lower-end devices
- Use `React.memo()` for expensive components if needed

## 📄 License

This project is proprietary to TRINE AI Music Label.

## 🤝 Contributing

This is a private project. For internal development:

1. Create feature branches from `main`
2. Follow existing code style and structure
3. Test thoroughly before merging
4. Update documentation as needed

## 📞 Support

For technical support or questions about this codebase, contact the development team.

---

**TRINE AI Music Label** - Where human vision meets machine precision. 🚀🧬

