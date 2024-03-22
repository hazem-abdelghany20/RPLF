import { Block } from 'payload/types';
import BlockMedia from '../../collections/BlockMedia';

export const ContentLeftMedia: Block = {
  slug: 'content_left_media',
  labels: {
    singular: 'Content Left to Media',
    plural: 'Content Left to Media Blocks',
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
    {
      name:'media',
      label:'Media',
      required:true,
      type: 'upload',
      relationTo: BlockMedia.slug,
    }
  ],
};


export default ContentLeftMedia;
