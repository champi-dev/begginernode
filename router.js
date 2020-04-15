const route = (handle, pathname, res, postData) => {
  if (handle[pathname]) return handle[pathname](res, postData)

  console.log(`No request handler found for ${pathname}`)
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.write("404 Not found");
  res.end();
}

exports.route = route