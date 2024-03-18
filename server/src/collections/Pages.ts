import { CollectionConfig } from 'payload/types';
import { Image } from '.././blocks/Image/Config';
import { Type as ImageType } from '../blocks/Image/Component';
import { CallToAction } from '../blocks/CallToAction/Config';
import { Type as CallToActionType } from '../blocks/CallToAction/Component';
import { Content } from '../blocks/Content/Config';
import { Type as ContentType } from '../blocks/Content/Component';
import BackgroundImages from './BackgroundImages';
import { MediaType } from './Media';
//import {Image} from '../../blocks/Image/Config'


export type Layout = CallToActionType | ContentType | ImageType

export type Type = {
  title: string
  slug: string
  images?: MediaType,
  layout: Layout[]
  meta: {
    title?: string
    description?: string
    keywords?: string
  }
}

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, 
  },
  fields: [
    {
      name: 'linked_to',
      label: 'Linked to',
      type: 'select',
      hasMany: false,
      required: true,
      admin: {
        isClearable: true,
      },
      options: [
        // 1. ABOUT US
        // 2. PRACTICE AREAS
        // 3. PEOPLE
        // 4. PARTNERS IN SUCCESS
        // 5. IMMIGRATION
        // 6. LEGAL TRANSLATION
        // 7. CAREERS
        // 8. LAWS & NEWS
        // 9. CONTACT US
        {
          label: 'Home',
          value: 'home',
        },
        {
          label: 'About Us',
          value: 'about_us',
        },
        {
          label: 'Practice Areas',
          value: 'practice_areas',
        },
        {
          label: 'People',
          value: 'people',
        },
        {
          label: 'Partners In Success',
          value: 'partners_in_sucess',
        },
        {
          label: 'Immigration',
          value: 'immigration',
        },
        {
          label: 'Legal Translation',
          value: 'legal_translation',
        },
        {
          label: 'Careers',
          value: 'careers',
        },
        {
          label: 'Laws & News',
          value: 'laws_and_news',
        },
        {
          label: 'Contact Us',
          value: 'contact_us',
        },

      ],
    },
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      name: 'background_image',
      label: 'Background Image',
      type: 'upload',
      relationTo: BackgroundImages.slug,
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        CallToAction,
        Content,
        Image,
      ],
     // value:""
    },
    {
      name: 'meta',
      label: 'Page Meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
        },
        {
          name: 'keywords',
          label: 'Keywords',
          type: 'text',
        },
      ],
    },
    {
      name: 'slug',
      label: 'Page Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
     
    },
  ],
};

export default Page;
