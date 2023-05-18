import axios, { AxiosRequestConfig } from 'axios'

export const api = axios.create({
  baseURL: 'https://api.polinoxmedic.com',
})
interface FormType {
  nombre: string
  celular: string
  correo: string
  mensaje: string
}
export const formPost = async (data: FormType) => {
  try {
    let config: AxiosRequestConfig = {
      method: 'post',
      url: 'https://api.polinoxmedic.com/contacto',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    }
    const response = await axios(config)
    if (!response) {
      throw new Error('No se  pudo enviar la información')
    }

    return response.data
  } catch (error) {
    console.log(error)
  }
}
