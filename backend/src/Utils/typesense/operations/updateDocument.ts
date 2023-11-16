import { Client } from 'typesense'
import { TypesenseIndexes } from '../TypesenseIndexesType'

const UpdateTypesenseDocument = async <T extends { id: string }>({
  index,
  typesense,
  document,
}: {
  index: TypesenseIndexes
  typesense: Client
  document: T
}) => {
  await typesense.collections(index).documents(document.id).update(document)
}

export default UpdateTypesenseDocument
