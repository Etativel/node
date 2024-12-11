import http from "http";
import myDateTime from "./module.mjs";

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The current date is " + myDateTime());
    res.end();
  })
  .listen(8080);
