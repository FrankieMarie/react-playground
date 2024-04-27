import * as schema from "./schema.js";
import { db } from "./db.js";

const result = await db.select().from(schema.tasks);
console.log(result);
