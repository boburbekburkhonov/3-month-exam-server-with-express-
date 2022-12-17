import { Router } from "express";
import admin from "./admin/admin.js";
import companyRoutes from "./company/routes.js";
import complexRoutes from "./complex/routes.js";
import roomsRoutes from "./rooms/routes.js";
import banksRoutes from "./banks/routes.js";


const routes = Router()

export default routes
  .use('/login/admin', admin)
  .use('/company', companyRoutes)
  .use('/complex', complexRoutes)
  .use('/rooms', roomsRoutes)
  .use('/banks', banksRoutes)