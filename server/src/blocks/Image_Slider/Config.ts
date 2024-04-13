import { Block } from 'payload/types';
import BlockMedia from '../../collections/BlockMedia';
type Data = Record<string, unknown>;

const customURLCondition = (_: Data, siblings: Data): boolean => siblings.type === 'custom';

export const ImageSlider: Block = {
  slug: 'image_slider',
  labels: {
    singular: 'Image Slider',
    plural: 'Image Slider Blocks',
  },
  fields: [

    {
      name: 'images',
      label: 'Images',
      required:true,
      type: 'array',
      fields:[
        {
          name:'image',
          label:'Image',
          required:true,
          type:'upload',
          relationTo: BlockMedia.slug
        },
        {
          name:'alt',
          type:'text'
        },
        {
          type: 'row',
          fields: [
           
            // {
            //   name: 'type',
            //   label: 'Image Actions',
            //   type: 'radio',
            //   defaultValue: 'page',
            //   options: [
            //     {
            //       label: 'Page',
            //       value: 'page',
            //     },
            //     {
            //       label: 'Custom URL',
            //       value: 'custom',
            //     },
            //   ],
            //   admin: {
            //     width: '50%',
            //     layout: 'horizontal',
            //   },
            // },
            {
              name: 'type',
              label: 'Image Actions',
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
    },
  ],
};


export default ImageSlider;
