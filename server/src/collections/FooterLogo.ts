import { CollectionConfig } from 'payload/types'

const FooterLogo: CollectionConfig = {
  slug: 'footer_logo',
  labels:{
    singular: 'Footer Logo',
  },
  access: {
    read: ()=> true,
    create: ()=> true,
    delete: ()=> true,
    update: ()=> true,
  },
  upload: {
    staticURL: '.././public/footer',
    staticDir: 'footer',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 200,
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

export default FooterLogo;