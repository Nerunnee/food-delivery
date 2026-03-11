import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/foods.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: "81a7fac1ef9611d421525ffa03dad5f2",
    databaseId: "fb01148c-0c0c-4f83-bd3e-5b534bce1e26",
    token: "lweeTkz4q8ZMTRy9iVoTSsSjYo2MFNMACc9amL2B",
  },
});
