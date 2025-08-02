export default {
  name: 'release',
  type: 'document',
  title: 'Release',
  fields: [
    { name: 'title', type: 'string', title: 'Release Title' },
    { name: 'artist', type: 'reference', to: [{type: 'artist'}], title: 'Artist' },
    { name: 'image', type: 'image', title: 'Cover Image' },
    { name: 'type', type: 'string', title: 'Type (LP, Single, etc.)' },
    { name: 'releaseDate', type: 'date', title: 'Release Date' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'featured', type: 'boolean', title: 'Featured Release' }
  ]
};
