import { PlayerInterface } from 'interfaces/player';
import { CoachInterface } from 'interfaces/coach';
import { GetQueryInterface } from 'interfaces';

export interface PlayerProfileInterface {
  id?: string;
  player_id: string;
  coach_id: string;
  notes?: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;

  player?: PlayerInterface;
  coach?: CoachInterface;
  _count?: {};
}

export interface PlayerProfileGetQueryInterface extends GetQueryInterface {
  filter: {
    id?: string;
    player_id?: string;
    coach_id?: string;
    notes?: string;
    status?: string;
  };
}
