export default {
  name: 'feature',
  type: 'document',
  title: 'Homepage Feature',
  fields: [
    { name: 'headline', type: 'string', title: 'Headline' },
    { name: 'artist', type: 'reference', to: [{type: 'artist'}], title: 'Artist' },
    { name: 'release', type: 'reference', to: [{type: 'release'}], title: 'Release' },
    { name: 'image', type: 'image', title: 'Feature Image' },
    { name: 'description', type: 'text', title: 'Feature Description' }
  ]
};
