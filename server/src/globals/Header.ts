import { GlobalConfig } from "payload/types";
import Logo from "../collections/Logo";

const Header: GlobalConfig = {
    slug: 'footer',
    access: {
        update: ()=>true,
        read: ()=>true,
      },
    fields : [
        {
           name: 'email',
           label: 'Email',
           type: 'email',
        },
        {
            name: 'number',
            label: 'Number',
            type: 'text',
            
         },
         {
            name: 'action_link',
            label: 'Linked Page',
            type: 'text',
            
            
         },
        {
            name: 'logo',
            label: 'Logo',
            type: 'upload',
            relationTo: Logo.slug,
        }
    ]
}

export default Header;