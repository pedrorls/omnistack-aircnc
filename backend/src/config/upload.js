const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      ext = path.extname(file.originalname);
      filename = path.basename(file.originalname, ext);
      cb(null, `${filename}-${Date.now()}${ext}`);
    }
  })
};
