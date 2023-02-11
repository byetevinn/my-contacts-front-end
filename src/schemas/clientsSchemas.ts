import * as yup from "yup";

export const createClientSchema = yup.object().shape({
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("Deve deve ser um e-mail válido"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(/[A-Z]/, "Deve conter pelo menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter pelo menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter pelo menos 1 número")
    .matches(/(\W)|_/, "Deve conter pelo menos 1 caractere especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
  fullName: yup.string().required("Campo obrigatório"),
  phone: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[0-9]+$/, "Somente números")
    .min(9, "Deve conter no mínimo 9 dígitos")
    .max(11, "Deve conter no máximo 11 dígitos"),
});

export const updateClientSchema = yup.object().shape({
  email: yup.string().notRequired().email("Deve deve ser um e-mail válido"),
  password: yup
    .string()
    .notRequired()
    .test("password", "Deve conter pelo menos 1 letra maiúscula", (value) => {
      if (!value) return true;
      return /[A-Z]/.test(value);
    })
    .test("password", "Deve conter pelo menos 1 letra minúscula", (value) => {
      if (!value) return true;
      return /([a-z])/.test(value);
    })
    .test("password", "Deve conter pelo menos 1 número", (value) => {
      if (!value) return true;
      return /(\d)/.test(value);
    })
    .test(
      "password",
      "Deve conter pelo menos 1 caractere especial",
      (value) => {
        if (!value) return true;
        return /(\W)|_/.test(value);
      }
    )
    .test("password", "Deve conter no mínimo 8 caracteres", (value) => {
      if (!value) return true;
      return /.{8,}/.test(value);
    }),
  fullName: yup.string().notRequired(),
  phone: yup
    .string()
    .notRequired()
    .matches(/^[0-9]*$/, "Somente números")
    .test("phone", "Deve conter no mínimo 9 dígitos", (value) => {
      if (!value) return true;
      return value.length >= 9;
    })
    .max(11, "Deve conter no máximo 11 dígitos"),
});
