import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ParentInterface {
  id?: string;
  name: string;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;

  user?: UserInterface;
  _count?: {};
}

export interface ParentGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    name?: string;
    user_id?: string;
  };
}
