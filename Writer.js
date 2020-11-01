const fs = require("fs");
const util = require("util");

class Writer {
  constructor() {
    this.writer = util.promisify(fs.writeFile);
  }

  async Write(filename, data) {
    try {
      return await this.writer(filename, data);
    } catch {
      console.log("deu ruim na hora de gravar");
    }
  }
}

module.exports = Writer;
