import { Router } from "express";
import validationMiddleware from "../../middlewares/validation.middleware.js";
import { verifyToken } from "../../middlewares/verifyToken.js";
import { validationCompany } from "../../validation/validation.js";
import company from "./company.js";

const companyRoutes = Router()

export default companyRoutes
  .get('/', verifyToken, company.GET)
  .post('/create', verifyToken, validationMiddleware(validationCompany), company.POST)
  .delete('/delete/:id', verifyToken, company.DELETE)