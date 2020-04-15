const http = require('http')
const url = require('url')

const start = (route, handle) => {
  const port = 8888
  http.createServer(onRequest).listen(port)
  console.log(`Server started on port ${port}`)

  function onRequest (req, res) {
    const pathname = url.parse(req.url).pathname

    req.setEncoding("utf8")

    let postData
    req.addListener('data', (chunk) => {
      postData += chunk
    })

    req.addListener('end', () => {
      route(handle, pathname, res, postData)
    })
  }
}

exports.start = start