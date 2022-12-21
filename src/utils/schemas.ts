import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string().required('E-mail é obrigatório').email('E-mail Inválido!'),
  password: Yup.string().required('Senha é obrigatório'),
});
