export const assetPath = (asset: string) => {
  return `${process.env.NODE_ENV === 'production' ? 'public/' : '/'}${asset}`
}
