import { Block } from 'payload/types';
import BlockMedia from '../../collections/BlockMedia';

export const ContentRightMedia: Block = {
  slug: 'content_right_media',
  labels: {
    singular: 'Content Right to Media',
    plural: 'Content Right to Media Blocks',
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
      type: 'upload',
      required:true,
      relationTo: BlockMedia.slug,
    }
  ],
};


export default ContentRightMedia;
