import { Router } from "express";
import admin from "./admin.js";

const adminRoutes = Router();

export default adminRoutes
  .post('/', admin)