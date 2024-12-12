import formidable from "formidable";
import http from "http";

const form = formidable({
  uploadDir: "./uploads", // Directory where files will be saved
  keepExtensions: true, // Keep file extensions
});

http
  .createServer(function (req, res) {
    if (req.url === "/fileuploads" && req.method.toLowerCase() === "post") {
      form.parse(req, (err, fields, files) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.write("An error occurred during file upload.");
          res.end();
          return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("File uploaded successfully!");
        res.end();
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="/fileuploads" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit" value="Upload">');
      res.write("</form>");
      res.end();
    }
  })
  .listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
  });
