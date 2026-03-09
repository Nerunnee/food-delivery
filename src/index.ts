import { Hono } from "hono";
import { registerFoodsRoute } from "./routes/foods.roure";

const app = new Hono();

registerFoodsRoute(app);

export default app;
