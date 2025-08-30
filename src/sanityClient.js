// src/sanityClient.js
import { createClient } from '@sanity/client';

export default createClient({
  projectId: 'dawovvht',        // from your sanity.config.js
  dataset: 'production',        // or your dataset name
  apiVersion: '2023-07-25',     // use a recent date
  useCdn: true,                 // `true` = fast, cache, good for published content
});
