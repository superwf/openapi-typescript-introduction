declare module '*.css'
declare module '*.less'

declare namespace NodeJS {
  // eslint-disable-next-line
  interface Global {
    impress: any
  }
}
