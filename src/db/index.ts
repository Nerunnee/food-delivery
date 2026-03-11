import { drizzle } from "drizzle-orm/d1";
import type { D1Database } from "@cloudflare/workers-types";
import * as foodsSchema from "./foods";

export function getDrizzleDb(d1: D1Database) {
  return drizzle(d1, { schema: foodsSchema });
}
