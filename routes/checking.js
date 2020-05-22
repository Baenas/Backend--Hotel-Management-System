var express = require("express");
var router = express.Router();
const Guest = require("../models/Guest");
const Room = require("../models/Room");
const Checking = require("../models/Checking");
const Extra = require("../models/Extra");
/* GET home page. */
router.get("/", function (req, res, next) {
  Checking.find().then(listChecking => {
    Guest.populate(listChecking, { path: "guestID" }).then(listChecking => {
      Room.populate(listChecking, { path: "roomID" }).then(listChecking => {
        Extra.populate(listChecking, { path: "extra" }).then(listChecking => {
          res.status(200).json(listChecking)
        })
      })
    })
  });
});
//añadir checking
router.post("/", (req, res, next) => {
  const { guestID, roomID, nights, day_From, day_To, estado, extraguest, dashkey } = req.body;
  Checking.create({
    guestID,
    roomID,
    nights,
    day_From,
    day_To,
    estado,
    extraguest,
    dashkey
  })
    .then((checking) => {
      res.status(200).json(checking);
    })
    .catch(next);
});
router.get("/:id", function (req, res, next) {
  const { id } = req.params;
  Checking.findById(id).then(listChecking => {
    Guest.populate(listChecking, { path: "guestID" }).then(listChecking => {
      Room.populate(listChecking, { path: "roomID" }).then(listChecking => {
        Extra.populate(listChecking, { path: "extra" }).then(listChecking => {
          res.status(200).json(listChecking)
        })
      })
    })
  });
});
router.patch('/array/:id', (req, res, next) => {
  const updateObject = req.body; // {last_name : "smith", age: 44}
  const id = req.params.id;
  Checking.findOneAndUpdate({ _id: id }, { $push: updateObject }).then(room => {
    res.json(room);
  })
    .catch(next);
});
router.patch('/value/:id', (req, res, next) => {
  const updateObject = req.body; // {last_name : "smith", age: 44}
  const id = req.params.id;
  Checking.findOneAndUpdate({ _id: id }, { $set: updateObject }).then(room => {
    res.json(room);
  })
    .catch(next);
});
module.exports = router;
