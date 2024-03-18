export const uniqueArray = <t>(
  objects: t[],
  uniqueBy: string[],
  keepFirst: boolean = true,
): t[] => {
  const orderedObject = (value) => {
    if (typeof value !== 'object') return value
    return Object.keys(value)
      .sort()
      .reduce((pre, key) => {
        pre[key] = orderedObject(value[key])
        return pre
      }, {})
  }

  return Array.from(
    objects
      .reduce((map, e) => {
        let key = uniqueBy
          .map((prop) => {
            let value = prop
              .split('.')
              .reduce((object, cur) => object?.[cur], e)
            return [JSON.stringify(orderedObject(value)), typeof value]
          })
          .flat()
          .join('-')

        if (keepFirst && map.has(key)) return map
        return map.set(key, e)
      }, new Map())
      .values(),
  )
}

/* console.log(
    JSON.stringify(uniqueArray(array, ["a.0", "b"])) //Unique by `object["a"][0]` and `object["b"]`
) // [{"a":[{"x":1},1],"b":2},{"a":[{"x":1,"y":2},2],"b":2}]

console.log(
    JSON.stringify(uniqueArray(array, ["a.0.x", "b"])) //Unique by `object["a"][0]["x"]` and `object["b"]`
) // [{"a":[{"x":1},1],"b":2}] */
