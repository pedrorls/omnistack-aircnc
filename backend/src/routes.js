const express = require("express");
const multer = require("multer");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const uploadConfig = require("./config/upload");
const routes = express.Router();
const upload = multer(uploadConfig);

routes.get("/dashboard", DashboardController.show);

routes.post("/sessions", SessionController.store);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

module.exports = routes;
