// Run cd qr-code-generator
// Run node index.js
// Type the URL
// QRCode.png will be created
// Use npm inquirer and qr package for more customisation

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const link = answers.URL;
    var qr_svg = qr.image(link);
    qr_svg.pipe(fs.createWriteStream("QRCode.png"));

    fs.writeFile("./Link.txt", link, (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
