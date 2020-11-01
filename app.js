var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

main = async () => {
  var dataBrute = await leitor.Read("./pasta1.csv");

  var data = Processor.Process(dataBrute);

  var nois = new Table(data);

  var html = await HtmlParser.Parse(nois);

  //escritor.Write(Date.now() + "_meuHtml.html", html);

  PDFWriter.WritePdf(Date.now() + "_meuHtml.pdf", html);

  console.log("foi");
};

main();
