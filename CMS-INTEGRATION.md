# CMS Integration Guide for TRINE AI Music Label

This guide covers integrating various Content Management Systems (CMS) with the TRINE AI website for easy content management.

## 🎯 CMS Options Overview

| CMS | Best For | Complexity | Cost | Integration |
|-----|----------|------------|------|-------------|
| **TinaCMS** | Developers, Git workflow | Medium | Free/Paid | Git-based |
| **Netlify CMS** | Simple setup, non-technical users | Low | Free | Git-based |
| **Payload CMS** | Full-featured, custom needs | High | Free/Paid | API-based |
| **Strapi** | Flexible, popular | Medium | Free/Paid | API-based |
| **Sanity** | Real-time, structured content | Medium | Free/Paid | API-based |

## 🔧 Option 1: TinaCMS (Recommended)

TinaCMS provides a Git-based workflow with visual editing capabilities.

### Installation

```bash
npm install tinacms @tinacms/cli
```

### Configuration

1. **Create TinaCMS config** (`tina/config.js`):

```javascript
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "artist",
        label: "Artists",
        path: "content/artists",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Artist Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "genre",
            label: "Genre",
            required: true,
          },
          {
            type: "rich-text",
            name: "bio",
            label: "Biography",
            isBody: true,
          },
          {
            type: "image",
            name: "image",
            label: "Artist Image",
          },
          {
            type: "object",
            name: "socialLinks",
            label: "Social Links",
            fields: [
              { type: "string", name: "twitter", label: "Twitter" },
              { type: "string", name: "instagram", label: "Instagram" },
              { type: "string", name: "youtube", label: "YouTube" },
            ],
          },
          {
            type: "string",
            name: "aiTools",
            label: "AI Tools",
            list: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Artist",
          },
        ],
      },
      {
        name: "release",
        label: "Releases",
        path: "content/releases",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Release Title",
            isTitle: true,
            required: true,
          },
          {
            type: "reference",
            name: "artist",
            label: "Artist",
            collections: ["artist"],
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Release Type",
            options: ["Single", "EP", "Album"],
            required: true,
          },
          {
            type: "string",
            name: "genre",
            label: "Genre",
            required: true,
          },
          {
            type: "datetime",
            name: "releaseDate",
            label: "Release Date",
            required: true,
          },
          {
            type: "string",
            name: "catalogNumber",
            label: "Catalog Number",
            required: true,
          },
          {
            type: "image",
            name: "artwork",
            label: "Artwork",
            required: true,
          },
          {
            type: "rich-text",
            name: "description",
            label: "Description",
            isBody: true,
          },
          {
            type: "object",
            name: "tracks",
            label: "Tracks",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Track Title" },
              { type: "string", name: "duration", label: "Duration" },
              { type: "string", name: "preview", label: "Preview URL" },
            ],
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Release",
          },
        ],
      },
    ],
  },
});
```

2. **Add scripts to package.json**:

```json
{
  "scripts": {
    "tina:dev": "tinacms dev -c \"npm run dev\"",
    "tina:build": "tinacms build",
    "tina:admin": "tinacms admin"
  }
}
```

3. **Update data fetching** in `src/data/artists.js`:

```javascript
import { client } from '../tina/__generated__/client';

export const getArtists = async () => {
  const { data } = await client.queries.artistConnection();
  return data.artistConnection.edges.map(edge => edge.node);
};
```

### Usage

```bash
# Development with TinaCMS
npm run tina:dev

# Build for production
npm run tina:build
```

## 📝 Option 2: Netlify CMS

Simple, file-based CMS that works great with static sites.

### Setup

1. **Create admin folder** (`public/admin/`):

```yaml
# public/admin/config.yml
backend:
  name: git-gateway
  branch: main

media_folder: "public/uploads"
public_folder: "/uploads"

collections:
  - name: "artists"
    label: "Artists"
    folder: "content/artists"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Name", name: "name", widget: "string" }
      - { label: "Genre", name: "genre", widget: "string" }
      - { label: "Biography", name: "bio", widget: "markdown" }
      - { label: "Image", name: "image", widget: "image" }
      - label: "Social Links"
        name: "socialLinks"
        widget: "object"
        fields:
          - { label: "Twitter", name: "twitter", widget: "string", required: false }
          - { label: "Instagram", name: "instagram", widget: "string", required: false }
          - { label: "YouTube", name: "youtube", widget: "string", required: false }
      - { label: "AI Tools", name: "aiTools", widget: "list", field: { label: "Tool", name: "tool", widget: "string" } }
      - { label: "Featured", name: "featured", widget: "boolean", default: false }

  - name: "releases"
    label: "Releases"
    folder: "content/releases"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Artist", name: "artist", widget: "string" }
      - { label: "Type", name: "type", widget: "select", options: ["Single", "EP", "Album"] }
      - { label: "Genre", name: "genre", widget: "string" }
      - { label: "Release Date", name: "releaseDate", widget: "datetime" }
      - { label: "Catalog Number", name: "catalogNumber", widget: "string" }
      - { label: "Artwork", name: "artwork", widget: "image" }
      - { label: "Description", name: "description", widget: "markdown" }
      - label: "Tracks"
        name: "tracks"
        widget: "list"
        fields:
          - { label: "Title", name: "title", widget: "string" }
          - { label: "Duration", name: "duration", widget: "string" }
          - { label: "Preview URL", name: "preview", widget: "string", required: false }
      - { label: "Featured", name: "featured", widget: "boolean", default: false }
```

