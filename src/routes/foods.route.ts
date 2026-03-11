import { getFoods } from "../controllers/books/get-foods";
import { getFoodById } from "../controllers/books/get-food-by-id";
import { addFood } from "../controllers/books/add-food";
import { updatedFoodById } from "../controllers/books/updated-food-by-id";
import { deletedFood } from "../controllers/books/deleted-book";
import { App } from "../types";

export const registerFoodsRoute = (app: App) => {
  app.get("/foods", getFoods);
  app.get("/foods/:id", getFoodById);
  app.post("/foods", addFood);
  app.put("/foods/:id", updatedFoodById);
  app.delete("/foods/:id", deletedFood);
};
