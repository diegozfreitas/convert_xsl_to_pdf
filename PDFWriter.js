const PDF = require("html-pdf");

class PDFWriter {
  static WritePdf(filename, html) {
    PDF.create(html, {}).toFile(filename, (err) => {
      console.log(err);
    });
  }
}

module.exports = PDFWriter;
