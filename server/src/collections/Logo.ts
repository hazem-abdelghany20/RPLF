import { CollectionConfig } from 'payload/types'

const Logo: CollectionConfig = {
  slug: 'logo',
  labels:{
    singular: 'Logo',
  },
  access: {
    read: ()=> true,
    create: ()=> true,
    delete: ()=> true,
    update: ()=> true,
  },
  upload: {
    staticURL: '.././public/logo',
    staticDir: 'logo',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 100,
        height: 100,
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

export default Logo;