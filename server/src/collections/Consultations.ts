import { CollectionConfig } from 'payload/types';
import { phoneValidator } from '../utils/validators';

const Consultations: CollectionConfig = {
  slug: "consultations",
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
      required: true
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'text',
      required: true,
      validate: phoneValidator(true)
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,

    },
  ],
};

export default Consultations;
