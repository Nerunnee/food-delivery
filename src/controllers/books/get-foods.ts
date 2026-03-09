import { Context } from "hono";
import { foods } from "../../model/foods";

export const getFoods = (c: Context) => {
  return c.json({ foods });
};
