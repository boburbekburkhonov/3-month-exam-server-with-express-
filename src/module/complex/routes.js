import { Router } from "express";
import validationMiddleware from "../../middlewares/validation.middleware.js";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { validationComplex } from "../../validation/validation.js";
import complex from "./complex.js";

const complexRoutes = Router()

export default complexRoutes
  .get("/", complex.GET)
  .get("/:id", complex.GET_ID)
  .get("/company/:id", complex.GET_COMPANY_ID)
  .post(
    "/create",
    verifyToken,
    validationMiddleware(validationComplex),
    complex.POST
  )
  .delete("/delete/:id", verifyToken, complex.DELETE);