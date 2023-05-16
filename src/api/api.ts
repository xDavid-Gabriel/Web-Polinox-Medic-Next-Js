import axios, { AxiosRequestConfig } from 'axios'

export const api = axios.create({
  baseURL: 'https://api.polinoxmedic.com',
})

export const formPost = async (data: any) => {
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

    return response
  } catch (error) {
    console.log(error)
  }
}
