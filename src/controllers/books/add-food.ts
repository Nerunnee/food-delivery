import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";

export const addFood = async (c: AppContext) => {
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzleDb(d1);

  const foods = await db.select().from(foodsTable);
  const { title } = await c.req.json();

  const foodId = new Date().getTime();

  const newFood = {
    id: String(foodId),
    title,
  };

  const updatedFood = [...foods, newFood];

  return c.json({ updatedFood });
};