2. **Create admin HTML** (`public/admin/index.html`):

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</head>
<body>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>
```

3. **Enable Git Gateway** in Netlify:
   - Go to Site settings → Identity
   - Enable Identity service
   - Enable Git Gateway

### Usage

Access CMS at: `https://yoursite.com/admin`

## 🚀 Option 3: Payload CMS

Full-featured headless CMS with admin panel.

### Installation

```bash
npx create-payload-app trine-cms
cd trine-cms
npm install
```

### Configuration

1. **Configure collections** (`src/collections/Artists.ts`):

```typescript
import { CollectionConfig } from 'payload/types';

const Artists: CollectionConfig = {
  slug: 'artists',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'genre',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        { name: 'twitter', type: 'text' },
        { name: 'instagram', type: 'text' },
        { name: 'youtube', type: 'text' },
      ],
    },
    {
      name: 'aiTools',
      type: 'array',
      fields: [
        { name: 'tool', type: 'text' },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};

export default Artists;
```

2. **Update frontend API calls**:

```javascript
// src/data/api.js
const PAYLOAD_API_URL = process.env.VITE_PAYLOAD_API_URL || 'http://localhost:3001/api';

export const getArtists = async () => {
  const response = await fetch(`${PAYLOAD_API_URL}/artists`);
  const data = await response.json();
  return data.docs;
};
```

### Deployment

Deploy Payload CMS separately (Heroku, Railway, etc.) and connect via API.

## 🎨 Option 4: Strapi

Popular headless CMS with great flexibility.

### Installation

```bash
npx create-strapi-app@latest trine-strapi
cd trine-strapi
npm run develop
```

### Configuration

1. **Create content types** in Strapi admin panel:
   - Artists collection
   - Releases collection
   - Configure fields as needed

2. **Update API calls**:

```javascript
// src/data/api.js
const STRAPI_API_URL = process.env.VITE_STRAPI_API_URL || 'http://localhost:1337/api';

export const getArtists = async () => {
  const response = await fetch(`${STRAPI_API_URL}/artists?populate=*`);
  const data = await response.json();
  return data.data;
};
```

## 🔄 Migration Strategy

### From Mock Data to CMS

1. **Phase 1**: Set up CMS with basic content types
2. **Phase 2**: Migrate existing mock data to CMS
3. **Phase 3**: Update API calls to use CMS
4. **Phase 4**: Add admin authentication and permissions

### Data Migration Script

```javascript
// scripts/migrate-data.js
import { mockArtists } from '../src/data/artists.js';

const migrateArtists = async () => {
  for (const artist of mockArtists) {
    await fetch(`${CMS_API_URL}/artists`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(artist),
    });
  }
};

migrateArtists();
```

## 🔐 Authentication & Permissions

### Role-Based Access

1. **Admin**: Full access to all content
2. **Editor**: Can edit existing content
3. **Contributor**: Can create drafts

### Implementation

```javascript
// src/hooks/useAuth.js
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me');
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, checkAuth };
};
```

## 📊 Content Workflow

### Editorial Workflow

1. **Draft**: Content created but not published
2. **Review**: Content ready for review
3. **Published**: Content live on site
4. **Archived**: Content removed from site but kept in CMS

### Implementation

```javascript
// Add status field to content types
{
  name: 'status',
  type: 'select',
  options: ['draft', 'review', 'published', 'archived'],
  defaultValue: 'draft',
}

// Filter published content in API calls
export const getPublishedArtists = async () => {
  return await getArtists({ status: 'published' });
};
```

## 🔧 Development Workflow

### Local Development

1. **Start CMS**: `npm run cms:dev`
2. **Start frontend**: `npm run dev`
3. **Access admin**: `http://localhost:3000/admin`

### Production Deployment

1. **Deploy CMS** to hosting platform
2. **Update environment variables** in frontend
3. **Deploy frontend** with CMS integration

## 📞 Support & Resources

### Documentation Links

- [TinaCMS Docs](https://tina.io/docs/)
- [Netlify CMS Docs](https://www.netlifycms.org/docs/)
- [Payload CMS Docs](https://payloadcms.com/docs/)
- [Strapi Docs](https://docs.strapi.io/)

### Community

- Join CMS-specific Discord/Slack communities
- Check GitHub issues for troubleshooting
- Follow CMS blogs for updates and best practices

---

**Choose the CMS that best fits your workflow and technical requirements! 🎯**

