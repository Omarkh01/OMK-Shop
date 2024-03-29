import SanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
  projectId: '1r01ljd8',
  dataset: 'production',
  apiVersion: '2022-08-01',
  useCdn: true,
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

