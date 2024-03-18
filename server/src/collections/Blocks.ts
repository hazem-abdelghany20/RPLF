import { CollectionConfig } from 'payload/types';


const Blocks: CollectionConfig = {
  slug: "blocks",
  auth: true,
  access: {
    create: ()=>true,
    update: ()=>true,
    delete: ()=>true,
    read: ()=>true,
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
            {
                label: 'Call to action',
                value: 'sliding_content'
            },
        ]
    }
  ],
};

export default Blocks;
