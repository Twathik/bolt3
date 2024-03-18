import { Client } from 'typesense'
import { TypesenseIndexes } from '../TypesenseIndexesType'

const RemoveTypesenseDocument = async ({
  index,
  typesense,
  id,
}: {
  index: TypesenseIndexes
  typesense: Client
  id: string
}) => {
  await typesense.collections(index).documents(id).delete()
}

export default RemoveTypesenseDocument
