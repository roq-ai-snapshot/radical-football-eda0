import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AcademyInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
  user_id: string;
  tenant_id: string;

  user?: UserInterface;
  _count?: {};
}

export interface AcademyGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    name?: string;
    description?: string;
    image?: string;
    user_id?: string;
    tenant_id?: string;
  };
}
