import crypto from 'crypto'

export const createHash = ({ data, len }: { data: string; len: number }) => {
  return crypto
    .createHash('shake256', { outputLength: len })
    .update(data)
    .digest('hex')
}
