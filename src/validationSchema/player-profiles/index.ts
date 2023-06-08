import * as yup from 'yup';

export const playerProfileValidationSchema = yup.object().shape({
  notes: yup.string(),
  status: yup.string().required(),
  player_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable().required(),
});
