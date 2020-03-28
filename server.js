const http = require('http')
const url = require('url')

const start = (route, handle) => {
  http.createServer(onRequest).listen(8888)

  function onRequest (req, res) {
    const pathname = url.parse(req.url).pathname
    route(handle, pathname, res)
  }
}

exports.start = start