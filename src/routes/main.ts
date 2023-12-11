import { Router } from "express";
import MainController from "../controllers/mainController";

class Main {
  path = "/";
  router = Router();
  mainController = new MainController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.mainController.healthCheck);
  }
}

export default Main;
