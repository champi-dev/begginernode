const route = (handle, pathname, res) => {
  if (handle[pathname]) return handle[pathname](res)

  console.log(`No request handler found for ${pathname}`)
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.write("404 Not found");
  res.end();
}

exports.route = route