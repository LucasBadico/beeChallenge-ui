// import 'ignore-styles'
import 'babel-polyfill'
import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'
import log from '../log'
import appRenderer from './middleware/app-renderer'
import { getAvailablePort } from 'utils'


process.on('uncaughtException', (ex) => {
  log.error(ex)
  process.exit(1)
})

const app = express()
const server = http.createServer(app)
// Heroku requires you to use process.env.PORT
const port = process.env.DEV_APP_PORT || process.env.PORT

// Don't rate limit heroku
app.enable('trust proxy')

// Parse bodies as JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// In development, we use webpack server
if (process.env.NODE_ENV === 'production') {  
  app.use(express.static(process.env.PUBLIC_DIR, {
    maxAge: '180 days'
  }))
}

app.use(appRenderer)
server.listen(port, () => {
  log.info(`Node app is running on port ${port}`)
})

export {
  app,
  server,
}