export default {
  name: 'artist',
  type: 'document',
  title: 'Artist',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'image', type: 'image', title: 'Artist Image' },
    { name: 'genre', type: 'string', title: 'Genre' },
    { name: 'bio', type: 'text', title: 'Bio/Description' }
  ]
};
