import { Router } from "express";
import {homePage, aboutPage} from "../Controllers/controller.js";

const routes = Router();

routes.get("/", homePage);
routes.get("/about", aboutPage);

export default routes;