import { eq } from "drizzle-orm";
import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";

export const deletedFood = async (c: AppContext) => {
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzleDb(d1);

  const foods = await db.select().from(foodsTable);
  const id = c.req.param("id");

  if (!id) return c.json({ message: "not found" });

  await db.delete(foodsTable).where(eq(foodsTable.id, Number(id)));

  return c.json({ success: true });
};
