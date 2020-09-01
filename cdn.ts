import type { ExternalsElement } from 'webpack'

/* eslint-disable @typescript-eslint/no-var-requires */
const historyVersion = require('history/package.json').version
const lodashVersion = require('lodash/package.json').version
const reactDomVersion = require('react-dom/package.json').version
const reactVersion = require('react/package.json').version
const regeneratorRuntimeVersion = require('regenerator-runtime/package.json').version

// 根据开发环境注入不同的cdn文件
// const prefix = 'https://unpkg.com/'
const host = 'http://unpkg.jd.com/'

const externals: ExternalsElement[] = [
  {
    history: 'HistoryLibrary',
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM',
    lodash: '_',
    '@ant-design/icons': 'icons',
    'regenerator-runtime': 'regeneratorRuntime',
  },
]

const files = {
  development: [
    `history@${historyVersion}/umd/history.development.js`,
    `regenerator-runtime@${regeneratorRuntimeVersion}/runtime.js`,
    `react@${reactVersion}/umd/react.development.js`,
    `react-dom@${reactDomVersion}/umd/react-dom.development.js`,
    `lodash@${lodashVersion}/lodash.js`,
  ],
  production: [
    `history@${historyVersion}/umd/history.production.min.js`,
    `regenerator-runtime@${regeneratorRuntimeVersion}/runtime.js`,
    `react@${reactVersion}/umd/react.production.min.js`,
    `react-dom@${reactDomVersion}/umd/react-dom.production.min.js`,
    `lodash@${lodashVersion}/lodash.min.js`,
  ],
}

export const cdn: any = {
  host,
  files,
  externals,
}
