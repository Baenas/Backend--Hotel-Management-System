var express = require("express");
var router = express.Router();
const Room = require("../models/Room");
//Mostrar todas
router.get("/", function (req, res, next) {
  Room.find().then(rooms => {
      res.status(200).json(rooms)
  });
});
//find one by id
router.get("/:id", function (req, res, next) {
		const { id } = req.params;

  Room.findById(id).then(rooms => {
      res.status(200).json(rooms)
  });
});
//añadir una habitacion
router.post('/', (req, res, next) => {
	const { roomName, roomType, roomFloor,roomWifi, roomPhone , roomPrice} = req.body;
	Room.create({
	roomName, 
	roomType, 
	roomFloor,
	roomWifi,
	roomPhone ,
	roomPrice
	})
		.then(room => {
		  res.status(200).json(room)
		})
		.catch(next);
});
// POST /resorts/:id
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;

	Room.findByIdAndDelete(id)
		.then(room => {
			res.json(room);
		})
		.catch(next);
});

router.put('/:id', (req, res, next) => {
	const { id } = req.params;
const { roomName, roomType, roomFloor,roomWifi, roomPhone , roomPrice} = req.body;
	Room.findByIdAndUpdate(id, {
	roomName, 
	roomType, 
	roomFloor,
	roomWifi,
	roomPhone ,
	roomPrice
	})
		.then(roomUpdated => {
			if (roomUpdated) {
				res.json(roomUpdated);
			} else {
				res.status(404).json('not found');
			}
		})
		.catch(next);
});
module.exports = router;
