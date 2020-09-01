import * as React from 'react'
import ReactDOM from 'react-dom'

import './style/global.less'
import { App } from './App'
import 'animate.css'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('impress'),
  () => {
    global.impress().init()
  },
)

if (process.env.NODE_ENV === 'production') {
  document.body.style.backgroundImage = 'url(/wangfan15/swagger-generator/public/asset/universe.jpg)'
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
