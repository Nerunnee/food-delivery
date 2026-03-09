import { Hono } from "hono";
import { getFoods } from "../controllers/books/get-foods";
import { getFoodById } from "../controllers/books/get-food-by-id";
import { addFood } from "../controllers/books/add-food";
import { updatedFoodById } from "../controllers/books/updated-food-by-id";
import { deletedFood } from "../controllers/books/deleted-book";

export const registerFoodsRoute = (app: Hono) => {
  app.get("/foods", getFoods);
  app.get("/foods/:id", getFoodById);
  app.post("/foods", addFood);
  app.put("/foods/:id", updatedFoodById);
  app.delete("/foods", deletedFood);
};
