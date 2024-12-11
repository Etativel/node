import http from "http";
import url from "url";
import events from "events";

http
  .createServer((req, res) => {
    res.write("hello");
    let eventEmitter = new events.EventEmitter();

    let eventHandler = () => {
      console.log("event called");
    };

    eventEmitter.on("scream", eventHandler);

    eventEmitter.emit("scream");

    res.end();
  })
  .listen(8080);
