import { useState } from 'react'
import tw from 'twin.macro'
import { Button } from '../Button/Button'
import { BasicModal } from '../BasicModal/BasicModal'
import { OptimizedImage } from '../OptimizedImg/OptimizedImg'
import { FaCheck, FaTruck } from 'react-icons/fa'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './Form.form'
import { formPost } from '../../../api'
import { ImSpinner } from 'react-icons/im'

export const Form = () => {
  const [show, setShow] = useState(false)
  const [succes, setSucces] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async formValues => {
      onOpenClose() // Mostrar el modal
    },
  })

  const onOpenClose = () => setShow(prevState => !prevState)

  const handleModalAccept = async () => {
    setIsLoading(true)
    try {
      setTimeout(() => {
        setSucces(true) // Cambiar el estado de la variable
        setIsLoading(false)
      }, 1000)
      await formPost(formik.values) // Enviar los datos del formulario
      formik.handleReset({ target: { value: '' } }) // Restablecer el estado del formulario
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
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

        <Button
          css={tw`w-fit px-12`}
          type="submit"
          variant="tertiary"
          onClick={() => setSucces(false)}
        >
          Enviar
        </Button>
      </form>
      <BasicModal show={show} styleBasicModal={tw`max-w-[500px] text-white`}>
        {isLoading ? (
          <div tw="flex justify-center items-center ">
            <ImSpinner size={35} tw="animate-spin" />
          </div>
        ) : succes ? (
          <div tw="flex flex-col gap-5 items-center text-center">
            <p tw="font-semibold lg:text-xl">Mensaje enviado correctamente</p>
            <div tw="bg-green-500 w-9 h-9 rounded-full grid place-content-center">
              <FaCheck size={20} />
            </div>
            <Button onClick={onOpenClose}>Aceptar</Button>
          </div>
        ) : (
          <>
            <strong tw="lg:text-xl">
              Se enviara con los siguientes datos:
            </strong>
            <ul tw="flex flex-col gap-4 mt-5">
              <li>
                <strong>Nombre Completo :</strong> {formik.values.nombre}
              </li>
              <li>
                <strong>Celular :</strong> {formik.values.celular}
              </li>
              <li>
                <strong>Correo :</strong> {formik.values.correo}
              </li>
              <li>
                <strong>Mensaje :</strong> {formik.values.mensaje}
              </li>
            </ul>

            <div tw="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handleModalAccept}>Aceptar</Button>
              <Button
                css={tw`bg-red-500 text-white hover:bg-red-600`}
                onClick={onOpenClose}
              >
                Cancelar
              </Button>
            </div>
          </>
        )}
      </BasicModal>
    </>
  )
}
