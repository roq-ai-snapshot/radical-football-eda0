import { PlayerProfileInterface } from 'interfaces/player-profile';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PlayerInterface {
  id?: string;
  name: string;
  position: string;
  age: number;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
  player_profile?: PlayerProfileInterface[];
  user?: UserInterface;
  _count?: {
    player_profile?: number;
  };
}

export interface PlayerGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    name?: string;
    position?: string;
    user_id?: string;
  };
}
