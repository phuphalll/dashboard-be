import { Router } from "express";
import SalesController from "../controllers/salesController";

class Sales {
  path = "/sales";
  router = Router();
  salesController = new SalesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.salesController.getReport);
  }
}

export default Sales;
