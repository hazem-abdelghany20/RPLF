import { CollectionConfig } from 'payload/types'

const BlockMedia: CollectionConfig = {
  slug: 'block_media',
  labels:{
    singular: 'Block Media',
    plural: 'Block Media',

  },
  access: {
    read: ()=> true,
    create: ()=> true,
    delete: ()=> true,
    update: ()=> true,
  },
  upload: {
    staticURL: '.././public/block-media',
    staticDir: 'block-media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 400,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};

export default BlockMedia;