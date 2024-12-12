import http from "http";
import url from "url";
import { upperCase } from "upper-case";

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    res.write(upperCase("hello world"));
    // res.end(txt);
  })
  .listen(8080);
