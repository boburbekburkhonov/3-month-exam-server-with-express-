import { Router } from "express";
import validationMiddleware from "../../middlewares/validation.middleware.js";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { validationBanks } from "../../validation/validation.js";
import banks from "./banks.js";

const banksRoutes = Router()

export default banksRoutes
  .get("/", banks.GET)
  .get("/:id", banks.GET_ID)
  .post(
    "/create",
    verifyToken,
    validationMiddleware(validationBanks),
    banks.POST
  )
  .delete("/delete/:id", verifyToken, banks.DELETE);