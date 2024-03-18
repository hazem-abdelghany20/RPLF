import { CollectionConfig } from 'payload/types';


const Admins: CollectionConfig = {
  slug: "admins",
  auth: true,
  access: {
    create: ()=>true,
    update: ()=>true,
    delete: ()=>true,
    read: ()=>true,
  },
  fields: [
    {
      name: 'full_name',
      label: 'Full Name',
      type: 'text',
    },
    {
      name: 'super_admin',
      label: 'Super Admin',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'text',
      saveToJWT: false,
      required: false,

    },
  ],
};

export default Admins;
