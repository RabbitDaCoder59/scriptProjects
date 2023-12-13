const http = require("http");
const fs = require("fs");

const _ = require("lodash");

const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 20);
  console.log(num);

  // set header content type
  res.setHeader("content-type", "text/html");

  let path = "./web/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("location", "/about");
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send a html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //   res.write();
      res.end(data);
    }
  });
});
server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
