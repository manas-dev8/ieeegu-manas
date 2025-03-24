import createImageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';

const imageBuilder = createImageUrlBuilder(client);

export const urlFor = (source: any) => {
  return imageBuilder.image(source).auto('format');
};
