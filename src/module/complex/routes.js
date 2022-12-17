import { Router } from "express";
import validationMiddleware from "../../middlewares/validation.middleware.js";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { validationComplex } from "../../validation/validation.js";
import complex from "./complex.js";

const complexRoutes = Router()

export default complexRoutes
  .get('/', verifyToken, complex.GET)
  .post('/create', verifyToken, validationMiddleware(validationComplex), complex.POST)
  .delete('/delete/:id', verifyToken, complex.DELETE)