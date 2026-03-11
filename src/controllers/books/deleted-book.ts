import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";

export const deletedFood = async (c: AppContext) => {
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzleDb(d1);

  const foods = await db.select().from(foodsTable);
  const id = c.req.param("id");

  const foundFood = foods.find((food) => String(food.id) === id);

  if (!foundFood) {
    return c.json({ message: "Not Found" });
  }

  const deletedBook = foods.filter((food) => String(food.id) !== id);

  return c.json({ deletedBook });
};
