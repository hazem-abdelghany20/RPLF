import { Block } from 'payload/types';
import BlockMedia from '../../collections/BlockMedia';
type Data = Record<string, unknown>;

const customURLCondition = (_: Data, siblings: Data): boolean => siblings.type === 'custom';
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
        },
        {
          type: 'row',
          fields: [
           
    
            {
              name: 'type',
              label: 'Content Actions',
              type: 'select',  // Changed from 'radio' to 'select'
              defaultValue: '',  // Default to none
              options: [
                {
                  label: 'None',  // Allows for no selection
                  value: '',
                },
                {
                  label: 'Page',
                  value: 'page',
                },
                {
                  label: 'Custom URL',
                  value: 'custom',
                },
              ],
              admin: {
                width: '50%',
               // layout: 'horizontal',
              },
            },
          ],
        },
        {
          name: 'page',
          label: 'Page to link to',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
          admin: {
            condition: (_: Data, siblings: Data): boolean => siblings.type === 'page',
          },
        },
        {
          name: 'url',
          label: 'Button URL',
          type: 'text',
          required: true,
          admin: {
            condition: customURLCondition,
          },
        },
        {
          name: 'newTab',
          type: 'checkbox',
          label: 'Open in new tab',
          required: true,
          admin: {
            condition: customURLCondition,
          },
        },
      ]
    }

  ],
};


export default ContentSlider;
