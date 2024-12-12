import http from "http";
import fs from "fs";
import url from "url";

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filePath = "." + q.pathname;
    fs.readFile(filePath, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      console.log(filePath);
      return res.end();
    });
  })
  .listen(8080);
