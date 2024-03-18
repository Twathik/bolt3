/* eslint-disable no-nested-ternary */
export const authEndpoint: string =
  process.env.NODE_ENV === 'production'
    ? 'http://auth:4000'
    : 'http://localhost:4000'

// eslint-disable-next-line no-shadow
export enum errorType {
  // eslint-disable-next-line no-unused-vars
  global,
  // eslint-disable-next-line no-unused-vars
  field,
}
export interface errorPayload {
  type: errorType
  path: string
  message: string
}

export function generateError(ePayload: errorPayload): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = {}

  switch (ePayload.type) {
    case errorType.global:
      error.type = 'global'
      break
    case errorType.field:
      error.type = 'field'
      break
    default:
      error.type = 'field'
  }

  error.path = ePayload.path
  error.message = ePayload.message
  return JSON.stringify(error)
}

export interface Token {
  userId: string
  exp: number
  iat: number
}
