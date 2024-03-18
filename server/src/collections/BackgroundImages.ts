import { CollectionConfig } from 'payload/types'

const BackgroundImages: CollectionConfig = {
  slug: 'background_images',
  labels:{
    singular: 'Background Image',
    plural: 'Background Images'
  },
  access: {
    read: ()=> true,
    create: ()=> true,
    delete: ()=> true,
    update: ()=> true,
  },
  upload: {
    staticURL: '.././public/background',
    staticDir: 'background',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 800,
        height: 800,
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

export default BackgroundImages;