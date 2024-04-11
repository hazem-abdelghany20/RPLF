import { Block } from 'payload/types';
import BlockMedia from '../../collections/BlockMedia';

export const BackgroundWithTitle: Block = {
  slug: 'background_with_title',
  labels: {
    singular: 'Background With Title',
    plural: 'Background With Title Blocks',
  },
  fields: [

    {
      name: 'headline',
      label: 'Headline or Title',
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


export default BackgroundWithTitle;
