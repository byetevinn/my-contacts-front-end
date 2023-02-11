import * as yup from "yup";

export const createContactSchema = yup.object().shape({
  email: yup
    .string()
    .required("Campo obrigatório")
    .email("Deve deve ser um e-mail válido"),
  fullName: yup.string().required("Campo obrigatório"),
  phone: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[0-9]+$/, "Somente números")
    .min(9, "Deve conter no mínimo 9 dígitos")
    .max(11, "Deve conter no máximo 11 dígitos"),
});

export const updateContactSchema = yup.object().shape({
  email: yup.string().notRequired().email("Deve deve ser um e-mail válido"),
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
