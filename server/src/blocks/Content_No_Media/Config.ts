import { Block } from 'payload/types';
import BlockMedia from '../../collections/BlockMedia';

export const ContentNoMedia: Block = {
  slug: 'content_no_media',
  labels: {
    singular: 'Content With No Media',
    plural: 'Content With No Media Blocks',
  },
  fields: [

    {
      name: 'headline',
      label: 'Headline',
      required:true,
      type: 'text'
    },
    {
      name: 'paragraph',
      label: 'Paragraph',
      required:true,
      type: 'text'
    },
  ],
};


export default ContentNoMedia;
