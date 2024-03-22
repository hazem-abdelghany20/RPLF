import { Block } from 'payload/types';
import BlockMedia from '../../collections/BlockMedia';

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
        }
      ]
    },
  ],
};


export default ImageSlider;
