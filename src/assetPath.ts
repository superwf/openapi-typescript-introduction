export const assetPath = (asset: string) => {
  return `${process.env.NODE_ENV === 'production' ? '/wangfan15/swagger-generator/public/' : '/'}${asset}`
}
