export const next = () => {
  const instance = global.impress()
  setTimeout(() => {
    instance.next()
  })
}
