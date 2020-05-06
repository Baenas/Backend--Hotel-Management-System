var express = require("express");
var router = express.Router();
const Checking = require("../models/Checking");
/* GET home page. */
router.get("/", function (req, res, next) {
  Checking.find().then(listChecking => {
      res.status(200).json(listChecking)
  });
});
//añadir checking
router.post("/", (req, res, next) => {
  const { guestID, roomID, nights, day_From, day_To } = req.body;
  Checking.create({
    guestID,
    roomID,
    nights,
    day_From,
    day_To,
  })
    .then((checking) => {
      res.status(200).json(checking);
    })
    .catch(next);
});
module.exports = router;
