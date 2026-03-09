import { Context } from "hono";
import { foods } from "../../model/foods";

export const updatedFoodById = async (c: Context) => {
  const id = c.req.param("id");
  const { title } = await c.req.json();

  const upfoods = foods.map((food) => {
    if (food.id === String(id)) {
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
