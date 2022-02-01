const fs = require("fs");

fs.readFile("./content.txt", (err, data) => {
  if (err) {
    console.log("error in reading file");
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
