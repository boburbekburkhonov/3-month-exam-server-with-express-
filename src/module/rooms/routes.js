import { Router } from "express";
import validationMiddleware from "../../middlewares/validation.middleware.js";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { validationRooms } from "../../validation/validation.js";
import rooms from "./rooms.js";

const roomsRoutes = Router()

export default roomsRoutes
  .get("/", rooms.GET)
  .get("/:id", rooms.GET_ID)
  .get("/complex/:id", rooms.GET_COMPLEX_ID)
  .post(
    "/create",
    verifyToken,
    validationMiddleware(validationRooms),
    rooms.POST
  )
  .delete("/delete/:id", verifyToken, rooms.DELETE);