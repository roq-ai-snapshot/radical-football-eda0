import * as yup from 'yup';
import { playerProfileValidationSchema } from 'validationSchema/player-profiles';

export const playerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  position: yup.string().required(),
  age: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  player_profile: yup.array().of(playerProfileValidationSchema),
});
