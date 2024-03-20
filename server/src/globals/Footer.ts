import { GlobalConfig } from "payload/types";
import  FooterLogo  from "../collections/FooterLogo";
const Footer: GlobalConfig = {
    slug: 'footer',
    access: {
        update: ()=>true,
        read: ()=>true,
      },
    fields : [
        {
           name: 'contact-info',
           label: 'Contact Info',
           type: 'array',
           fields:[
            {
                name: 'contact',
                label: 'Contact',
                type: 'text',
            }
           ],
           
        },
        {
            name: 'instagram',
            label: 'Instagram Link',
            type: 'text',
            
            
         },
         {
            name: 'youtube',
            label: 'Youtube Link',
            type: 'text',
            
            
         },
         {
            name: 'facebook',
            label: 'Facebook Link',
            type: 'text',
            
            
         },
        {
            name: 'location',
            label: 'Location',
            type: 'text',
        },
        {
            name: 'pages-to-link',
            label: 'Pages to Link',
            type: 'array',
            fields:[
                {
                    name: 'link',
                    label: 'Link',
                    type: 'text'
                }
            ]
        },
        {
            name: 'footer_logo',
            label: 'Footer Logo',
            type: 'upload',
            relationTo: FooterLogo.slug,
        }
    ]
}

export default Footer;