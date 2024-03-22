import { Block } from 'payload/types';
import BlockMedia from '../../collections/BlockMedia';
import { CallToAction } from '../CallToAction/Config';
import ImageSlider from '../Image_Slider/Config';
export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Hero Blocks',
  },
  fields: [

    {
      name: 'headline',
      label: 'Headline',
      required:true,
      type: 'text'
    },
    {
      name:'logo',
      label:'Logo',
      required:true,
      type: 'upload',
      relationTo: BlockMedia.slug,
    },
    {
      name:'background_image',
      label:'Background Image',
      required:true,
      type: 'upload',
      relationTo: BlockMedia.slug,
    },
    {
      label: 'Left Call To Action Block',
      required:true,
      type: 'collapsible',
      fields: [
        {
          name: 'left_cta',
          required:true,
          type: 'blocks',
          minRows: 1,
          blocks:[
            CallToAction
          ]
        }
      ]
    },
    {
      label: 'Right Call To Action Block',
      required:true,
      type: 'collapsible',
      fields: [
        {
          name: 'right_cta',
          required:true,
          type: 'blocks',
          minRows: 1,
          blocks:[
            CallToAction
          ]
        }
      ]
    },
    {
      label: 'Image Slider',
      required:true,
      type: 'collapsible',
      fields: [
        {
          name: 'image_slider',
          required:true,
          type: 'blocks',
          minRows: 1,
          blocks:[
            ImageSlider          
          ]
        }
      ]
    }
  ],
};


export default Hero;
