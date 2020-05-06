var express = require("express");
var router = express.Router();
const Extra = require("../models/Extra");
/* GET home page. */
router.get("/", function (req, res, next) {
  Extra.find().then((listChecking) => {
    res.status(200).json(listChecking);
  });
});
//añadir extra
router.post("/", (req, res, next) => {
  const { type, name, description, price, date } = req.body;
  Extra.create({
    type,
    name,
    description,
    price,
    date,
  })
    .then((extra) => {
      res.status(200).json(extra);
    })
    .catch(next);
});
//remove extra
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;

	Extra.findByIdAndDelete(id)
		.then(extra => {
			res.json(extra);
		})
		.catch(next);
});
router.put('/:id', (req, res, next) => {
	const { id } = req.params;
const { type, name, description, price, date} = req.body;
	Extra.findByIdAndUpdate(id, {
type, name, description, price, date
	})
		.then(extraUpdated => {
			if (extraUpdated) {
				res.json(extraUpdated);
			} else {
				res.status(404).json('not found');
			}
		})
		.catch(next);
});
module.exports = router;
