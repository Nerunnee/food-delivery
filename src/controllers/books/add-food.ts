import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";

export const addFood = async (c: AppContext) => {
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzleDb(d1);

  const { name, ingredients } = await c.req.json();

  const newFood = {
    name: name,
    ingredients,
  };

  const [food] = await db.insert(foodsTable).values(newFood).returning();

  return c.json({ food });
};
