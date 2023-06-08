import * as yup from 'yup';

export const academyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  tenant_id: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
