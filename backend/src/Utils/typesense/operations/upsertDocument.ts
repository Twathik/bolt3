import { Client } from 'typesense'
import { TypesenseIndexes } from '../TypesenseIndexesType'

const UpsertTypesenseDocument = async <T extends Object>({
  index,
  typesense,
  documents,
}: {
  index: TypesenseIndexes
  typesense: Client
  documents: T[]
}) => {
  await typesense
    .collections(index)
    .documents()
    .import(documents, { action: 'upsert' })
}

export default UpsertTypesenseDocument
