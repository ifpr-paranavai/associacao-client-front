export const removeMask = value => {
  return value.replace(/[^\d]/gi, '')
}

export const parseJWT = token => {
  return JSON.parse(Buffer.from(token.split('.')[1], 'base64'))
}
