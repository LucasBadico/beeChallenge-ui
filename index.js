
import Koa from 'koa'
import Router from 'koa-router'
import static from 'koa-static'
import { Sockend } from 'cote'
import { createServer } from 'http'
import { getAvailablePort } from 'utils'
import socket from 'socket.io'
import render from './renderer'
// import 'ignore-styles'
import log from '../log'

const app = new Koa()
const server = createServer(app.callback())
const io = socket(server)

app.keys = ['im a newer secret', 'i like turtle'];
app.proxy = true
app.use(render)

getAvailablePort(5001).then(port => server.listen(port)).then( () => {
    log.info(`Node app is running on port ${port}`)
  })

new Sockend(io, {
    name: 'ui sockend server'
});

if (process.env.NODE_ENV === 'production') {
    app.use(static(process.env.PUBLIC_DIR))
}

export {
    server,
    app,
    // router,
    io,
}
export default app
