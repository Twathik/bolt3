export const generateRDFTemplate = ({
  object,
  predicate,
  value,
  facet,
}: {
  object: string
  predicate: string
  value: string
  facet?: { facetName: string; value: any }[]
}): string => `
${object} <${predicate}> ${value} ${
  facet
    ? `(${facet
        .map(
          (f) =>
            `${f.facetName}=${
              typeof f.value === 'string'
                ? `"${f.value
                    .replaceAll('"', '')
                    .replaceAll('\n', '')
                    .replaceAll('\\', '--')}"`
                : `"${f.value}"`
            }`,
        )
        .join(',')})`
    : ''
} .`

export const transformObjectToRDF = ({
  object,
  type,
  uid,
  generateType = true,
}: {
  object: Object
  type: string
  uid: string
  generateType?: boolean
}): string => {
  let temp: string = generateType
    ? generateRDFTemplate({
        object: `_:${type}${uid}`,
        predicate: 'dgraph.type',
        value: `"${type}"`,
      })
    : ''
  for (const [key, value] of Object.entries(object)) {
    temp = temp.concat(
      generateRDFTemplate({
        object: `_:${type}${uid}`,
        predicate: type.concat(`.${key}`),
        value:
          typeof value === 'string'
            ? `"${value
                .replaceAll('"', '')
                .replaceAll('\n', '')
                .replaceAll('\\', '--')}"`
            : `"${value}"`,
      }),
    )
  }
  return temp
}
