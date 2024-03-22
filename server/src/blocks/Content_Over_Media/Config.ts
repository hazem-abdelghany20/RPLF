import { Block } from 'payload/types';
import BlockMedia from '../../collections/BlockMedia';

export const ContentOverMedia: Block = {
  slug: 'content_over_media',
  labels: {
    singular: 'Content Over Media',
    plural: 'Content Over Media Blocks',
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


export default ContentOverMedia;
