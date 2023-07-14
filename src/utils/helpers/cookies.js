import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const setCookies = (name, value, expired) => {
  cookies.set(name, value, { path: '/' , maxAge: expired})
}

export const removeCookies = (name) => {
  cookies.remove(name, { path: '/' })
}

export const getCookies = (name) => {
  return cookies.get(name) || null
}

export const isAuth = () => {
  // Checks if there is a saved token and it's still valid
  const token = getCookies('logined')

  return !!token // handwaiving here
}