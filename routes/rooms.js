var express = require("express");
var router = express.Router();
const Guest = require("../models/Guest");
const Room = require("../models/Room");
const { checkIfLoggedIn } = require('./functions');
// router.use(checkIfLoggedIn); Para preguntar
//Mostrar todas

router.get("/", function (req, res, next) {
	Room.find().then(rooms => {
		Guest.populate(rooms, { path: "guestID" })
			.then(rooms => {
				res.status(200).json(rooms)
			});

	})
});

//find one by id
router.get("/:id", function (req, res, next) {
	const { id } = req.params;

	Room.findById(id).then(rooms => {
		Guest.populate(rooms, { path: "guestID" }).then(rooms => {
			res.status(200).json(rooms)
		});
	})
});
//añadir una habitacion
router.post('/', (req, res, next) => {
	const { roomName, roomType, roomFloor, roomWifi, roomPhone, roomPrice, state, guestID } = req.body;
	Room.create({
		roomName,
		roomType,
		roomFloor,
		roomWifi,
		roomPhone,
		roomPrice,
		state,
		guestID,
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
	const { roomName, roomType, roomFloor, roomWifi, roomPhone, roomPrice, state, guestID } = req.body;
	Room.findByIdAndUpdate(id, {
		roomName,
		roomType,
		roomFloor,
		roomWifi,
		roomPhone,
		roomPrice,
		state,
		guestID
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
router.patch('/:id', (req, res, next) => {
	const updateObject = req.body; // {last_name : "smith", age: 44}
	const id = req.params.id;
	Room.update({ _id: id }, { $set: updateObject }).then(room => {
		res.json(room);
	})
		.catch(next);
});
module.exports = router;
