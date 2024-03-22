import { Block } from 'payload/types';
import BlockMedia from '../../collections/BlockMedia';

export const ContentBelowMedia: Block = {
  slug: 'content_below_media',
  labels: {
    singular: 'Content Below Media',
    plural: 'Content Below Media Blocks',
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


export default ContentBelowMedia;
