/* eslint-disable no-nested-ternary */

export const documentServerURL =
  process.env.NODE_ENV === 'production'
    ? 'http://docserver:8001'
    : process.env.TLS === 'https'
    ? 'https://bhcdev.local/DocumentServer'
    : 'http://bhcdev.local/DocumentServer'

export const editorURL =
  process.env.NODE_ENV === 'production'
    ? process.env.TLS === 'https'
      ? `https://${process.env.HOST}/DocumentServer/editor`
      : `http://${process.env.HOST}/DocumentServer/editor`
    : process.env.TLS === 'https'
    ? 'https://bhcdev.local/DocumentServer/editor'
    : 'http://bhcdev.local/DocumentServer/editor'

export interface DocumentServerTokenPayload {
  id: string
  authorizedSession: string
  isServer?: boolean
}
