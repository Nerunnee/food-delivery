import { Hono } from "hono";
import { registerFoodsRoute } from "./routes/foods.route";
import { Bindings } from "./types";

const app = new Hono<{ Bindings: Bindings }>();

registerFoodsRoute(app);

export default app;
