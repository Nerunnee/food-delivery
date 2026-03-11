import { eq } from "drizzle-orm";
import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";

export const updatedFoodById = async (c: AppContext) => {
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzleDb(d1);

  const id = c.req.param("id");

  if (!id) return c.json({ message: "not found" });

  const { name, ingredients } = await c.req.json();

  const result = await db
    .update(foodsTable)
    .set({ name, ingredients })
    .where(eq(foodsTable.id, Number(id)))
    .returning();

  return c.json({ result });
};
