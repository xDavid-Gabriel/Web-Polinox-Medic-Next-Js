import tw from 'twin.macro'
import { Button } from '../Button/Button'
import { FaTruck } from 'react-icons/fa'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './Form.form'
import { formPost } from '../../../api'
export const Form = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async formValues => {
      try {
        await formPost(formValues)
        formik.handleReset({ target: { value: '' } })
      } catch (error) {
        if (error) {
          console.log(error)
        }
      }
    },
  })
  return (
    <form
      tw="grid gap-4 sm:grid-cols-2 sm:gap-7"
      onSubmit={formik.handleSubmit}
    >
      <div tw="flex flex-col gap-4">
        <label tw="font-semibold text-aqua">Nombre Completo</label>
        <div>
          <input
            css={formik.errors.nombre ? tw`border-red-500` : tw`border-aqua`}
            value={formik.values.nombre}
            onChange={formik.handleChange}
            name="nombre"
            type="text"
            placeholder="Ingrese su nombre completo"
            tw="w-full bg-aqua/10 p-4 rounded-[20px] border-[2px]  outline-none placeholder:text-aqua"
          />
          {formik.errors.nombre && (
            <p tw="text-red-500">{formik.errors.nombre}</p>
          )}
        </div>
      </div>
      <div tw="flex flex-col gap-4">
        <label tw="font-semibold text-aqua">Celular</label>
        <div>
          <input
            css={formik.errors.celular ? tw`border-red-500` : tw`border-aqua`}
            value={formik.values.celular}
            onChange={formik.handleChange}
            name="celular"
            type="text"
            placeholder="Ingrese su número"
            tw="w-full bg-aqua/10 p-4 rounded-[20px] border-[2px]  outline-none placeholder:text-aqua"
          />
          {formik.errors.celular && (
            <p tw="text-red-500">{formik.errors.celular}</p>
          )}
        </div>
      </div>
      <div tw="flex flex-col gap-4 sm:col-span-2">
        <label tw="font-semibold text-aqua">Correo</label>
        <div>
          <input
            css={formik.errors.correo ? tw`border-red-500` : tw`border-aqua`}
            value={formik.values.correo}
            onChange={formik.handleChange}
            name="correo"
            type="email"
            placeholder="Ingrese su correo electrónico"
            tw="w-full bg-aqua/10 p-4 rounded-[20px] border-[2px] outline-none placeholder:text-aqua"
          />
          {formik.errors.correo && (
            <p tw="text-red-500">{formik.errors.correo}</p>
          )}
        </div>
      </div>
      <div tw="flex flex-col gap-4 sm:col-span-2">
        <label tw="font-semibold text-aqua">Mensaje</label>
        <div>
          <textarea
            css={formik.errors.mensaje ? tw`border-red-500` : tw`border-aqua`}
            value={formik.values.mensaje}
            onChange={formik.handleChange}
            name="mensaje"
            placeholder="Ingrese su mensaje"
            tw="w-full bg-aqua/10 p-4 rounded-[20px] border-[2px] outline-none placeholder:text-aqua h-[200px]"
          />
          {formik.errors.mensaje && (
            <p tw="text-red-500">{formik.errors.mensaje}</p>
          )}
        </div>
      </div>
      <strong tw="sm:col-span-2 text-aqua flex items-center gap-5">
        Envió a todo nivel nacional <FaTruck size={27} />
      </strong>
      <Button css={tw`w-fit px-12`} type="submit" variant="tertiary">
        Enviar
      </Button>
    </form>
  )
}
