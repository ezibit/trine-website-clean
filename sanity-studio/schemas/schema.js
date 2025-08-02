// /sanity-studio/schemas/schema.js
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import artist from './artist'
import release from './release'
import feature from './feature'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([artist, release, feature])
})
