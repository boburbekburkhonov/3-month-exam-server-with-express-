import { ErrorHandler } from "../../error/error.handler.js";
import model from "./model.js";

class RoomsControllers {
  async GET_ID(req, res, next) {
    const { id } = req.params;

    const foundRooms = await model.getRoomsId(id)
    .catch(err => next(new ErrorHandler(err.message, 503)))

    if(foundRooms) res.json(foundRooms)
  }

  async GET_COMPLEX_ID(req, res, next) {
    const { id } = req.params;

    const foundRooms = await model.getRoomsComplexId(id)
    .catch(err => next(new ErrorHandler(err.message, 503)))

    if(foundRooms) res.json(foundRooms)
  }

  async GET(req, res, next) {
    const allRooms = await model.getRooms()
    .catch(err => next(new ErrorHandler(err.message, 503)))

    if(allRooms) res.json(allRooms)
  }

  async POST(req, res, next) {
    const { count, size, price, complex } = req.filtered;

    const createdRooms = await model.createRooms(count, size, price, complex)
    .catch(err => next(new ErrorHandler(err.message, 503)))


    if(createdRooms) res.status(201).json({
      message: 'Rooms created successfully',
      status: 201
    })
  }

  async DELETE(req, res, next){
    const { id } = req.params;

    const deletedRooms = await model.deleteRooms(id)
    .catch(err => next(new ErrorHandler(err.message, 503)))

    if (deletedRooms)
      res.status(200).json({
        message: "Rooms deleted successfully",
        status: 204,
      });
  }
}

export default new RoomsControllers()