import { PlayerProfileInterface } from 'interfaces/player-profile';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CoachInterface {
  id?: string;
  name: string;
  experience: string;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
  player_profile?: PlayerProfileInterface[];
  user?: UserInterface;
  _count?: {
    player_profile?: number;
  };
}

export interface CoachGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    name?: string;
    experience?: string;
    user_id?: string;
  };
}
