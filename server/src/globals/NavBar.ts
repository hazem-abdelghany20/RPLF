import { GlobalConfig } from "payload/types";

const NavBar: GlobalConfig = {
    slug: 'nav-bar',
    fields : [
        {
            name : 'main-links',
            label : 'Main Links',
            type: 'array',
            required: true,
            fields:[
               {
                    name: 'link',
                    label: 'Link',
                    type: 'text',
                
                }
            ]
        }
    ]
}

export default NavBar;