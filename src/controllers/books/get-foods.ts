import { AppContext } from "../../types";
import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";

export const getFoods = async (c: AppContext) => {
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzleDb(d1);

  const foods = await db.select().from(foodsTable);

  return c.json({ foods });
};
