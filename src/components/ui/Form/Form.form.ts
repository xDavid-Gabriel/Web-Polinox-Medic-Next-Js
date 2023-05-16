import * as Yup from 'yup'

export const initialValues = () => {
  return {
    nombre: '',
    celular: '',
    correo: '',
    mensaje: '',
  }
}

export const validationSchema = () => {
  return Yup.object({
    correo: Yup.string()
      .email('Ingrese un correo valido')
      .required('Este campo es requerido'),
    nombre: Yup.string().required('Este campo es requerido'),
    celular: Yup.string().required('Este campo es requerido'),
    mensaje: Yup.string().required('Este campo es requerido'),
  })
}
