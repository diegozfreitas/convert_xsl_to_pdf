class Processor {
  static Process(data) {
    var brute = data.split("\r\n");

    var rows = [];

    brute.forEach((row) => {
      var arr = row.split(",");
      rows.push(arr);
    });

    return rows;
  }
}

module.exports = Processor;
