import { Block } from 'payload/types';

export const Numbers: Block = {
  slug: 'numbers',
  labels: {
    singular: 'Numbers',
    plural: 'Numbers Blocks',
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
      type: 'text'
    },
    {
      label: 'Numbers Section 1',
      required:true,
      type: 'collapsible',
      fields: [
        {
          name: 'number1',
          label: 'Number',
          required:true,
          type: 'number'
        },
        {
          name: 'sub_headline_1',
          label: 'Headline',
          required:true,
          type: 'text'
        },
        {
          name: 'sub_paragraph_1',
          label: 'Paragraph',
          type: 'text'
        },
        
      ]
    },
    {
      label: 'Numbers Section 2',
      required:true,
      type: 'collapsible',
      fields: [
        {
          name: 'number2',
          label: 'Number',
          required:true,
          type: 'number'
        },
        {
          name: 'sub_headline_2',
          label: 'Headline',
          required:true,
          type: 'text'
        },
        {
          name: 'sub_paragraph_2',
          label: 'Paragraph',
          type: 'text'
        },
        
      ]
    },
    {
      label: 'Numbers Section 3',
      required:true,
      type: 'collapsible',
      fields: [
        {
          name: 'number3',
          label: 'Number',
          required:true,
          type: 'number'
        },
        {
          name: 'sub_headline_3',
          label: 'Headline',
          required:true,
          type: 'text'
        },
        {
          name: 'sub_paragraph_3',
          label: 'Paragraph',
          type: 'text'
        },
        
      ]
    }
  ],
};


export default Numbers;
