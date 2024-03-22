import { CollectionConfig } from 'payload/types';
import { Type as ImageType } from '../blocks/Image/Component';
import { CallToAction } from '../blocks/CallToAction/Config';
import { Type as CallToActionType } from '../blocks/CallToAction/Component';
import  ContentOverMedia  from '../blocks/Content_Over_Media/Config';
import ContentBelowMedia from '../blocks/Content_Below_Media/Config';
import ContentLeftMedia from '../blocks/Content_Left_Media/Config';
import ContentRightMedia from '../blocks/Content_Right_Media/Config';
import ContentNoMedia from '../blocks/Content_No_Media/Config';
import ImageSlider from '../blocks/Image_Slider/Config';
import Hero from '../blocks/Hero/Config';
import { Type as ContentType } from '../blocks/Content_Over_Media/Component';

export type Layout = CallToActionType | ContentType | ImageType

export type Type = {
  title: string
  slug: string
  //images?: MediaType,
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
    create: ()=>true,
    update: ()=>true,
    delete: ()=>true,
    read: ()=>true,
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
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        Hero,
        ContentOverMedia,
        ContentBelowMedia,
        ContentLeftMedia,
        ContentRightMedia,
        ContentNoMedia,
        CallToAction,
        ImageSlider
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
