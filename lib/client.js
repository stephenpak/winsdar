import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '013h5p0c',
  dataset: 'production',
  apiVersion: '2022-08-03',
  useCdn: true,
  token: process.env.WINDSAR_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);