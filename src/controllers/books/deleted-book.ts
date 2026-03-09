import { Context } from "hono";
import { foods } from "../../model/foods";

export const deletedFood = (c: Context) => {
  const id = c.req.param("id");

  const foundFood = foods.find((food) => food.id === id);

  if (!foundFood) {
    return c.json({ message: "Not Found" });
  }

  const deletedBook = foods.filter((food) => food.id !== id);

  return c.json({ deletedBook });
};
