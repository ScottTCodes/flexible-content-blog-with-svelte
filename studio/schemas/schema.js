// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import siteWide from './documents/siteWide'
import page from './documents/page'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import bioPortableText from './objects/bioPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import components from './components'

export default createSchema({
  name: 'blog',
  types: schemaTypes.concat([
    siteWide,
    post,
    page,
    category,
    author,
    authorReference,
    mainImage,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    ...components
  ])
})
