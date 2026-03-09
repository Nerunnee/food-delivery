import { Context } from "hono";
import { foods } from "../../model/foods";

export const addFood = async (c: Context) => {
  const { title } = await c.req.json();

  const foodId = new Date().getTime();

  const newFood = {
    id: String(foodId),
    title,
  };

  const updatedFood = [...foods, newFood];

  return c.json({ updatedFood });
};
