const exec = require('child_process').exec

function start (res) {
  exec("ls -lah", function (error, stdout, stderr) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(stdout);
    res.end();
  })
}

function upload (res) {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.write("Hello Upload");
  res.end();
}

exports.start = start
exports.upload = upload