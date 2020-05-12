var express = require("express");
var router = express.Router();
const Guest = require("../models/Guest");
//Mostrar todas
const { checkIfLoggedIn } = require('./functions');

router.get("/", function (req, res, next) {
  Guest.find().then((guest) => {
    res.status(200).json(guest);
  });
});
router.get("/:id", function (req, res, next) {
  const { id } = req.params;

  Guest.findById(id).then((guest) => {
    res.status(200).json(guest);
  });
});
router.post("/", (req, res, next) => {
  const {
    guestName,
    guestFullName,
    guestIdCard,
    guestAge,
    guestEmail,
    guestPhone,
    guestCountry,
    guestCity,
  } = req.body;
  Guest.create({
    guestName,
    guestFullName,
    guestIdCard,
    guestAge,
    guestEmail,
    guestPhone,
    guestCountry,
    guestCity,
  })
    .then((guest) => {
      res.status(200).json(guest);
    })
    .catch(next);
});
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  Guest.findByIdAndDelete(id)
    .then((guest) => {
      res.json(guest);
    })
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const {
    guestName,
    guestFullName,
    guestIdCard,
    guestAge,
    guestEmail,
    guestPhone,
    guestCountry,
    guestCity,
  } = req.body;
  Guest.findByIdAndUpdate(id, {
    guestName,
    guestFullName,
    guestIdCard,
    guestAge,
    guestEmail,
    guestPhone,
    guestCountry,
    guestCity,
  })
    .then((guestUpdated) => {
      if (guestUpdated) {
        res.json(guestUpdated);
      } else {
        res.status(404).json("not found");
      }
    })
    .catch(next);
});
module.exports = router;
