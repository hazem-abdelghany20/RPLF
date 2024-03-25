import { Block } from 'payload/types';
import BlockMedia from '../../collections/BlockMedia';

export const ContentSlider: Block = {
  slug: 'content_slider',
  labels: {
    singular: 'Content Slider',
    plural: 'Content Slider Blocks',
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
      name:'content_array',
      label:'Content In Slider',
      type:'array',
      fields:[
        {
          name:'content',
          label:'Content',
          type:'text'
        }
      ]
    }
  ],
};


export default ContentSlider;
