const router = require("express").Router();

router.use("/posts", require("./controllers/index"));

module.exports = router;
