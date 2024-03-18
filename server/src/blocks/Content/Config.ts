import { Block } from 'payload/types';

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'block_type',
      label: 'Type Of Block',
      type: 'radio',
      options:[
          {
              label: 'Content above media',
              value: 'content_above_media'
          },
          {
              label: 'Content under media',
              value: 'content_under_media'
          },
          {
              label: 'Content left to media',
              value: 'content_left_to_media'
          },
          {
              label: 'Content right to media',
              value: 'content_right_to_media'
          },
          {
              label: 'Content with no media',
              value: 'content_with_no_media'
          },
          {
              label: 'Content with no media',
              value: 'content_with_no_media'
          },
          {
              label: 'Sliding media',
              value: 'sliding_media'
          },
          {
              label: 'Sliding content',
              value: 'sliding_content'
          },
      ]
  },
    {
      name: 'content',
      type: 'richText',
    },
  ],
};


export default Content;
