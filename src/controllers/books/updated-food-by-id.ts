import { getDrizzleDb } from "../../db";
import { foodsTable } from "../../db/foods";
import { AppContext } from "../../types";

export const updatedFoodById = async (c: AppContext) => {
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzleDb(d1);

  const foods = await db.select().from(foodsTable);
  const id = c.req.param("id");
  const { title } = await c.req.json();

  const upfoods = foods.map((food) => {
    if (String(food.id) === String(id)) {
      const updatedFood = {
        id: food.id,
        title,
      };
      return updatedFood;
    } else {
      return food;
    }
  });

  return c.json({ upfoods });
};
